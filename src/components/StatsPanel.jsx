import { Box, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, StatGroup, Progress, Text, VStack, useColorModeValue, Flex } from '@chakra-ui/react'

export default function StatsPanel({ data }) {
    const bg = useColorModeValue('white', 'gray.800')
    const borderColor = useColorModeValue('gray.200', 'gray.700')

    // Calculate stats
    const total = data.length
    const treaties = data.filter(i => i.treatyId || (i.id && !i.court && !i.number && !i.url)).length // Approximation based on keys
    // Better way: pass categorized data props, but if receiving flat filtered list:
    // Let's rely on the props passed. The parent can pass 'treaties', 'cases', 'resolutions' counts if available, 
    // or we can calculate from the single 'data' prop if it contains everything.
    // Actually, App.jsx has `filteredData`. 

    // Let's make it simple: it receives the *filtered* data and shows stats for it.

    const byTopic = data.reduce((acc, item) => {
        const topic = item.topic || item.category || item.type || 'غير مصنف'
        acc[topic] = (acc[topic] || 0) + 1
        return acc
    }, {})

    // Sort topics by count
    const sortedTopics = Object.entries(byTopic)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5) // Top 5

    return (
        <Box p={4} bg={bg} borderRadius="lg" border="1px" borderColor={borderColor} mb={6}>
            <StatGroup mb={6}>
                <Stat>
                    <StatLabel>إجمالي النتائج</StatLabel>
                    <StatNumber>{total}</StatNumber>
                    <StatHelpText>عنصر مطابق</StatHelpText>
                </Stat>
                <Stat>
                    <StatLabel>أكثر المواضيع</StatLabel>
                    <StatNumber>{sortedTopics[0]?.[0] || '-'}</StatNumber>
                    <StatHelpText>{sortedTopics[0]?.[1] || 0} عنصر</StatHelpText>
                </Stat>
            </StatGroup>

            <Text fontWeight="bold" mb={3}>توزيع المواضيع (أعلى 5)</Text>
            <VStack spacing={3} align="stretch">
                {sortedTopics.map(([topic, count]) => (
                    <Box key={topic}>
                        <Flex justify="space-between" mb={1}>
                            <Text fontSize="sm">{topic}</Text>
                            <Text fontSize="sm" color="gray.500">{count}</Text>
                        </Flex>
                        <Progress value={(count / total) * 100} size="sm" colorScheme="brand" borderRadius="full" />
                    </Box>
                ))}
            </VStack>
        </Box>
    )
}
