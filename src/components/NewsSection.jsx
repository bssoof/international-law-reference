import React, { useState, useEffect } from 'react'
import {
    Box, Heading, Text, VStack, HStack, SimpleGrid, useColorModeValue,
    Card, CardBody, CardFooter, Image, Badge, Button, Skeleton, SkeletonText,
    Link, IconButton, Select, Spinner
} from '@chakra-ui/react'
// import { FiExternalLink, FiRefreshCw, FiClock } from 'react-icons/fi'

// Sample news data (in production, this would come from an API)
const sampleNews = [
    {
        id: 1,
        title: 'محكمة العدل الدولية تصدر قراراً جديداً بشأن غزة',
        description: 'أصدرت محكمة العدل الدولية قراراً جديداً يدعو إلى وقف فوري للأعمال العسكرية...',
        source: 'الجزيرة',
        date: '2024-01-15',
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400',
        category: 'قضايا',
        url: 'https://aljazeera.net'
    },
    {
        id: 2,
        title: 'الأمم المتحدة تعتمد قراراً جديداً حول تغير المناخ',
        description: 'اعتمدت الجمعية العامة للأمم المتحدة قراراً يدعو الدول إلى تسريع جهود مكافحة التغير المناخي...',
        source: 'رويترز',
        date: '2024-01-14',
        image: 'https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=400',
        category: 'قرارات',
        url: 'https://reuters.com'
    },
    {
        id: 3,
        title: 'توقيع اتفاقية دولية جديدة لحماية المحيطات',
        description: 'وقعت أكثر من 50 دولة على اتفاقية جديدة تهدف إلى حماية المحيطات من التلوث...',
        source: 'بي بي سي',
        date: '2024-01-13',
        image: 'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=400',
        category: 'اتفاقيات',
        url: 'https://bbc.com'
    },
    {
        id: 4,
        title: 'المحكمة الجنائية الدولية تفتح تحقيقاً جديداً',
        description: 'أعلن المدعي العام للمحكمة الجنائية الدولية عن فتح تحقيق جديد في جرائم حرب مزعومة...',
        source: 'فرانس 24',
        date: '2024-01-12',
        image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400',
        category: 'قضايا',
        url: 'https://france24.com'
    },
    {
        id: 5,
        title: 'مجلس حقوق الإنسان يناقش أوضاع اللاجئين',
        description: 'عقد مجلس حقوق الإنسان التابع للأمم المتحدة جلسة خاصة لمناقشة أوضاع اللاجئين حول العالم...',
        source: 'الأمم المتحدة',
        date: '2024-01-11',
        image: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=400',
        category: 'حقوق الإنسان',
        url: 'https://un.org'
    },
    {
        id: 6,
        title: 'اتفاقية جديدة لمكافحة الجرائم الإلكترونية',
        description: 'أقرت الأمم المتحدة اتفاقية جديدة تهدف إلى تعزيز التعاون الدولي في مكافحة الجرائم الإلكترونية...',
        source: 'سكاي نيوز',
        date: '2024-01-10',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400',
        category: 'اتفاقيات',
        url: 'https://skynews.com'
    },
]

const categoryColors = {
    'قضايا': 'red',
    'قرارات': 'purple',
    'اتفاقيات': 'blue',
    'حقوق الإنسان': 'green',
}

function NewsSection() {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)
    const [filter, setFilter] = useState('الكل')
    const [lastUpdate, setLastUpdate] = useState(new Date())
    const bgColor = useColorModeValue('white', 'gray.800')
    const borderColor = useColorModeValue('gray.200', 'gray.600')

    useEffect(() => {
        loadNews()
    }, [])

    const loadNews = async () => {
        setLoading(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        setNews(sampleNews)
        setLastUpdate(new Date())
        setLoading(false)
    }

    const filteredNews = filter === 'الكل'
        ? news
        : news.filter(n => n.category === filter)

    const categories = ['الكل', ...new Set(news.map(n => n.category))]

    return (
        <Box p={4}>
            <VStack spacing={6} align="stretch">
                <HStack justify="space-between" wrap="wrap">
                    <VStack align="start" spacing={0}>
                        <Heading size="lg">📰 أخبار القانون الدولي</Heading>
                        <HStack color="gray.500" fontSize="sm">
                            <span>🕒</span>
                            <Text>آخر تحديث: {lastUpdate.toLocaleTimeString('ar-EG')}</Text>
                        </HStack>
                    </VStack>
                    <HStack>
                        <Select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            size="sm"
                            w="150px"
                        >
                            {categories.map(c => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </Select>
                        <IconButton
                            icon={<span>🔄</span>}
                            onClick={loadNews}
                            isLoading={loading}
                            aria-label="تحديث"
                            size="sm"
                        />
                    </HStack>
                </HStack>

                {loading ? (
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <Card key={i} bg={bgColor}>
                                <Skeleton height="150px" />
                                <CardBody>
                                    <SkeletonText noOfLines={3} spacing={2} />
                                </CardBody>
                            </Card>
                        ))}
                    </SimpleGrid>
                ) : (
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
                        {filteredNews.map(item => (
                            <Card
                                key={item.id}
                                bg={bgColor}
                                borderColor={borderColor}
                                overflow="hidden"
                                _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
                                transition="all 0.2s"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    height="150px"
                                    objectFit="cover"
                                    fallbackSrc="https://via.placeholder.com/400x150?text=أخبار"
                                />
                                <CardBody>
                                    <VStack align="start" spacing={2}>
                                        <HStack justify="space-between" w="100%">
                                            <Badge colorScheme={categoryColors[item.category] || 'gray'}>
                                                {item.category}
                                            </Badge>
                                            <Text fontSize="xs" color="gray.500">{item.date}</Text>
                                        </HStack>
                                        <Heading size="sm" noOfLines={2}>{item.title}</Heading>
                                        <Text fontSize="sm" color="gray.500" noOfLines={2}>
                                            {item.description}
                                        </Text>
                                    </VStack>
                                </CardBody>
                                <CardFooter pt={0}>
                                    <HStack justify="space-between" w="100%">
                                        <Text fontSize="xs" color="gray.400">{item.source}</Text>
                                        <Button
                                            as={Link}
                                            href={item.url}
                                            isExternal
                                            size="xs"
                                            rightIcon={<span>🔗</span>}
                                            colorScheme="brand"
                                            variant="ghost"
                                        >
                                            اقرأ المزيد
                                        </Button>
                                    </HStack>
                                </CardFooter>
                            </Card>
                        ))}
                    </SimpleGrid>
                )}

                {filteredNews.length === 0 && !loading && (
                    <Box textAlign="center" py={10}>
                        <Text color="gray.500">لا توجد أخبار في هذه الفئة</Text>
                    </Box>
                )}
            </VStack>
        </Box>
    )
}

export default NewsSection
