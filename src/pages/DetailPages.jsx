import { useParams, Link } from 'react-router-dom'
import {
    Box, Heading, Text, VStack, HStack, Badge, Card, CardBody, SimpleGrid,
    Breadcrumb, BreadcrumbItem, BreadcrumbLink, Divider, Button, Link as ChakraLink,
    useColorModeValue, Stat, StatLabel, StatNumber, Icon
} from '@chakra-ui/react'
// import { FiArrowRight, FiExternalLink, FiCalendar, FiGlobe, FiFileText, FiInfo } from 'react-icons/fi'
import { FavoriteButton } from '../components/FavoriteButton'
import { Comments } from '../components/Comments'
import { useContent } from '../hooks/useContent'

// Treaty Detail Page
export function TreatyDetail() {
    const { id } = useParams()
    const { treaties } = useContent()
    const treaty = treaties.find(t => t.id === parseInt(id)) || treaties.find(t => t.id.toString() === id)
    const cardBg = useColorModeValue('white', 'gray.800')

    if (!treaty) {
        return (
            <Box p={8} textAlign="center">
                <Heading size="lg" mb={4}>الاتفاقية غير موجودة</Heading>
                <Button as={Link} to="/" colorScheme="brand">العودة للرئيسية</Button>
            </Box>
        )
    }

    const colorMap = {
        'حقوق الإنسان': 'blue', 'السلام والأمن': 'purple', 'القانون الإنساني': 'red',
        'نزع السلاح': 'orange', 'البيئة': 'green', 'القانون البحري': 'cyan',
    }

    return (
        <Box maxW="900px" mx="auto" p={{ base: 4, md: 8 }}>
            {/* Breadcrumb */}
            <Breadcrumb mb={6} fontSize="sm">
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to="/">الرئيسية</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to="/?tab=treaties">الاتفاقيات</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <Text color="gray.500" noOfLines={1} maxW="200px">{treaty.name}</Text>
                </BreadcrumbItem>
            </Breadcrumb>

            {/* Main Card */}
            <Card bg={cardBg} mb={6}>
                <CardBody>
                    <Badge colorScheme={colorMap[treaty.topic] || 'gray'} mb={4} fontSize="sm">{treaty.topic}</Badge>
                    <HStack justify="space-between" align="start" mb={4}>
                        <Heading size="lg" lineHeight="tall">{treaty.name}</Heading>
                        <FavoriteButton item={treaty} type="treaty" />
                    </HStack>

                    <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4} mb={6}>
                        <Stat>
                            <StatLabel><Text as="span" mr={2}>📅</Text>سنة التبني</StatLabel>
                            <StatNumber fontSize="xl">{treaty.date}</StatNumber>
                        </Stat>
                        <Stat>
                            <StatLabel><Text as="span" mr={2}>🌍</Text>الدول الأطراف</StatLabel>
                            <StatNumber fontSize="xl">{treaty.states}</StatNumber>
                        </Stat>
                    </SimpleGrid>

                    <Divider mb={6} />

                    <VStack align="stretch" spacing={4}>
                        <Box>
                            <HStack mb={2}>
                                <Text color="brand.600">ℹ️</Text>
                                <Heading size="sm">نبذة عن الاتفاقية</Heading>
                            </HStack>
                            <Text color="gray.600" lineHeight="tall">
                                {treaty.description || 'لا يوجد وصف متاح حالياً.'}
                            </Text>
                        </Box>

                        <Divider />
                        <Comments itemId={treaty.id} type="treaty" />
                    </VStack>
                </CardBody>
            </Card>

            {/* Full Text & Translation Section */}
            <Box mb={6}>
                <Card bg={cardBg} overflow="hidden">
                    <CardBody>
                        <HStack justify="space-between" mb={4}>
                            <HStack>
                                <Text fontSize="xl">📜</Text>
                                <Heading size="md">نص الاتفاقية (Full Text)</Heading>
                            </HStack>
                            <Badge colorScheme={treaty.fullText ? "green" : "orange"}>
                                {treaty.fullText ? "متوفر" : "غير متوفر محلياً"}
                            </Badge>
                        </HStack>

                        <Box
                            p={4}
                            bg={useColorModeValue('gray.50', 'gray.900')}
                            borderRadius="md"
                            border="1px"
                            borderColor={useColorModeValue('gray.200', 'gray.700')}
                            maxH="400px"
                            overflowY="auto"
                            whiteSpace="pre-wrap"
                        >
                            <Text lineHeight="1.8" fontSize="md">
                                {treaty.fullText || "عذراً، النص الكامل لهذه الوثيقة غير مخزن في قاعدة البيانات المحلية بعد (لأن حجم القوانين كبير جداً). \n\nيمكنك قراءة النص الكامل عبر الرابط الخارجي الرسمي أدناه، أو استخدام ميزة 'ترجمة الموقع' في الزاوية اليسرى لترجمة هذه الصفحة."}
                            </Text>
                        </Box>
                    </CardBody>
                </Card>
            </Box>

            {/* Actions */}
            <HStack spacing={4} flexWrap="wrap">
                {treaty.link && treaty.link !== '#' && (
                    <Button as={ChakraLink} href={treaty.link} isExternal colorScheme="brand" leftIcon={<span>🔗</span>}>
                        عرض النص الكامل
                    </Button>
                )}
                <Button as={Link} to="/" variant="outline" leftIcon={<span>➡️</span>}>
                    العودة للقائمة
                </Button>
            </HStack>
        </Box>
    )
}

// Case Detail Page
export function CaseDetail() {
    const { id } = useParams()
    const { cases } = useContent()
    const caseData = cases.find(c => c.id === parseInt(id)) || cases.find(c => c.id.toString() === id)
    const cardBg = useColorModeValue('white', 'gray.800')

    if (!caseData) {
        return (
            <Box p={8} textAlign="center">
                <Heading size="lg" mb={4}>القضية غير موجودة</Heading>
                <Button as={Link} to="/" colorScheme="brand">العودة للرئيسية</Button>
            </Box>
        )
    }

    const courtColors = { 'ICJ': 'blue', 'ICC': 'red', 'ECHR': 'purple' }
    const courtNames = { 'ICJ': 'محكمة العدل الدولية', 'ICC': 'المحكمة الجنائية الدولية', 'ECHR': 'المحكمة الأوروبية لحقوق الإنسان' }

    return (
        <Box maxW="900px" mx="auto" p={{ base: 4, md: 8 }}>
            {/* Breadcrumb */}
            <Breadcrumb mb={6} fontSize="sm">
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to="/">الرئيسية</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to="/?tab=cases">السوابق القضائية</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <Text color="gray.500" noOfLines={1} maxW="200px">{caseData.name}</Text>
                </BreadcrumbItem>
            </Breadcrumb>

            {/* Main Card */}
            <Card bg={cardBg} mb={6}>
                <CardBody>
                    <HStack mb={4}>
                        <Badge colorScheme={courtColors[caseData.court]} fontSize="sm">{caseData.court}</Badge>
                        <Text fontSize="sm" color="gray.500">{courtNames[caseData.court]}</Text>
                    </HStack>

                    <HStack justify="space-between" align="start" mb={4}>
                        <Heading size="lg" lineHeight="tall">{caseData.name}</Heading>
                        <FavoriteButton item={caseData} type="case" />
                    </HStack>

                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={6}>
                        <Stat>
                            <StatLabel><Text as="span" mr={2}>📅</Text>سنة الحكم/القرار</StatLabel>
                            <StatNumber fontSize="xl">{caseData.year}</StatNumber>
                        </Stat>
                        <Stat>
                            <StatLabel><Text as="span" mr={2}>📄</Text>المحكمة</StatLabel>
                            <StatNumber fontSize="xl">{courtNames[caseData.court]}</StatNumber>
                        </Stat>
                    </SimpleGrid>

                    <Divider mb={6} />

                    <VStack align="stretch" spacing={4}>
                        <Box>
                            <HStack mb={2}>
                                <Text color="brand.600">ℹ️</Text>
                                <Heading size="sm">ملخص القضية</Heading>
                            </HStack>
                            <Text color="gray.600" lineHeight="tall" fontSize="lg">
                                {caseData.summary}
                            </Text>
                        </Box>

                        <Divider />
                        <Comments itemId={caseData.id} type="case" />
                    </VStack>
                </CardBody>
            </Card>

            {/* Full Text & Translation Section */}
            <Box mb={6}>
                <Card bg={cardBg} overflow="hidden">
                    <CardBody>
                        <HStack justify="space-between" mb={4}>
                            <HStack>
                                <Text fontSize="xl">📜</Text>
                                <Heading size="md">نص القضية (Full Text)</Heading>
                            </HStack>
                            <Badge colorScheme={caseData.fullText ? "green" : "orange"}>
                                {caseData.fullText ? "متوفر" : "غير متوفر محلياً"}
                            </Badge>
                        </HStack>

                        <Box
                            p={4}
                            bg={useColorModeValue('gray.50', 'gray.900')}
                            borderRadius="md"
                            border="1px"
                            borderColor={useColorModeValue('gray.200', 'gray.700')}
                            maxH="400px"
                            overflowY="auto"
                            whiteSpace="pre-wrap"
                        >
                            <Text lineHeight="1.8" fontSize="md">
                                {caseData.fullText || "عذراً، النص الكامل لهذه الوثيقة غير مخزن في قاعدة البيانات المحلية بعد (لأن حجم القوانين كبير جداً). \n\nيمكنك قراءة النص الكامل عبر الرابط الخارجي الرسمي أدناه، أو استخدام ميزة 'ترجمة الموقع' في الزاوية اليسرى لترجمة هذه الصفحة."}
                            </Text>
                        </Box>
                    </CardBody>
                </Card>
            </Box>

            {/* Actions */}
            <HStack spacing={4} flexWrap="wrap">
                {caseData.link && caseData.link !== '#' && (
                    <Button as={ChakraLink} href={caseData.link} isExternal colorScheme="brand" leftIcon={<span>🔗</span>}>
                        عرض تفاصيل القضية
                    </Button>
                )}
                <Button as={Link} to="/" variant="outline" leftIcon={<span>➡️</span>}>
                    العودة للقائمة
                </Button>
            </HStack>
        </Box >
    )
}

// Resolution Detail Page
export function ResolutionDetail() {
    const { id } = useParams()
    const { resolutions } = useContent()
    const resolution = resolutions.find(r => r.id === parseInt(id)) || resolutions.find(r => r.id.toString() === id)
    const cardBg = useColorModeValue('white', 'gray.800')

    if (!resolution) {
        return (
            <Box p={8} textAlign="center">
                <Heading size="lg" mb={4}>القرار غير موجود</Heading>
                <Button as={Link} to="/" colorScheme="brand">العودة للرئيسية</Button>
            </Box>
        )
    }

    return (
        <Box maxW="900px" mx="auto" p={{ base: 4, md: 8 }}>
            <Breadcrumb mb={6} fontSize="sm">
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to="/">الرئيسية</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to="/?tab=resolutions">القرارات</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <Text color="gray.500" noOfLines={1} maxW="200px">{resolution.number}</Text>
                </BreadcrumbItem>
            </Breadcrumb>

            <Card bg={cardBg} mb={6}>
                <CardBody>
                    <HStack justify="space-between" align="start" mb={4}>
                        <Heading size="lg" lineHeight="tall">{resolution.number}</Heading>
                        <FavoriteButton item={resolution} type="resolution" />
                    </HStack>

                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={6}>
                        <Stat>
                            <StatLabel><Text as="span" mr={2}>📅</Text>السنة</StatLabel>
                            <StatNumber fontSize="xl">{resolution.year}</StatNumber>
                        </Stat>
                        <Stat>
                            <StatLabel><Text as="span" mr={2}>🏛️</Text>الجهة</StatLabel>
                            <StatNumber fontSize="xl">{resolution.type}</StatNumber>
                        </Stat>
                    </SimpleGrid>

                    <Divider mb={6} />

                    <VStack align="stretch" spacing={4}>
                        <Box>
                            <Heading size="sm" mb={2}>موضوع القرار</Heading>
                            <Text color="gray.600" lineHeight="tall" fontSize="lg">
                                {resolution.subject || resolution.summary}
                            </Text>
                        </Box>

                        <Divider />
                        <Comments itemId={resolution.id} type="resolution" />
                    </VStack>
                </CardBody>
            </Card>

            {/* Full Text & Translation Section */}
            <Box mb={6}>
                <Card bg={cardBg} overflow="hidden">
                    <CardBody>
                        <HStack justify="space-between" mb={4}>
                            <HStack>
                                <Text fontSize="xl">📜</Text>
                                <Heading size="md">نص القرار (Full Text)</Heading>
                            </HStack>
                            <Badge colorScheme={resolution.fullText ? "green" : "orange"}>
                                {resolution.fullText ? "متوفر" : "غير متوفر محلياً"}
                            </Badge>
                        </HStack>

                        <Box
                            p={4}
                            bg={useColorModeValue('gray.50', 'gray.900')}
                            borderRadius="md"
                            border="1px"
                            borderColor={useColorModeValue('gray.200', 'gray.700')}
                            maxH="400px"
                            overflowY="auto"
                            whiteSpace="pre-wrap"
                        >
                            <Text lineHeight="1.8" fontSize="md">
                                {resolution.fullText || "عذراً، النص الكامل لهذه الوثيقة غير مخزن في قاعدة البيانات المحلية بعد (لأن حجم القوانين كبير جداً). \n\nيمكنك قراءة النص الكامل عبر الرابط الخارجي الرسمي أدناه، أو استخدام ميزة 'ترجمة الموقع' في الزاوية اليسرى لترجمة هذه الصفحة."}
                            </Text>
                        </Box>
                    </CardBody>
                </Card>
            </Box>

            <HStack spacing={4} flexWrap="wrap">
                {resolution.link && resolution.link !== '#' && (
                    <Button as={ChakraLink} href={resolution.link} isExternal colorScheme="brand" leftIcon={<span>🔗</span>}>
                        عرض نص القرار
                    </Button>
                )}
                <Button as={Link} to="/" variant="outline" leftIcon={<span>➡️</span>}>
                    العودة للقائمة
                </Button>
            </HStack>
        </Box >
    )
}
