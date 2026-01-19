import React, { useState, useMemo } from 'react'
import {
    Box, Heading, Text, VStack, HStack, SimpleGrid, Select, useColorModeValue,
    Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Progress, Badge,
    Card, CardBody, CardHeader, Divider, Avatar, Table, Thead, Tbody, Tr, Th, Td
} from '@chakra-ui/react'
// import { FiFlag, FiFileText, FiAward, FiTrendingUp } from 'react-icons/fi'

// Country data
const countriesData = {
    'الأردن': { flag: '🇯🇴', treaties: 32, cases: 5, resolutions: 18, topics: ['حقوق الإنسان', 'اللاجئين', 'البيئة'] },
    'فلسطين': { flag: '🇵🇸', treaties: 15, cases: 12, resolutions: 45, topics: ['حقوق الإنسان', 'القانون الإنساني', 'الاحتلال'] },
    'لبنان': { flag: '🇱🇧', treaties: 28, cases: 4, resolutions: 12, topics: ['حقوق الإنسان', 'اللاجئين'] },
    'سوريا': { flag: '🇸🇾', treaties: 22, cases: 8, resolutions: 35, topics: ['القانون الإنساني', 'حقوق الإنسان'] },
    'العراق': { flag: '🇮🇶', treaties: 26, cases: 6, resolutions: 28, topics: ['حقوق الإنسان', 'الإرهاب'] },
    'مصر': { flag: '🇪🇬', treaties: 38, cases: 3, resolutions: 15, topics: ['حقوق الإنسان', 'البيئة'] },
    'السعودية': { flag: '🇸🇦', treaties: 25, cases: 2, resolutions: 8, topics: ['حقوق الإنسان'] },
    'الإمارات': { flag: '🇦🇪', treaties: 30, cases: 1, resolutions: 5, topics: ['البيئة', 'التجارة'] },
    'المغرب': { flag: '🇲🇦', treaties: 35, cases: 4, resolutions: 10, topics: ['حقوق الإنسان', 'البيئة'] },
    'تونس': { flag: '🇹🇳', treaties: 40, cases: 2, resolutions: 8, topics: ['حقوق الإنسان', 'الديمقراطية'] },
    'الجزائر': { flag: '🇩🇿', treaties: 33, cases: 3, resolutions: 12, topics: ['حقوق الإنسان', 'البيئة'] },
    'الولايات المتحدة': { flag: '🇺🇸', treaties: 45, cases: 15, resolutions: 120, topics: ['الأمن', 'التجارة', 'البيئة'] },
    'روسيا': { flag: '🇷🇺', treaties: 52, cases: 10, resolutions: 85, topics: ['الأمن', 'نزع السلاح'] },
    'الصين': { flag: '🇨🇳', treaties: 48, cases: 5, resolutions: 50, topics: ['حقوق الإنسان', 'التجارة'] },
    'فرنسا': { flag: '🇫🇷', treaties: 58, cases: 8, resolutions: 60, topics: ['حقوق الإنسان', 'البيئة', 'الثقافة'] },
    'بريطانيا': { flag: '🇬🇧', treaties: 55, cases: 12, resolutions: 75, topics: ['حقوق الإنسان', 'الأمن'] },
    'ألمانيا': { flag: '🇩🇪', treaties: 54, cases: 6, resolutions: 40, topics: ['حقوق الإنسان', 'البيئة', 'اللاجئين'] },
}

function CountryCompare() {
    const [country1, setCountry1] = useState('الأردن')
    const [country2, setCountry2] = useState('فلسطين')
    const bgColor = useColorModeValue('white', 'gray.800')
    const borderColor = useColorModeValue('gray.200', 'gray.600')

    const data1 = countriesData[country1]
    const data2 = countriesData[country2]

    const total1 = data1.treaties + data1.cases + data1.resolutions
    const total2 = data2.treaties + data2.cases + data2.resolutions
    const maxTotal = Math.max(total1, total2)

    return (
        <Box p={4}>
            <VStack spacing={6} align="stretch">
                <Heading size="lg" textAlign="center">🏳️ مقارنة الدول</Heading>
                <Text textAlign="center" color="gray.500">
                    قارن بين التزام الدول المختلفة بالقانون الدولي
                </Text>

                {/* Country Selectors */}
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    <Card bg={bgColor} borderColor={borderColor}>
                        <CardHeader pb={2}>
                            <HStack>
                                <Text fontSize="3xl">{data1.flag}</Text>
                                <Select
                                    value={country1}
                                    onChange={(e) => setCountry1(e.target.value)}
                                    fontWeight="bold"
                                    size="lg"
                                >
                                    {Object.keys(countriesData).map(c => (
                                        <option key={c} value={c}>{c}</option>
                                    ))}
                                </Select>
                            </HStack>
                        </CardHeader>
                        <CardBody>
                            <VStack spacing={4}>
                                <Stat textAlign="center">
                                    <StatNumber color="brand.500" fontSize="3xl">{total1}</StatNumber>
                                    <StatLabel>إجمالي الالتزامات</StatLabel>
                                </Stat>
                                <Progress value={(total1 / maxTotal) * 100} colorScheme="blue" w="100%" borderRadius="full" />
                            </VStack>
                        </CardBody>
                    </Card>

                    <Card bg={bgColor} borderColor={borderColor}>
                        <CardHeader pb={2}>
                            <HStack>
                                <Text fontSize="3xl">{data2.flag}</Text>
                                <Select
                                    value={country2}
                                    onChange={(e) => setCountry2(e.target.value)}
                                    fontWeight="bold"
                                    size="lg"
                                >
                                    {Object.keys(countriesData).map(c => (
                                        <option key={c} value={c}>{c}</option>
                                    ))}
                                </Select>
                            </HStack>
                        </CardHeader>
                        <CardBody>
                            <VStack spacing={4}>
                                <Stat textAlign="center">
                                    <StatNumber color="green.500" fontSize="3xl">{total2}</StatNumber>
                                    <StatLabel>إجمالي الالتزامات</StatLabel>
                                </Stat>
                                <Progress value={(total2 / maxTotal) * 100} colorScheme="green" w="100%" borderRadius="full" />
                            </VStack>
                        </CardBody>
                    </Card>
                </SimpleGrid>

                {/* Comparison Table */}
                <Card bg={bgColor}>
                    <CardHeader>
                        <Heading size="md">📊 مقارنة تفصيلية</Heading>
                    </CardHeader>
                    <CardBody>
                        <Table variant="simple">
                            <Thead>
                                <Tr>
                                    <Th>المعيار</Th>
                                    <Th isNumeric>{country1} {data1.flag}</Th>
                                    <Th isNumeric>{country2} {data2.flag}</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td><HStack><Text>📄</Text><Text>الاتفاقيات</Text></HStack></Td>
                                    <Td isNumeric fontWeight="bold">{data1.treaties}</Td>
                                    <Td isNumeric fontWeight="bold">{data2.treaties}</Td>
                                </Tr>
                                <Tr>
                                    <Td><HStack><Text>⚖️</Text><Text>القضايا</Text></HStack></Td>
                                    <Td isNumeric fontWeight="bold">{data1.cases}</Td>
                                    <Td isNumeric fontWeight="bold">{data2.cases}</Td>
                                </Tr>
                                <Tr>
                                    <Td><HStack><Text>📈</Text><Text>القرارات</Text></HStack></Td>
                                    <Td isNumeric fontWeight="bold">{data1.resolutions}</Td>
                                    <Td isNumeric fontWeight="bold">{data2.resolutions}</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </CardBody>
                </Card>

                {/* Topics */}
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    <Card bg={bgColor}>
                        <CardHeader pb={2}>
                            <Heading size="sm">مواضيع الاهتمام - {country1}</Heading>
                        </CardHeader>
                        <CardBody>
                            <HStack wrap="wrap">
                                {data1.topics.map((t, i) => (
                                    <Badge key={i} colorScheme="blue" px={3} py={1} borderRadius="full">{t}</Badge>
                                ))}
                            </HStack>
                        </CardBody>
                    </Card>
                    <Card bg={bgColor}>
                        <CardHeader pb={2}>
                            <Heading size="sm">مواضيع الاهتمام - {country2}</Heading>
                        </CardHeader>
                        <CardBody>
                            <HStack wrap="wrap">
                                {data2.topics.map((t, i) => (
                                    <Badge key={i} colorScheme="green" px={3} py={1} borderRadius="full">{t}</Badge>
                                ))}
                            </HStack>
                        </CardBody>
                    </Card>
                </SimpleGrid>
            </VStack>
        </Box>
    )
}

export default CountryCompare
