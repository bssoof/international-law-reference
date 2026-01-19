import { useState, useEffect } from 'react'
import {
    Box, VStack, HStack, Text, Textarea, Button, Avatar,
    Heading, Card, CardBody, Divider, useToast
} from '@chakra-ui/react'
import { useUser } from '../context/UserContext'
import { supabase } from '../supabaseClient'

export function Comments({ itemId, type }) {
    const { user } = useUser()
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState('')
    const [loading, setLoading] = useState(false)
    const toast = useToast()

    useEffect(() => {
        fetchComments()

        // Optional: Realtime subscription
        const channel = supabase
            .channel('public:comments')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'comments' }, (payload) => {
                if (payload.new.item_id === itemId.toString() && payload.new.item_type === type) {
                    setComments(prev => [payload.new, ...prev])
                }
            })
            .subscribe()

        return () => supabase.removeChannel(channel)
    }, [itemId, type])

    const fetchComments = async () => {
        const { data, error } = await supabase
            .from('comments')
            .select('*')
            .eq('item_id', itemId.toString())
            .eq('item_type', type)
            .order('created_at', { ascending: false })

        if (error) console.error('Error fetching comments:', error)
        else setComments(data || [])
    }

    const handleAddComment = async () => {
        if (!user) {
            toast({ title: 'يرجى تسجيل الدخول للتعليق', status: 'warning' })
            return
        }
        if (!newComment.trim()) return

        setLoading(true)
        const comment = {
            item_id: itemId.toString(),
            item_type: type,
            content: newComment,
            author_name: user.name,
            author_avatar: user.user_metadata?.avatar_url,
            user_id: user.id
        }

        const { error } = await supabase
            .from('comments')
            .insert([comment])

        if (error) {
            toast({ title: 'حدث خطأ أثناء النشر', description: error.message, status: 'error' })
        } else {
            setNewComment('')
            toast({ title: 'تم نشر التعليق', status: 'success' })
        }
        setLoading(false)
    }

    return (
        <Box mt={8}>
            <Heading size="md" mb={6}>التعليقات ({comments.length})</Heading>

            {user ? (
                <VStack align="stretch" mb={8}>
                    <Textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="أضف تعليقك هنا..."
                        rows={3}
                        isDisabled={loading}
                    />
                    <Button
                        colorScheme="brand"
                        onClick={handleAddComment}
                        alignSelf="flex-end"
                        isDisabled={!newComment.trim()}
                        isLoading={loading}
                    >
                        نشر التعليق
                    </Button>
                </VStack>
            ) : (
                <Box p={4} bg="gray.50" borderRadius="md" textAlign="center" mb={6}>
                    <Text color="gray.500">سجل الدخول للمشاركة في النقاش</Text>
                </Box>
            )}

            <VStack align="stretch" spacing={4}>
                {comments.map(comment => (
                    <Card key={comment.id} variant="outline" size="sm">
                        <CardBody>
                            <HStack mb={2} spacing={3}>
                                <Avatar size="sm" name={comment.author_name} src={comment.author_avatar} />
                                <Box>
                                    <Text fontWeight="bold" fontSize="sm">{comment.author_name}</Text>
                                    <Text fontSize="xs" color="gray.500">
                                        {new Date(comment.created_at).toLocaleDateString('ar-EG')}
                                    </Text>
                                </Box>
                            </HStack>
                            <Text color="gray.700">{comment.content}</Text>
                        </CardBody>
                    </Card>
                ))}
                {comments.length === 0 && (
                    <Text textAlign="center" color="gray.400" py={4}>
                        لا توجد تعليقات بعد. كن أول من يعلق!
                    </Text>
                )}
            </VStack>
        </Box>
    )
}
