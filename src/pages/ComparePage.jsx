import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
    Box, Heading, Text, VStack, HStack, Select, Card, CardBody,
    Button, SimpleGrid, Badge, Divider, Icon, useColorModeValue,
    Alert, AlertIcon
} from '@chakra-ui/react'
// import { FiArrowRight, FiColumns, FiCalendar, FiGlobe, FiFileText, FiExternalLink } from 'react-icons/fi'
import { useContent } from '../hooks/useContent'

export function ComparePage() {
    const { treaties } = useContent()
    const [treaty1Id, setTreaty1Id] = useState('')
    const [treaty2Id, setTreaty2Id] = useState('')
    const cardBg = useColorModeValue('white', 'gray.800')
    const borderColor = useColorModeValue('gray.200', 'gray.600')

    const treaty1 = useMemo(() =>
        treaties.find(t => t.id == treaty1Id),
        [treaty1Id, treaties]
    )
    const treaty2 = useMemo(() =>
        treaties.find(t => t.id == treaty2Id),
        [treaty2Id, treaties]
    )

    const CompareCard = ({ treaty, label, color }) => (
        <Card bg={cardBg} borderTop="4px solid" borderColor={color} h="100%">
            <CardBody>
                {treaty ? (
                    <VStack align="stretch" spacing={4}>
                        <Badge colorScheme={color === 'blue.500' ? 'blue' : 'purple'} alignSelf="start">
                            {label}
                        </Badge>

                        <Heading size="md" color="brand.600">
                            {treaty.name}
                        </Heading>

                        <Divider />

                        <HStack>
                            <Text color="gray.500">📅</Text>
                            <Text fontWeight="600">سنة التبني:</Text>
                            <Text>{treaty.date}</Text>
                        </HStack>

                        <HStack>
                            <Text color="gray.500">🌍</Text>
                            <Text fontWeight="600">الدول الأطراف:</Text>
                            <Text>{treaty.states}</Text>
                        </HStack>

                        <HStack>
                            <Text color="gray.500">📄</Text>
                            <Text fontWeight="600">الموضوع:</Text>
                            <Badge colorScheme="brand">{treaty.topic}</Badge>
                        </HStack>

                        <Divider />

                        <Box>
                            <Text fontWeight="600" mb={2}>📝 الوصف:</Text>
                            <Text color="gray.600" lineHeight="tall">
                                {treaty.description}
                            </Text>
                        </Box>

                        <Button
                            as="a"
                            href={treaty.link}
                            target="_blank"
                            colorScheme="brand"
                            variant="outline"
                            leftIcon={<span>🔗</span>}
                            mt="auto"
                        >
                            عرض النص الكامل
                        </Button>
                    </VStack>
                ) : (
                    <VStack justify="center" h="300px" color="gray.400">
                        <Text fontSize="6xl">📄</Text>
                        <Text>اختر اتفاقية للمقارنة</Text>
                    </VStack>
                )}
            </CardBody>
        </Card>
    )

    return (
        <Box maxW="1200px" mx="auto" p={{ base: 4, md: 8 }}>
            <VStack align="stretch" spacing={6}>
                {/* Header */}
                <Box textAlign="center" mb={4}>
                    <HStack justify="center" mb={2}>
                        <Text fontSize="3xl">📊</Text>
                        <Heading size="lg">مقارنة الاتفاقيات</Heading>
                    </HStack>
                    <Text color="gray.500">اختر اتفاقيتين لمقارنتهما جنباً إلى جنب</Text>
                </Box>

                {/* Selection */}
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    <Box>
                        <Text mb={2} fontWeight="600">🔵 الاتفاقية الأولى:</Text>
                        <Select
                            placeholder="اختر اتفاقية..."
                            value={treaty1Id}
                            onChange={(e) => setTreaty1Id(e.target.value)}
                            bg={cardBg}
                        >
                            {treaties
                                .filter(t => t.id != treaty2Id)
                                .map(t => (
                                    <option key={t.id} value={t.id}>
                                        {t.name} ({t.date})
                                    </option>
                                ))
                            }
                        </Select>
                    </Box>
                    <Box>
                        <Text mb={2} fontWeight="600">🟣 الاتفاقية الثانية:</Text>
                        <Select
                            placeholder="اختر اتفاقية..."
                            value={treaty2Id}
                            onChange={(e) => setTreaty2Id(e.target.value)}
                            bg={cardBg}
                        >
                            {treaties
                                .filter(t => t.id != treaty1Id)
                                .map(t => (
                                    <option key={t.id} value={t.id}>
                                        {t.name} ({t.date})
                                    </option>
                                ))
                            }
                        </Select>
                    </Box>
                </SimpleGrid>

                {/* Comparison Tip */}
                {!treaty1 && !treaty2 && (
                    <Alert status="info" borderRadius="lg">
                        <AlertIcon />
                        اختر اتفاقيتين من القوائم أعلاه لبدء المقارنة
                    </Alert>
                )}

                {/* Comparison Cards */}
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    <CompareCard treaty={treaty1} label="الاتفاقية الأولى" color="blue.500" />
                    <CompareCard treaty={treaty2} label="الاتفاقية الثانية" color="purple.500" />
                </SimpleGrid>

                {/* Quick Comparison Table */}
                {treaty1 && treaty2 && (
                    <Card bg={cardBg}>
                        <CardBody>
                            <Heading size="sm" mb={4}>📊 جدول المقارنة السريعة</Heading>
                            <Box overflowX="auto">
                                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                    <thead>
                                        <tr style={{ borderBottom: '2px solid', borderColor: borderColor }}>
                                            <th style={{ padding: '12px', textAlign: 'right' }}>المعيار</th>
                                            <th style={{ padding: '12px', textAlign: 'center', color: '#3182ce' }}>🔵 الأولى</th>
                                            <th style={{ padding: '12px', textAlign: 'center', color: '#805ad5' }}>🟣 الثانية</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ borderBottom: '1px solid', borderColor: borderColor }}>
                                            <td style={{ padding: '12px' }}>📅 سنة التبني</td>
                                            <td style={{ padding: '12px', textAlign: 'center' }}>{treaty1.date}</td>
                                            <td style={{ padding: '12px', textAlign: 'center' }}>{treaty2.date}</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid', borderColor: borderColor }}>
                                            <td style={{ padding: '12px' }}>🌍 الدول الأطراف</td>
                                            <td style={{ padding: '12px', textAlign: 'center' }}>{treaty1.states}</td>
                                            <td style={{ padding: '12px', textAlign: 'center' }}>{treaty2.states}</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid', borderColor: borderColor }}>
                                            <td style={{ padding: '12px' }}>📁 الموضوع</td>
                                            <td style={{ padding: '12px', textAlign: 'center' }}>{treaty1.topic}</td>
                                            <td style={{ padding: '12px', textAlign: 'center' }}>{treaty2.topic}</td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding: '12px' }}>⏳ الفرق الزمني</td>
                                            <td colSpan={2} style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold' }}>
                                                {Math.abs(parseInt(treaty1.date) - parseInt(treaty2.date))} سنة
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Box>
                        </CardBody>
                    </Card>
                )}

                {/* Back Button */}
                <Button as={Link} to="/" variant="outline" leftIcon={<span>➡️</span>}>
                    العودة للرئيسية
                </Button>
            </VStack>
        </Box>
    )
}
