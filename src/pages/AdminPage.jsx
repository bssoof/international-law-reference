import { useState } from 'react'
import {
    Box, Heading, VStack, FormControl, FormLabel, Input, Textarea,
    Select, Button, useToast, Tabs, TabList, TabPanels, Tab, TabPanel,
    Container
} from '@chakra-ui/react'
import { supabase } from '../supabaseClient'
import { useUser } from '../context/UserContext'

export function AdminPage() {
    const { user } = useUser()
    const toast = useToast()
    const [loading, setLoading] = useState(false)

    // Treaty Form State
    const [treaty, setTreaty] = useState({
        name: '', date: '', topic: 'حقوق الإنسان', states: '', link: '', description: ''
    })

    // Case Form State
    const [caseData, setCaseData] = useState({
        name: '', year: '', court: 'ICJ', summary: '', link: ''
    })

    const handleTreatySubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const { error } = await supabase.from('treaties').insert([treaty])
        setLoading(false)

        if (error) {
            toast({ title: 'خطأ', description: error.message, status: 'error' })
        } else {
            toast({ title: 'تمت إضافة الاتفاقية بنجاح!', status: 'success' })
            setTreaty({ name: '', date: '', topic: 'حقوق الإنسان', states: '', link: '', description: '' })
        }
    }

    const handleCaseSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const { error } = await supabase.from('cases').insert([caseData])
        setLoading(false)

        if (error) {
            toast({ title: 'خطأ', description: error.message, status: 'error' })
        } else {
            toast({ title: 'تمت إضافة القضية بنجاح!', status: 'success' })
            setCaseData({ name: '', year: '', court: 'ICJ', summary: '', link: '' })
        }
    }

    if (!user) {
        return (
            <Box textAlign="center" py={10}>
                <Heading size="md">يجب تسجيل الدخول للوصول إلى هذه الصفحة</Heading>
            </Box>
        )
    }

    return (
        <Container maxW="container.md" py={8}>
            <Heading mb={6} textAlign="center">لوحة إضافة المحتوى 📝</Heading>

            <Tabs isFitted variant="enclosed" colorScheme="brand">
                <TabList mb="1em">
                    <Tab>إضافة اتفاقية</Tab>
                    <Tab>إضافة قضية</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <form onSubmit={handleTreatySubmit}>
                            <VStack spacing={4}>
                                <FormControl isRequired>
                                    <FormLabel>اسم الاتفاقية</FormLabel>
                                    <Input value={treaty.name} onChange={e => setTreaty({ ...treaty, name: e.target.value })} placeholder="مثال: اتفاقية جنيف" />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>السنة</FormLabel>
                                    <Input type="number" value={treaty.date} onChange={e => setTreaty({ ...treaty, date: e.target.value })} placeholder="1949" />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>المجال</FormLabel>
                                    <Select value={treaty.topic} onChange={e => setTreaty({ ...treaty, topic: e.target.value })}>
                                        <option value="حقوق الإنسان">حقوق الإنسان</option>
                                        <option value="السلام والأمن">السلام والأمن</option>
                                        <option value="القانون الإنساني">القانون الإنساني</option>
                                        <option value="البيئة">البيئة</option>
                                        <option value="القانون البحري">القانون البحري</option>
                                    </Select>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>عدد الدول الأطراف</FormLabel>
                                    <Input value={treaty.states} onChange={e => setTreaty({ ...treaty, states: e.target.value })} placeholder="مثال: 196 دولة" />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>رابط النص الكامل</FormLabel>
                                    <Input type="url" value={treaty.link} onChange={e => setTreaty({ ...treaty, link: e.target.value })} />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>الوصف</FormLabel>
                                    <Textarea value={treaty.description} onChange={e => setTreaty({ ...treaty, description: e.target.value })} />
                                </FormControl>
                                <Button type="submit" colorScheme="blue" width="100%" isLoading={loading}>حفظ الاتفاقية</Button>
                            </VStack>
                        </form>
                    </TabPanel>

                    <TabPanel>
                        <form onSubmit={handleCaseSubmit}>
                            <VStack spacing={4}>
                                <FormControl isRequired>
                                    <FormLabel>اسم القضية</FormLabel>
                                    <Input value={caseData.name} onChange={e => setCaseData({ ...caseData, name: e.target.value })} placeholder="مثال: قضية الجدار العازل" />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>السنة</FormLabel>
                                    <Input type="number" value={caseData.year} onChange={e => setCaseData({ ...caseData, year: e.target.value })} />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>المحكمة</FormLabel>
                                    <Select value={caseData.court} onChange={e => setCaseData({ ...caseData, court: e.target.value })}>
                                        <option value="ICJ">محكمة العدل الدولية (ICJ)</option>
                                        <option value="ICC">الجنائية الدولية (ICC)</option>
                                        <option value="ECHR">الأوروبية لحقوق الإنسان</option>
                                    </Select>
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>رابط التفاصيل</FormLabel>
                                    <Input type="url" value={caseData.link} onChange={e => setCaseData({ ...caseData, link: e.target.value })} />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>ملخص</FormLabel>
                                    <Textarea value={caseData.summary} onChange={e => setCaseData({ ...caseData, summary: e.target.value })} />
                                </FormControl>
                                <Button type="submit" colorScheme="purple" width="100%" isLoading={loading}>حفظ القضية</Button>
                            </VStack>
                        </form>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    )
}
