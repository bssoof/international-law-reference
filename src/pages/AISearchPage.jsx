import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Box, Heading, Text, VStack, HStack, Input, InputGroup, InputLeftElement,
    Button, Card, CardBody, Alert, AlertIcon, useColorModeValue, Spinner,
    Badge, Divider, Icon
} from '@chakra-ui/react'
// Removing React Icons to prevent mobile crash
// import { FiSearch, FiArrowRight... } from 'react-icons/fi'
import { aiSearch, semanticSearch, isAIEnabled } from '../lib/gemini'
import { treatiesData, casesData, resolutionsData } from '../data'

export function AISearchPage() {
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false)
    const [answer, setAnswer] = useState('')
    const [results, setResults] = useState(null)
    const [error, setError] = useState('')
    const cardBg = useColorModeValue('white', 'gray.800')

    const handleSearch = async () => {
        if (!query.trim()) return

        setLoading(true)
        setError('')
        setAnswer('')
        setResults(null)

        try {
            // Get AI answer
            const aiAnswer = await aiSearch(query, treatiesData, casesData, resolutionsData)
            setAnswer(aiAnswer)

            // Get relevant items
            const relevant = await semanticSearch(query, treatiesData, casesData, resolutionsData)
            setResults(relevant)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    if (!isAIEnabled()) {
        return (
            <Box maxW="800px" mx="auto" p={8} textAlign="center">
                <Alert status="warning" borderRadius="lg">
                    <AlertIcon />
                    البحث الذكي غير مفعّل. يرجى إعداد مفتاح Gemini API.
                </Alert>
                <Button as={Link} to="/" mt={4} colorScheme="brand">العودة للرئيسية</Button>
            </Box>
        )
    }

    return (
        <Box maxW="900px" mx="auto" p={{ base: 4, md: 8 }}>
            <VStack align="stretch" spacing={6}>
                {/* Header */}
                <Box textAlign="center" mb={4}>
                    <HStack justify="center" mb={2}>
                        <Text fontSize="3xl">💬</Text>
                        <Heading size="lg">البحث الذكي</Heading>
                    </HStack>
                    <Text color="gray.500">اسأل أي سؤال عن القانون الدولي باللغة العربية</Text>
                </Box>

                {/* Search Input */}
                <Card bg={cardBg}>
                    <CardBody>
                        <VStack spacing={4}>
                            <InputGroup size="lg">
                                <InputLeftElement pointerEvents="none">
                                    <Text>🔍</Text>
                                </InputLeftElement>
                                <Input
                                    placeholder="مثال: ما هي اتفاقية جنيف؟ أو ما القضايا المتعلقة بفلسطين؟"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                                    borderRadius="lg"
                                />
                            </InputGroup>
                            <Button
                                colorScheme="brand"
                                size="lg"
                                width="100%"
                                onClick={handleSearch}
                                isLoading={loading}
                                loadingText="جاري البحث..."
                            >
                                🔍 بحث ذكي
                            </Button>
                        </VStack>
                    </CardBody>
                </Card>

                {/* Loading */}
                {loading && (
                    <Box textAlign="center" py={8}>
                        <Spinner size="xl" color="brand.600" />
                        <Text mt={4} color="gray.500">يتم تحليل سؤالك...</Text>
                    </Box>
                )}

                {/* Error */}
                {error && (
                    <Alert status="error" borderRadius="lg">
                        <AlertIcon />
                        {error}
                    </Alert>
                )}

                {/* AI Answer */}
                {answer && (
                    <Card bg={cardBg} borderColor="brand.500" borderWidth={2}>
                        <CardBody>
                            <HStack mb={3}>
                                <Badge colorScheme="brand" fontSize="sm">🤖 إجابة الذكاء الاصطناعي</Badge>
                            </HStack>
                            <Text whiteSpace="pre-wrap" lineHeight="tall">{answer}</Text>
                        </CardBody>
                    </Card>
                )}

                {/* Related Results */}
                {results && (results.treaties.length > 0 || results.cases.length > 0 || results.resolutions.length > 0) && (
                    <Box>
                        <Heading size="md" mb={4}>📚 نتائج ذات صلة</Heading>

                        {results.treaties.length > 0 && (
                            <Box mb={4}>
                                <HStack mb={2}>
                                    <Text>📄</Text>
                                    <Text fontWeight="bold">الاتفاقيات ({results.treaties.length})</Text>
                                </HStack>
                                <VStack align="stretch" spacing={2}>
                                    {results.treaties.map(t => (
                                        <Card key={t.id} size="sm" variant="outline" as={Link} to={`/treaty/${t.id}`} _hover={{ borderColor: 'brand.500' }}>
                                            <CardBody py={2}>
                                                <Text fontWeight="600" color="brand.600">{t.name}</Text>
                                                <Text fontSize="sm" color="gray.500">{t.date} • {t.topic}</Text>
                                            </CardBody>
                                        </Card>
                                    ))}
                                </VStack>
                            </Box>
                        )}

                        {results.cases.length > 0 && (
                            <Box mb={4}>
                                <HStack mb={2}>
                                    <Text>⚖️</Text>
                                    <Text fontWeight="bold">القضايا ({results.cases.length})</Text>
                                </HStack>
                                <VStack align="stretch" spacing={2}>
                                    {results.cases.map(c => (
                                        <Card key={c.id} size="sm" variant="outline" as={Link} to={`/case/${c.id}`} _hover={{ borderColor: 'brand.500' }}>
                                            <CardBody py={2}>
                                                <Text fontWeight="600" color="brand.600">{c.name}</Text>
                                                <Text fontSize="sm" color="gray.500">{c.court} • {c.year}</Text>
                                            </CardBody>
                                        </Card>
                                    ))}
                                </VStack>
                            </Box>
                        )}

                        {results.resolutions.length > 0 && (
                            <Box mb={4}>
                                <HStack mb={2}>
                                    <Text>🕊️</Text>
                                    <Text fontWeight="bold">القرارات ({results.resolutions.length})</Text>
                                </HStack>
                                <VStack align="stretch" spacing={2}>
                                    {results.resolutions.map(r => (
                                        <Card key={r.id} size="sm" variant="outline" _hover={{ borderColor: 'brand.500' }}>
                                            <CardBody py={2}>
                                                <Text fontWeight="600" fontFamily="mono" color="brand.600">{r.number}</Text>
                                                <Text fontSize="sm" color="gray.500">{r.type} • {r.year}</Text>
                                            </CardBody>
                                        </Card>
                                    ))}
                                </VStack>
                            </Box>
                        )}
                    </Box>
                )}

                {/* Back Button */}
                <Button as={Link} to="/" variant="outline" leftIcon={<Text>⬅️</Text>}>
                    العودة للرئيسية
                </Button>
            </VStack>
        </Box>
    )
}
