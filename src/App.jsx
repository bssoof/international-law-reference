import { useState, useMemo, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
    Box, Flex, Heading, Text, VStack, HStack, IconButton, useColorMode, useColorModeValue,
    Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton,
    useDisclosure, Input, InputGroup, InputLeftElement, Table, Thead, Tbody, Tr, Th, Td,
    Badge, Link, Card, CardBody, Show, Hide, Select, SimpleGrid, Skeleton, SkeletonText,
    Button, ButtonGroup, Wrap, WrapItem, Tag, TagLabel
} from '@chakra-ui/react'
import { FiMenu, FiSun, FiMoon, FiSearch, FiExternalLink, FiFileText, FiBook, FiAward, FiFolder, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { treatiesData, casesData, resolutionsData, resourcesData, getTopics } from './data'
import { NotificationButton } from './components/NotificationButton'
import { UserMenu } from './components/AuthModal'
import { useContent } from './hooks/useContent'

// Nav Items
const navItems = [
    { id: 'treaties', label: 'الاتفاقيات الدولية', icon: FiFileText },
    { id: 'cases', label: 'السوابق القضائية', icon: FiBook },
    { id: 'resolutions', label: 'القرارات الدولية', icon: FiAward },
    { id: 'resources', label: 'المصادر والمراجع', icon: FiFolder },
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
                    <item.icon />
                    <span>{item.label}</span>
                </Box>
            ))}

            {/* Contribute & Notifications */}
            <Box pt={4} mt={4} borderTop="1px" borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <VStack spacing={2}>
                    <NotificationButton />
                    <Button as={RouterLink} to="/ai-search" colorScheme="purple" size="sm" width="100%" variant="outline">
                        🤖 البحث الذكي
                    </Button>
                    <Button as={RouterLink} to="/compare" colorScheme="teal" size="sm" width="100%" variant="outline">
                        ⚖️ مقارنة الاتفاقيات
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

// Topic Badge
function TopicBadge({ topic }) {
    const colorMap = {
        'حقوق الإنسان': 'blue', 'السلام والأمن': 'purple', 'القانون الإنساني': 'red',
        'نزع السلاح': 'orange', 'البيئة': 'green', 'القانون البحري': 'cyan',
    }
    return <Badge colorScheme={colorMap[topic] || 'gray'} borderRadius="full" px={2}>{topic}</Badge>
}

// Pagination Hook
function usePagination(data, itemsPerPage = 8) {
    const [page, setPage] = useState(1)
    const totalPages = Math.ceil(data.length / itemsPerPage)
    const paginatedData = useMemo(() => {
        const start = (page - 1) * itemsPerPage
        return data.slice(start, start + itemsPerPage)
    }, [data, page, itemsPerPage])

    useEffect(() => { setPage(1) }, [data.length])

    return { paginatedData, page, setPage, totalPages, total: data.length }
}

// Pagination Component
function Pagination({ page, setPage, totalPages, total }) {
    if (totalPages <= 1) return null
    return (
        <Flex justify="space-between" align="center" mt={6} flexWrap="wrap" gap={2}>
            <Text fontSize="sm" color="gray.500">عرض {total} نتيجة</Text>
            <ButtonGroup size="sm" variant="outline">
                <IconButton icon={<FiChevronRight />} onClick={() => setPage(p => Math.max(1, p - 1))} isDisabled={page === 1} />
                {[...Array(totalPages)].map((_, i) => (
                    <Button key={i} onClick={() => setPage(i + 1)} variant={page === i + 1 ? 'solid' : 'outline'} colorScheme={page === i + 1 ? 'brand' : 'gray'}>
                        {i + 1}
                    </Button>
                ))}
                <IconButton icon={<FiChevronLeft />} onClick={() => setPage(p => Math.min(totalPages, p + 1))} isDisabled={page === totalPages} />
            </ButtonGroup>
        </Flex>
    )
}

// Skeleton Loader
function TableSkeleton() {
    return (
        <VStack spacing={4} align="stretch">
            {[...Array(5)].map((_, i) => (
                <Card key={i} variant="outline">
                    <CardBody>
                        <Skeleton height="20px" width="70%" mb={2} />
                        <SkeletonText noOfLines={2} spacing={2} />
                    </CardBody>
                </Card>
            ))}
        </VStack>
    )
}

// Filter Bar
function FilterBar({ searchQuery, setSearchQuery, topicFilter, setTopicFilter, yearFilter, setYearFilter, topics }) {
    return (
        <Wrap spacing={3} mb={6} align="center">
            <WrapItem flex={{ base: '1 1 100%', md: '1 1 auto' }} maxW={{ md: '300px' }}>
                <InputGroup>
                    <InputLeftElement pointerEvents="none"><FiSearch color="gray" /></InputLeftElement>
                    <Input placeholder="بحث..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} borderRadius="lg" />
                </InputGroup>
            </WrapItem>
            <WrapItem>
                <Select placeholder="جميع المجالات" value={topicFilter} onChange={(e) => setTopicFilter(e.target.value)} borderRadius="lg" minW="150px">
                    {topics.map(t => <option key={t} value={t}>{t}</option>)}
                </Select>
            </WrapItem>
            <WrapItem>
                <Select placeholder="جميع السنوات" value={yearFilter} onChange={(e) => setYearFilter(e.target.value)} borderRadius="lg" minW="130px">
                    {['2024', '2023', '2020-2022', '2010-2019', '2000-2009', '1990-1999', '1980-1989', 'قبل 1980'].map(y => (
                        <option key={y} value={y}>{y}</option>
                    ))}
                </Select>
            </WrapItem>
            {(topicFilter || yearFilter) && (
                <WrapItem>
                    <Button size="sm" variant="ghost" onClick={() => { setTopicFilter(''); setYearFilter(''); }}>مسح الفلاتر</Button>
                </WrapItem>
            )}
        </Wrap>
    )
}

// Treaties Section
function TreatiesSection({ data = [], loading }) {
    const [searchQuery, setSearchQuery] = useState('')
    const [topicFilter, setTopicFilter] = useState('')
    const [yearFilter, setYearFilter] = useState('')
    const cardBg = useColorModeValue('white', 'gray.800')
    const topics = useMemo(() => getTopics(), [])

    const filtered = useMemo(() => {
        return data.filter(t => {
            const matchesSearch = t.name.includes(searchQuery) || t.topic.includes(searchQuery)
            const matchesTopic = !topicFilter || t.topic === topicFilter
            const matchesYear = !yearFilter || filterByYear(t.date, yearFilter)
            return matchesSearch && matchesTopic && matchesYear
        })
    }, [searchQuery, topicFilter, yearFilter, data])

    const { paginatedData, page, setPage, totalPages, total } = usePagination(filtered)

    if (loading) return <TableSkeleton />

    return (
        <>
            <FilterBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} topicFilter={topicFilter} setTopicFilter={setTopicFilter} yearFilter={yearFilter} setYearFilter={setYearFilter} topics={topics} />

            <Hide below="md">
                <Box bg={cardBg} borderRadius="xl" overflow="hidden" boxShadow="sm" border="1px" borderColor={useColorModeValue('gray.200', 'gray.700')}>
                    <Table variant="simple">
                        <Thead bg={useColorModeValue('gray.50', 'gray.700')}>
                            <Tr><Th>الاتفاقية</Th><Th>السنة</Th><Th>المجال</Th><Th>الدول</Th><Th>الرابط</Th></Tr>
                        </Thead>
                        <Tbody>
                            {paginatedData.map((t) => (
                                <Tr key={t.id} _hover={{ bg: useColorModeValue('gray.50', 'gray.700') }}>
                                    <Td fontWeight="600" maxW="400px"><Text noOfLines={2}>{t.name}</Text></Td>
                                    <Td>{t.date}</Td>
                                    <Td><TopicBadge topic={t.topic} /></Td>
                                    <Td>{t.states} دولة</Td>
                                    <Td><RouterLink to={`/treaty/${t.id}`}><Link as="span" color="brand.600" fontWeight="600">تفاصيل <FiExternalLink style={{ display: 'inline' }} /></Link></RouterLink></Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </Box>
            </Hide>

            <Show below="md">
                <VStack spacing={3} align="stretch">
                    {paginatedData.map((t) => (
                        <Card key={t.id} size="sm" variant="outline">
                            <CardBody>
                                <Text fontWeight="700" color="brand.600" mb={2}>{t.name}</Text>
                                <HStack justify="space-between" mb={2}>
                                    <Text fontSize="sm" color="gray.500">📅 {t.date}</Text>
                                    <Text fontSize="sm" color="gray.500">🌍 {t.states} دولة</Text>
                                </HStack>
                                <HStack justify="space-between">
                                    <TopicBadge topic={t.topic} />
                                    <RouterLink to={`/treaty/${t.id}`}><Link as="span" color="brand.600" fontWeight="600" fontSize="sm">تفاصيل ↗</Link></RouterLink>
                                </HStack>
                            </CardBody>
                        </Card>
                    ))}
                </VStack>
            </Show>

            <Pagination page={page} setPage={setPage} totalPages={totalPages} total={total} />
        </>
    )
}

// Cases Section
function CasesSection({ data = [], loading }) {
    const [searchQuery, setSearchQuery] = useState('')
    const [courtFilter, setCourtFilter] = useState('')
    const cardBg = useColorModeValue('white', 'gray.800')

    const filtered = useMemo(() => {
        return data.filter(c => {
            const matchesSearch = c.name.includes(searchQuery) || c.summary.includes(searchQuery)
            const matchesCourt = !courtFilter || c.court === courtFilter
            return matchesSearch && matchesCourt
        })
    }, [searchQuery, courtFilter, data])

    const { paginatedData, page, setPage, totalPages, total } = usePagination(filtered)

    if (loading) return <TableSkeleton />

    return (
        <>
            <Wrap spacing={3} mb={6}>
                <WrapItem flex={{ base: '1 1 100%', md: '1 1 auto' }} maxW={{ md: '300px' }}>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none"><FiSearch color="gray" /></InputLeftElement>
                        <Input placeholder="بحث في القضايا..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} borderRadius="lg" />
                    </InputGroup>
                </WrapItem>
                <WrapItem>
                    <Select placeholder="جميع المحاكم" value={courtFilter} onChange={(e) => setCourtFilter(e.target.value)} borderRadius="lg">
                        <option value="ICJ">محكمة العدل الدولية (ICJ)</option>
                        <option value="ICC">المحكمة الجنائية الدولية (ICC)</option>
                        <option value="ECHR">المحكمة الأوروبية (ECHR)</option>
                    </Select>
                </WrapItem>
            </Wrap>

            <VStack spacing={3} align="stretch">
                {paginatedData.map((c) => (
                    <Card key={c.id} variant="outline">
                        <CardBody>
                            <HStack justify="space-between" mb={2} flexWrap="wrap">
                                <Text fontWeight="700" flex={1}>{c.name}</Text>
                                <HStack>
                                    <Badge colorScheme="blue">{c.court}</Badge>
                                    <Text fontSize="sm" color="gray.500">{c.year}</Text>
                                </HStack>
                            </HStack>
                            <Text fontSize="sm" color="gray.500" noOfLines={3} mb={3}>{c.summary}</Text>
                            <RouterLink to={`/case/${c.id}`}><Link as="span" color="brand.600" fontWeight="600" fontSize="sm">عرض التفاصيل ↗</Link></RouterLink>
                        </CardBody>
                    </Card>
                ))}
            </VStack>

            <Pagination page={page} setPage={setPage} totalPages={totalPages} total={total} />
        </>
    )
}

// Resolutions Section
function ResolutionsSection({ data = [], loading }) {
    const [searchQuery, setSearchQuery] = useState('')
    const [typeFilter, setTypeFilter] = useState('')

    const filtered = useMemo(() => {
        return data.filter(r => {
            const matchesSearch = r.number.includes(searchQuery) || r.subject.includes(searchQuery)
            const matchesType = !typeFilter || r.type.includes(typeFilter)
            return matchesSearch && matchesType
        })
    }, [searchQuery, typeFilter, data])

    const { paginatedData, page, setPage, totalPages, total } = usePagination(filtered)

    if (loading) return <TableSkeleton />

    return (
        <>
            <Wrap spacing={3} mb={6}>
                <WrapItem flex={{ base: '1 1 100%', md: '1 1 auto' }} maxW={{ md: '300px' }}>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none"><FiSearch color="gray" /></InputLeftElement>
                        <Input placeholder="بحث برقم القرار..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} borderRadius="lg" />
                    </InputGroup>
                </WrapItem>
                <WrapItem>
                    <Select placeholder="جميع الجهات" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} borderRadius="lg">
                        <option value="مجلس الأمن">مجلس الأمن</option>
                        <option value="الجمعية العامة">الجمعية العامة</option>
                    </Select>
                </WrapItem>
            </Wrap>

            <VStack spacing={3} align="stretch">
                {paginatedData.map((r) => (
                    <Card key={r.id} variant="outline">
                        <CardBody>
                            <HStack justify="space-between" mb={2}>
                                <Text fontWeight="800" fontFamily="mono" color="brand.600">{r.number}</Text>
                                <HStack>
                                    <Badge colorScheme={r.type.includes('الأمن') ? 'red' : 'green'}>{r.type}</Badge>
                                    <Text fontSize="sm" color="gray.500">{r.year}</Text>
                                </HStack>
                            </HStack>
                            <Text fontSize="sm" mb={2}>{r.subject}</Text>
                            <Link href={r.link} isExternal color="brand.600" fontWeight="600" fontSize="sm">عرض النص الكامل ↗</Link>
                        </CardBody>
                    </Card>
                ))}
            </VStack>

            <Pagination page={page} setPage={setPage} totalPages={totalPages} total={total} />
        </>
    )
}

// Resources Section
function ResourcesSection() {
    const [loading, setLoading] = useState(true)
    const categories = [...new Set(resourcesData.map(r => r.category))]

    useEffect(() => { setTimeout(() => setLoading(false), 300) }, [])

    if (loading) return <TableSkeleton />

    return (
        <VStack spacing={8} align="stretch">
            {categories.map(cat => (
                <Box key={cat}>
                    <Heading size="md" mb={4} color="brand.600">{cat}</Heading>
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
                        {resourcesData.filter(r => r.category === cat).map(resource => (
                            <Card key={resource.id} variant="outline" _hover={{ borderColor: 'brand.500', shadow: 'md', transform: 'translateY(-2px)' }} transition="all 0.2s" cursor="pointer" as="a" href={resource.url} target="_blank">
                                <CardBody>
                                    <HStack mb={3}>
                                        <Text fontSize="2xl">{resource.icon}</Text>
                                        <Heading size="sm">{resource.name}</Heading>
                                    </HStack>
                                    <Text fontSize="sm" color="gray.500" noOfLines={3}>{resource.description}</Text>
                                </CardBody>
                            </Card>
                        ))}
                    </SimpleGrid>
                </Box>
            ))}
        </VStack>
    )
}

// Year Filter Helper
function filterByYear(dateStr, filter) {
    const year = parseInt(dateStr)
    if (!year) return false
    if (filter === '2024') return year === 2024
    if (filter === '2023') return year === 2023
    if (filter === '2020-2022') return year >= 2020 && year <= 2022
    if (filter === '2010-2019') return year >= 2010 && year <= 2019
    if (filter === '2000-2009') return year >= 2000 && year <= 2009
    if (filter === '1990-1999') return year >= 1990 && year <= 1999
    if (filter === '1980-1989') return year >= 1980 && year <= 1989
    if (filter === 'قبل 1980') return year < 1980
    return true
}

// Main App
export default function App() {
    const [activeTab, setActiveTab] = useState('treaties')
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const headerBg = useColorModeValue('white', 'gray.800')
    const sidebarBg = useColorModeValue('white', 'gray.800')

    // Fetch Dynamic Content
    const { treaties, cases, resolutions, loading } = useContent()

    const tabTitles = {
        treaties: { title: 'الاتفاقيات الدولية', desc: 'مرجع شامل للمعاهدات والاتفاقيات الدولية الملزمة' },
        cases: { title: 'السوابق القضائية', desc: 'أحكام وقضايا من المحاكم الدولية (ICJ, ICC, ECHR)' },
        resolutions: { title: 'القرارات الدولية', desc: 'قرارات مجلس الأمن والجمعية العامة' },
        resources: { title: 'المصادر والمراجع', desc: 'روابط مباشرة للمصادر الدولية الموثوقة' },
    }

    return (
        <Box minH="100vh">
            {/* Header */}
            <Box as="header" bg={headerBg} borderBottom="1px" borderColor={useColorModeValue('gray.200', 'gray.700')} position="sticky" top={0} zIndex={10} px={4} py={3}>
                <Flex align="center" justify="space-between" maxW="1400px" mx="auto">
                    <HStack spacing={3}>
                        <Hide above="md">
                            <IconButton icon={<FiMenu />} onClick={onOpen} variant="ghost" aria-label="Open menu" />
                        </Hide>
                        <HStack>
                            <Box bg="brand.600" color="white" p={2} borderRadius="lg" fontWeight="800" fontSize="sm">UN</Box>
                            <Show above="sm"><Text fontWeight="700" color="brand.600">المرصد القانوني الدولي</Text></Show>
                        </HStack>
                    </HStack>
                    <IconButton icon={colorMode === 'light' ? <FiMoon /> : <FiSun />} onClick={toggleColorMode} variant="ghost" aria-label="Toggle color mode" />
                    <UserMenu />
                </Flex>
            </Box>

            {/* Mobile Drawer */}
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth="1px">القائمة</DrawerHeader>
                    <DrawerBody p={0}><Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onClose={onClose} /></DrawerBody>
                </DrawerContent>
            </Drawer>

            {/* Main Layout */}
            <Flex>
                <Hide below="md">
                    <Box as="aside" w="280px" bg={sidebarBg} borderLeft="1px" borderColor={useColorModeValue('gray.200', 'gray.700')} minH="calc(100vh - 60px)" position="sticky" top="60px">
                        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
                    </Box>
                </Hide>

                <Box flex={1} p={{ base: 4, md: 8 }}>
                    <Box mb={6}>
                        <Heading size="lg" mb={2}>{tabTitles[activeTab].title}</Heading>
                        <Text color="gray.500">{tabTitles[activeTab].desc}</Text>
                    </Box>

                    {activeTab === 'treaties' && <TreatiesSection data={treaties} loading={loading} />}
                    {activeTab === 'cases' && <CasesSection data={cases} loading={loading} />}
                    {activeTab === 'resolutions' && <ResolutionsSection data={resolutions} loading={loading} />}
                    {activeTab === 'resources' && <ResourcesSection />}
                </Box>
            </Flex>
        </Box>
    )
}
