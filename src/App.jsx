import { useState, useMemo, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
    Box, Flex, Heading, Text, VStack, HStack, IconButton, useColorMode, useColorModeValue,
    Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton,
    useDisclosure, Badge, Link, Card, CardBody, Button, SimpleGrid, Select,
    Input, InputGroup, InputLeftElement, Table, Thead, Tbody, Tr, Th, Td, TableContainer,
    Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverArrow,
    Stat, StatLabel, StatNumber, StatGroup, Progress, Collapse, Divider
} from '@chakra-ui/react'
// Removing React Icons to prevent mobile crash
// import { FiMenu ... } from 'react-icons/fi'

import { resourcesData, getTopics } from './data'
import { useContent } from './hooks/useContent'
import { useDebounce } from './hooks/useDebounce'
import { useAuth } from './hooks/useAuth'
import StatsPanel from './components/StatsPanel'
import AuthModal from './components/AuthModal'
import html2pdf from 'html2pdf.js'


// Nav Items with Emojis instead of Icons
const navItems = [
    { id: 'treaties', label: 'الاتفاقيات الدولية', icon: '📄' },
    { id: 'cases', label: 'السوابق القضائية', icon: '⚖️' },
    { id: 'resolutions', label: 'القرارات الدولية', icon: '🕊️' },
    { id: 'resources', label: 'المصادر والمراجع', icon: '📚' },
    { id: 'favorites', label: 'مفضلاتي', icon: '❤️' },
]

// Sidebar Component
function Sidebar({ activeTab, setActiveTab, onClose }) {
    const activeBg = useColorModeValue('brand.600', 'brand.400')
    const hoverBg = useColorModeValue('gray.100', 'gray.700')

    return (
        <VStack align="stretch" spacing={2} p={4}>
            <Box textAlign="center" py={4} mb={4} borderBottom="1px" borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <Heading size="md" color="brand.600">المرصد القانوني الدولي</Heading>
                <Text fontSize="xs" color="gray.500" mt={1}>مرجع القانون الدولي</Text>
            </Box>
            {navItems.map((item) => (
                <Box
                    key={item.id}
                    as="button"
                    onClick={() => { setActiveTab(item.id); onClose && onClose(); }}
                    display="flex" alignItems="center" gap={3} px={4} py={3} borderRadius="lg" fontWeight="600"
                    bg={activeTab === item.id ? activeBg : 'transparent'}
                    color={activeTab === item.id ? 'white' : useColorModeValue('gray.600', 'gray.400')}
                    _hover={{ bg: activeTab === item.id ? activeBg : hoverBg }}
                    transition="all 0.2s"
                >
                    <Text fontSize="xl">{item.icon}</Text>
                    <span>{item.label}</span>
                </Box>
            ))}

            <Box pt={4} mt={4} borderTop="1px" borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <VStack spacing={2}>
                    <Button as={RouterLink} to="/ai-search" colorScheme="purple" size="sm" width="100%" variant="outline">
                        🤖 البحث الذكي
                    </Button>
                    <Button as={RouterLink} to="/compare" colorScheme="teal" size="sm" width="100%" variant="outline">
                        ⚖️ مقارنة الاتفاقيات
                    </Button>
                    <Button as={RouterLink} to="/world-map" colorScheme="blue" size="sm" width="100%" variant="outline">
                        🗺️ خريطة العالم
                    </Button>
                    <Button as={RouterLink} to="/country-compare" colorScheme="orange" size="sm" width="100%" variant="outline">
                        🏳️ مقارنة الدول
                    </Button>
                    <Button as={RouterLink} to="/news" colorScheme="red" size="sm" width="100%" variant="outline">
                        📰 أخبار حية
                    </Button>
                    <Button as={RouterLink} to="/contribute" colorScheme="brand" size="sm" width="100%">
                        + إضافة محتوى
                    </Button>
                    <Button
                        as="a"
                        href="https://github.com/bssoof/international-law-reference/raw/main/law-observatory-v1.0.0.apk"
                        download
                        colorScheme="green"
                        size="sm"
                        width="100%"
                        leftIcon={<span>📱</span>}
                    >
                        تحميل التطبيق
                    </Button>
                </VStack>
            </Box>
        </VStack>
    )
}

function TopicBadge({ topic }) {
    const colorMap = {
        'حقوق الإنسان': 'blue', 'السلام والأمن': 'purple', 'القانون الإنساني': 'red',
        'نزع السلاح': 'orange', 'البيئة': 'green', 'القانون البحري': 'cyan',
    }
    return <Badge colorScheme={colorMap[topic] || 'gray'} borderRadius="full" px={2}>{topic}</Badge>
}

function usePagination(data, itemsPerPage = 8) {
    const [currentPage, setCurrentPage] = useState(1)
    const maxPage = Math.ceil(data.length / itemsPerPage)
    const currentData = useMemo(() => {
        const begin = (currentPage - 1) * itemsPerPage
        const end = begin + itemsPerPage
        return data.slice(begin, end)
    }, [data, currentPage, itemsPerPage])

    useEffect(() => setCurrentPage(1), [data.length])

    const next = () => setCurrentPage(p => Math.min(p + 1, maxPage))
    const prev = () => setCurrentPage(p => Math.max(p - 1, 1))

    return { next, prev, jump: setCurrentPage, currentData, currentPage, maxPage }
}

function ListView({ data, activeTab }) {
    const borderColor = useColorModeValue('gray.200', 'gray.700')

    return (
        <TableContainer bg={useColorModeValue('white', 'gray.800')} borderRadius="lg" border="1px" borderColor={borderColor}>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th textAlign="right">
                            {activeTab === 'resolutions' ? 'رقم القرار' : (activeTab === 'cases' ? 'اسم القضية' : 'الاسم/العنوان')}
                        </Th>
                        <Th textAlign="right">السنة/التاريخ</Th>
                        <Th textAlign="right">المجال/الجهة</Th>
                        <Th textAlign="right">التفاصيل</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((item) => (
                        <Tr key={item.id} _hover={{ bg: useColorModeValue('gray.50', 'gray.700') }} transition="all 0.2s">
                            <Td fontWeight="bold">
                                <Link
                                    as={activeTab !== 'resources' ? RouterLink : Link}
                                    to={activeTab !== 'resources' ? `/${activeTab.slice(0, -1).replace('resolutions', 'resolution').replace('treaties', 'treaty').replace('cases', 'case')}/${item.id}` : undefined}
                                    href={activeTab === 'resources' ? item.url : undefined}
                                    isExternal={activeTab === 'resources'}
                                    _hover={{ textDecoration: 'none', color: 'brand.500' }}
                                >
                                    {item.name || item.title || item.number}
                                </Link>
                                {item.isNew && <Badge ml={2} colorScheme="green" variant="solid" fontSize="0.6em">جديد</Badge>}
                            </Td>
                            <Td>{item.date || item.year}</Td>
                            <Td>
                                <TopicBadge topic={item.topic || item.category || item.type || 'عام'} />
                            </Td>
                            <Td color="gray.500" fontSize="sm" maxW="300px" isTruncated>
                                {item.description || item.summary || item.subject}
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default function App() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode()
    const [activeTab, setActiveTab] = useState('treaties')
    const [viewMode, setViewMode] = useState('grid') // 'grid' | 'list'
    const [searchQuery, setSearchQuery] = useState('')

    // Advanced Filters
    const [topicFilter, setTopicFilter] = useState('')
    const [yearFrom, setYearFrom] = useState('')
    const [yearTo, setYearTo] = useState('')
    const [showFilters, setShowFilters] = useState(false)
    const [showStats, setShowStats] = useState(false)

    // Debounce high-frequency inputs
    const debouncedSearch = useDebounce(searchQuery, 300)
    const debouncedYearFrom = useDebounce(yearFrom, 300)
    const debouncedYearTo = useDebounce(yearTo, 300)

    // Auth
    const { user, favorites, toggleFavorite, signOut } = useAuth()
    const [isAuthOpen, setAuthOpen] = useState(false)




    // Get deduplicated data from hook
    const { treaties, cases, resolutions, loading, isNew } = useContent()

    // Get unique topics for filter dropdown
    const allTopics = useMemo(() => {
        const topics = new Set()
            ;[...treaties, ...cases, ...resolutions].forEach(item => {
                const topic = item.topic || item.category || item.type
                if (topic) topics.add(topic)
            })
        return Array.from(topics).sort()
    }, [treaties, cases, resolutions])

    // Get recent items for notifications (last 30 days simulated by year 2024+)
    const recentItems = useMemo(() => {
        return [...treaties, ...cases, ...resolutions]
            .filter(item => {
                const year = parseInt(item.date || item.year)
                return year >= 2023
            })
            .slice(0, 5)
    }, [treaties, cases, resolutions])

    // Arabic Text Normalization
    const normalizeArabic = (text) => {
        if (!text) return ''
        return text
            .replace(/(آ|إ|أ)/g, 'ا')
            .replace(/(ة)/g, 'ه')
            .replace(/(ئ|ؤ)/g, 'ء')
            .replace(/(ى)/g, 'ي')
            .toLowerCase() // technically irrelevant for Arabic but good for mixed content
    }

    const filterData = (data) => {
        if (!data) return []

        return data.filter(item => {
            const name = item.name || item.title || item.number || ''
            const desc = item.description || item.summary || item.subject || ''
            const topic = item.topic || item.category || item.type || ''
            const body = item.fullText || ''

            // Context Strings for Search
            const context = [name, desc, topic, body].map(normalizeArabic).join(' ')
            const query = normalizeArabic(debouncedSearch)

            // Improved Year Parsing
            const dateStr = (item.date || item.year || '').toString()
            const yearMatch = dateStr.match(/\d{4}/)
            const year = yearMatch ? parseInt(yearMatch[0]) : 0

            // Text search
            const matchesSearch = !query || context.includes(query)

            // Topic filter
            const matchesTopic = !topicFilter || topic === topicFilter

            // Year range filter
            const matchesYearFrom = !debouncedYearFrom || (year > 0 && year >= parseInt(debouncedYearFrom))
            const matchesYearTo = !debouncedYearTo || (year > 0 && year <= parseInt(debouncedYearTo))

            return matchesSearch && matchesTopic && matchesYearFrom && matchesYearTo
        })
    }

    const exportPDF = () => {
        const element = document.getElementById('content-to-export')
        const opt = {
            margin: 1,
            filename: 'legal-observatory-data.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        }
        html2pdf().set(opt).from(element).save()
    }

    const filteredData = useMemo(() => {
        switch (activeTab) {
            case 'treaties': return filterData(treaties)
            case 'cases': return filterData(cases)
            case 'resolutions': return filterData(resolutions)
            case 'resources': return resourcesData
            case 'favorites': return filterData([...treaties, ...cases, ...resolutions].filter(item => favorites.includes(String(item.id))))
            default: return []
        }
    }, [activeTab, debouncedSearch, topicFilter, debouncedYearFrom, debouncedYearTo, treaties, cases, resolutions])

    const { next, prev, currentData, currentPage, maxPage } = usePagination(filteredData)
    const cardBg = useColorModeValue('white', 'gray.800')

    return (
        <Box minH="100vh" bg={useColorModeValue('gray.50', 'gray.900')}>
            <Flex
                as="nav" align="center" justify="space-between" wrap="wrap"
                padding="1rem" bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                borderBottom="1px" borderColor={useColorModeValue('gray.200', 'gray.700')}
                position="sticky" top="0" zIndex="sticky"
            >
                <Flex align="center">
                    <IconButton
                        display={{ base: 'flex', md: 'none' }}
                        onClick={onOpen}
                        icon={<span>☰</span>} // Emoji replacement
                        variant="ghost"
                        aria-label="Open Menu"
                        mr={2}
                    />
                    <Heading size="md" display={{ base: 'none', md: 'block' }}>المرصد القانوني (v2.0)</Heading>

                    <InputGroup maxW="400px" mr={8} display={{ base: 'none', md: 'block' }}>
                        <InputLeftElement pointerEvents="none"><span>🔍</span></InputLeftElement>
                        <Input
                            placeholder="بحث سريع..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            borderRadius="full"
                        />
                    </InputGroup>
                </Flex>

                <Flex align="center" gap={2}>
                    {/* Notification Bell */}
                    <Popover placement='bottom-end'>
                        <PopoverTrigger>
                            <Box position="relative" cursor="pointer" mr={2}>
                                <IconButton
                                    icon={<span>🔔</span>}
                                    variant="ghost"
                                    isRound
                                    aria-label="Notifications"
                                />
                                <Badge
                                    position="absolute" top="-1px" right="-1px"
                                    colorScheme="red" borderRadius="full" fontSize="0.6em"
                                >
                                    {recentItems.length}
                                </Badge>
                            </Box>
                        </PopoverTrigger>
                        <PopoverContent bg={useColorModeValue('white', 'gray.800')} borderColor={useColorModeValue('gray.200', 'gray.600')}>
                            <PopoverArrow />
                            <PopoverHeader fontWeight="bold" borderBottomWidth="1px">آخر التحديثات</PopoverHeader>
                            <PopoverBody p={0}>
                                <VStack align="stretch" spacing={0}>
                                    {recentItems.map((item, i) => (
                                        <Box key={i} p={3} _hover={{ bg: useColorModeValue('gray.50', 'gray.700') }} borderBottomWidth={i < recentItems.length - 1 ? "1px" : "0"}>
                                            <Flex justify="space-between" align="center" mb={1}>
                                                <Badge colorScheme="green" fontSize="xs">جديد</Badge>
                                                <Text fontSize="xs" color="gray.500">{item.date || item.year}</Text>
                                            </Flex>
                                            <Text fontSize="sm" noOfLines={2}>{item.name || item.title || item.number}</Text>
                                        </Box>
                                    ))}
                                </VStack>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>

                    <Button
                        size="sm"
                        leftIcon={<span>⬇️</span>}
                        onClick={exportPDF}
                        display={{ base: 'none', lg: 'flex' }}
                        colorScheme="gray" variant="outline"
                    >
                        PDF
                    </Button>

                    <IconButton
                        onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                        icon={viewMode === 'grid' ? <span>🧾</span> : <span>🖼️</span>}
                        variant="ghost"
                        fontSize="xl"
                        aria-label="Switch View"
                        title={viewMode === 'grid' ? "عرض كجدول" : "عرض كشبكة"}
                    />
                    <IconButton
                        onClick={toggleColorMode}
                        icon={colorMode === 'light' ? <span>🌙</span> : <span>☀️</span>}
                        variant="ghost"
                        isRound
                        aria-label="Toggle Theme"
                    />
                </Flex>

                <Flex align="center" gap={2}>
                    {user ? (
                        <Button
                            size="sm"
                            colorScheme="red"
                            variant="ghost"
                            onClick={signOut}
                        >
                            خروج ({user.email.split('@')[0]})
                        </Button>
                    ) : (
                        <Button
                            size="sm"
                            colorScheme="brand"
                            onClick={() => setAuthOpen(true)}
                        >
                            دخول
                        </Button>
                    )}
                </Flex>
            </Flex>


            <Flex>
                <Box
                    display={{ base: 'none', md: 'block' }}
                    w="280px"
                    minH="calc(100vh - 73px)"
                    bg={useColorModeValue('white', 'gray.800')}
                    borderLeft="1px" borderColor={useColorModeValue('gray.200', 'gray.700')}
                >
                    <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
                </Box>

                <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                    <DrawerOverlay />
                    <DrawerContent bg={useColorModeValue('white', 'gray.800')}>
                        <DrawerCloseButton />
                        <DrawerHeader borderBottomWidth="1px">القائمة</DrawerHeader>
                        <DrawerBody p={0}>
                            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onClose={onClose} />
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>

                <Box flex="1" p={{ base: 4, md: 8 }}>
                    <Box display={{ base: 'block', md: 'none' }} mb={6}>
                        <InputGroup size="lg">
                            <InputLeftElement pointerEvents="none"><span>🔍</span></InputLeftElement>
                            <Input
                                placeholder="بحث..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                borderRadius="full"
                                bg={useColorModeValue('white', 'gray.700')}
                            />
                        </InputGroup>
                    </Box>

                    <Flex justify="space-between" align="center" mb={6} wrap="wrap" gap={4}>
                        <Heading size="lg">
                            {navItems.find(i => i.id === activeTab)?.label}
                            <Badge ml={2} colorScheme="brand" fontSize="md" borderRadius="full">
                                {filteredData.length}
                            </Badge>
                        </Heading>

                        <HStack spacing={2}>
                            <Button
                                size="sm"
                                leftIcon={<span>🔍</span>}
                                onClick={() => setShowFilters(!showFilters)}
                                colorScheme={showFilters ? "brand" : "gray"}
                                variant={showFilters ? "solid" : "outline"}
                            >
                                تصفية
                            </Button>
                            <Button
                                size="sm"
                                leftIcon={<span>📊</span>}
                                onClick={() => setShowStats(!showStats)}
                                colorScheme={showStats ? "brand" : "gray"}
                                variant={showStats ? "solid" : "outline"}
                            >
                                إحصائيات
                            </Button>
                        </HStack>
                    </Flex>

                    {/* Collapsible Filter Panel */}
                    <Collapse in={showFilters} animateOpacity>
                        <Box
                            p={4} mb={6} borderRadius="lg"
                            bg={useColorModeValue('white', 'gray.800')}
                            border="1px" borderColor={useColorModeValue('gray.200', 'gray.700')}
                        >
                            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
                                <Box>
                                    <Text fontSize="sm" mb={1} fontWeight="bold">الموضوع</Text>
                                    <Select
                                        placeholder="الكل"
                                        size="sm"
                                        value={topicFilter}
                                        onChange={(e) => setTopicFilter(e.target.value)}
                                    >
                                        {allTopics.map(t => <option key={t} value={t}>{t}</option>)}
                                    </Select>
                                </Box>
                                <Box>
                                    <Text fontSize="sm" mb={1} fontWeight="bold">من سنة</Text>
                                    <Input
                                        type="number" size="sm" placeholder="مثلاً 1990"
                                        value={yearFrom}
                                        onChange={(e) => setYearFrom(e.target.value)}
                                    />
                                </Box>
                                <Box>
                                    <Text fontSize="sm" mb={1} fontWeight="bold">إلى سنة</Text>
                                    <Input
                                        type="number" size="sm" placeholder="مثلاً 2024"
                                        value={yearTo}
                                        onChange={(e) => setYearTo(e.target.value)}
                                    />
                                </Box>
                            </SimpleGrid>
                            <Flex justify="flex-end" mt={4}>
                                <Button
                                    size="xs" colorScheme="red" variant="ghost"
                                    onClick={() => { setTopicFilter(''); setYearFrom(''); setYearTo(''); }}
                                >
                                    إعادة تعيين
                                </Button>
                            </Flex>
                        </Box>
                    </Collapse>

                    {/* Collapsible Stats Panel */}
                    <Collapse in={showStats} animateOpacity>
                        <StatsPanel data={filteredData} />
                    </Collapse>

                    <Box id="content-to-export">

                        {viewMode === 'list' ? (
                            <ListView data={currentData} activeTab={activeTab} />
                        ) : (
                            <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
                                {currentData.map((item) => (
                                    <Card
                                        key={item.id}
                                        bg={cardBg}
                                        shadow="sm"
                                        _hover={{ shadow: 'md', transform: 'translateY(-2px)' }}
                                        transition="all 0.2s"
                                        as={activeTab !== 'resources' ? RouterLink : Link}
                                        to={(() => {
                                            if (activeTab === 'resources') return undefined
                                            const map = { 'treaties': 'treaty', 'cases': 'case', 'resolutions': 'resolution' }
                                            return `/${map[activeTab]}/${item.id}`
                                        })()}
                                        href={activeTab === 'resources' ? item.url : undefined}
                                        isExternal={activeTab === 'resources'}
                                    >
                                        <CardBody>
                                            <VStack align="start" spacing={3}>
                                                <TopicBadge topic={item.topic || item.category || item.type || 'عام'} />
                                                <Heading size="md" noOfLines={2}>{item.name || item.title || item.number}</Heading>
                                                <Text fontSize="sm" color="gray.500" noOfLines={3}>
                                                    {item.description || item.summary || item.subject || 'انقر للتفاصيل...'}
                                                </Text>

                                                <Box pt={2} w="100%" display="flex" justifyContent="space-between" alignItems="center">
                                                    <Text fontSize="xs" color="gray.400">{item.date || item.year}</Text>
                                                    <HStack>
                                                        {isNew(item.date) && <Badge colorScheme="green" variant="subtle">جديد</Badge>}
                                                        <IconButton
                                                            icon={<span>{favorites.includes(String(item.id)) ? '❤️' : '🤍'}</span>}
                                                            size="xs"
                                                            variant="ghost"
                                                            colorScheme="red"
                                                            onClick={(e) => {
                                                                e.preventDefault()
                                                                if (!user) setAuthOpen(true)
                                                                else toggleFavorite(item.id)
                                                            }}
                                                            aria-label="Add to favorites"
                                                        />
                                                    </HStack>
                                                </Box>
                                            </VStack>
                                        </CardBody>
                                    </Card>
                                ))}
                            </SimpleGrid>
                        )}
                        <AuthModal isOpen={isAuthOpen} onClose={() => setAuthOpen(false)} />
                    </Box>

                    {filteredData.length === 0 && (
                        <Box textAlign="center" py={10}>
                            <Text fontSize="lg" color="gray.500">لا توجد نتائج مطابقة لبحثك.</Text>
                        </Box>
                    )}

                    {filteredData.length > 8 && (
                        <Flex justify="center" align="center" mt={8} gap={4}>
                            <IconButton
                                icon={<span>➡️</span>}
                                onClick={prev}
                                isDisabled={currentPage === 1}
                                isRound
                                variant="outline"
                            />
                            <Text fontWeight="bold">صفحة {currentPage} من {maxPage}</Text>
                            <IconButton
                                icon={<span>⬅️</span>}
                                onClick={next}
                                isDisabled={currentPage === maxPage}
                                isRound
                                variant="outline"
                            />
                        </Flex>
                    )}
                </Box>
            </Flex>
        </Box >
    )
}
