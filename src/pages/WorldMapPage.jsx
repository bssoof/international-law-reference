import React, { useState, memo } from 'react'
import {
    Box, Heading, Text, VStack, HStack, useColorModeValue, Badge,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton,
    List, ListItem, ListIcon, Stat, StatLabel, StatNumber, Spinner, Button
} from '@chakra-ui/react'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'
// import { FiFileText, FiExternalLink } from 'react-icons/fi'

// World topology JSON
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

// Country data - treaties signed by each country (sample data)
const countryTreatyData = {
    'United States of America': { count: 45, treaties: ['ميثاق الأمم المتحدة', 'اتفاقية فيينا للعلاقات الدبلوماسية', 'معاهدة عدم انتشار الأسلحة النووية'] },
    'Russia': { count: 52, treaties: ['ميثاق الأمم المتحدة', 'اتفاقيات جنيف الأربع', 'معاهدة عدم انتشار الأسلحة النووية'] },
    'China': { count: 48, treaties: ['ميثاق الأمم المتحدة', 'اتفاقية حقوق الطفل', 'اتفاقية فيينا لقانون المعاهدات'] },
    'France': { count: 58, treaties: ['ميثاق الأمم المتحدة', 'الإعلان العالمي لحقوق الإنسان', 'اتفاقية باريس للمناخ'] },
    'United Kingdom': { count: 55, treaties: ['ميثاق الأمم المتحدة', 'اتفاقيات جنيف الأربع', 'الاتفاقية الأوروبية لحقوق الإنسان'] },
    'Germany': { count: 54, treaties: ['ميثاق الأمم المتحدة', 'اتفاقية اللاجئين 1951', 'معاهدة روما للمحكمة الجنائية الدولية'] },
    'Japan': { count: 42, treaties: ['ميثاق الأمم المتحدة', 'معاهدة عدم انتشار الأسلحة النووية', 'اتفاقية كيوتو'] },
    'Brazil': { count: 38, treaties: ['ميثاق الأمم المتحدة', 'اتفاقية التنوع البيولوجي', 'اتفاقية باريس للمناخ'] },
    'India': { count: 35, treaties: ['ميثاق الأمم المتحدة', 'اتفاقية حقوق الطفل', 'اتفاقية القضاء على التمييز ضد المرأة'] },
    'South Africa': { count: 40, treaties: ['ميثاق الأمم المتحدة', 'معاهدة روما للمحكمة الجنائية الدولية', 'اتفاقية مناهضة التعذيب'] },
    'Egypt': { count: 32, treaties: ['ميثاق الأمم المتحدة', 'ميثاق جامعة الدول العربية', 'اتفاقيات جنيف الأربع'] },
    'Saudi Arabia': { count: 28, treaties: ['ميثاق الأمم المتحدة', 'ميثاق جامعة الدول العربية', 'اتفاقية حقوق الطفل'] },
    'Jordan': { count: 30, treaties: ['ميثاق الأمم المتحدة', 'ميثاق جامعة الدول العربية', 'اتفاقية اللاجئين 1951'] },
    'Palestine': { count: 15, treaties: ['معاهدة روما للمحكمة الجنائية الدولية', 'اتفاقيات جنيف الأربع'] },
    'Lebanon': { count: 25, treaties: ['ميثاق الأمم المتحدة', 'ميثاق جامعة الدول العربية', 'اتفاقية حقوق الطفل'] },
    'Syria': { count: 22, treaties: ['ميثاق الأمم المتحدة', 'ميثاق جامعة الدول العربية', 'اتفاقيات جنيف الأربع'] },
    'Iraq': { count: 24, treaties: ['ميثاق الأمم المتحدة', 'ميثاق جامعة الدول العربية', 'اتفاقية مناهضة التعذيب'] },
    'Morocco': { count: 35, treaties: ['ميثاق الأمم المتحدة', 'ميثاق جامعة الدول العربية', 'اتفاقية القضاء على التمييز ضد المرأة'] },
    'Algeria': { count: 33, treaties: ['ميثاق الأمم المتحدة', 'ميثاق جامعة الدول العربية', 'اتفاقية حقوق الطفل'] },
    'Tunisia': { count: 36, treaties: ['ميثاق الأمم المتحدة', 'ميثاق جامعة الدول العربية', 'اتفاقية مناهضة التعذيب'] },
}

const getCountryColor = (countryName, colorMode) => {
    const data = countryTreatyData[countryName]
    if (!data) return colorMode === 'dark' ? '#2D3748' : '#E2E8F0'

    const count = data.count
    if (count >= 50) return '#22543D' // Dark green
    if (count >= 40) return '#38A169' // Green
    if (count >= 30) return '#68D391' // Light green
    if (count >= 20) return '#F6E05E' // Yellow
    if (count >= 10) return '#ED8936' // Orange
    return '#FC8181' // Red
}

function WorldMapPage() {
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const bgColor = useColorModeValue('white', 'gray.800')
    const borderColor = useColorModeValue('gray.200', 'gray.600')
    const colorMode = useColorModeValue('light', 'dark')

    const handleCountryClick = (geo) => {
        const countryName = geo.properties.name
        if (countryTreatyData[countryName]) {
            setSelectedCountry({
                name: countryName,
                ...countryTreatyData[countryName]
            })
            setIsModalOpen(true)
        }
    }

    return (
        <Box p={4}>
            <VStack spacing={4} align="stretch">
                <Heading size="lg" textAlign="center">🗺️ خريطة الالتزام بالقانون الدولي</Heading>
                <Text textAlign="center" color="gray.500">
                    اضغط على أي دولة لمشاهدة الاتفاقيات الموقعة عليها
                </Text>

                {/* Legend */}
                <HStack justify="center" wrap="wrap" spacing={4} mb={4}>
                    <Badge colorScheme="green" px={3} py={1}>50+ اتفاقية</Badge>
                    <Badge colorScheme="teal" px={3} py={1}>40-49</Badge>
                    <Badge colorScheme="yellow" px={3} py={1}>20-39</Badge>
                    <Badge colorScheme="orange" px={3} py={1}>10-19</Badge>
                    <Badge colorScheme="red" px={3} py={1}>أقل من 10</Badge>
                </HStack>

                {/* Map Container */}
                <Box
                    bg={bgColor}
                    borderRadius="xl"
                    border="1px"
                    borderColor={borderColor}
                    overflow="hidden"
                    height="500px"
                >
                    <ComposableMap
                        projectionConfig={{ scale: 150 }}
                        style={{ width: '100%', height: '100%' }}
                    >
                        <ZoomableGroup>
                            <Geographies geography={geoUrl}>
                                {({ geographies }) =>
                                    geographies.map((geo) => (
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            onClick={() => handleCountryClick(geo)}
                                            style={{
                                                default: {
                                                    fill: getCountryColor(geo.properties.name, colorMode),
                                                    stroke: '#FFF',
                                                    strokeWidth: 0.5,
                                                    outline: 'none',
                                                },
                                                hover: {
                                                    fill: '#3182CE',
                                                    stroke: '#FFF',
                                                    strokeWidth: 1,
                                                    outline: 'none',
                                                    cursor: 'pointer',
                                                },
                                                pressed: {
                                                    fill: '#2B6CB0',
                                                    stroke: '#FFF',
                                                    strokeWidth: 1,
                                                    outline: 'none',
                                                },
                                            }}
                                        />
                                    ))
                                }
                            </Geographies>
                        </ZoomableGroup>
                    </ComposableMap>
                </Box>
            </VStack>

            {/* Country Details Modal */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} size="lg">
                <ModalOverlay backdropFilter="blur(4px)" />
                <ModalContent>
                    <ModalHeader>
                        🏳️ {selectedCountry?.name}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        {selectedCountry && (
                            <VStack align="stretch" spacing={4}>
                                <Stat textAlign="center">
                                    <StatLabel>عدد الاتفاقيات الموقعة</StatLabel>
                                    <StatNumber color="brand.500" fontSize="4xl">
                                        {selectedCountry.count}
                                    </StatNumber>
                                </Stat>

                                <Box>
                                    <Text fontWeight="bold" mb={2}>أهم الاتفاقيات:</Text>
                                    <List spacing={2}>
                                        {selectedCountry.treaties?.map((treaty, i) => (
                                            <ListItem key={i}>
                                                <ListIcon as={() => <span>📄</span>} color="green.500" />
                                                {treaty}
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>

                                <Button colorScheme="brand" leftIcon={<span>🔗</span>}>
                                    عرض جميع الاتفاقيات
                                </Button>
                            </VStack>
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default memo(WorldMapPage)
