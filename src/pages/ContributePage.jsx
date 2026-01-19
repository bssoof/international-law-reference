import { useState } from 'react'
import {
    Box, Heading, Text, VStack, FormControl, FormLabel, Input, Textarea, Select,
    Button, useToast, Card, CardBody, Alert, AlertIcon, useColorModeValue
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
// import { FiSend, FiArrowRight } from 'react-icons/fi'
import { submitContribution } from '../hooks'

const topics = ['حقوق الإنسان', 'السلام والأمن', 'القانون الإنساني', 'نزع السلاح', 'البيئة', 'القانون البحري']

export function ContributePage() {
    const [type, setType] = useState('treaty')
    const [formData, setFormData] = useState({})
    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const toast = useToast()
    const cardBg = useColorModeValue('white', 'gray.800')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const tableMap = { treaty: 'treaties', case: 'cases', resolution: 'resolutions' }
        const { error } = await submitContribution(tableMap[type], formData)

        setLoading(false)

        if (error) {
            toast({
                title: 'حدث خطأ',
                description: error.message,
                status: 'error',
                duration: 5000,
            })
        } else {
            setSubmitted(true)
            toast({
                title: 'تم الإرسال بنجاح',
                description: 'شكراً لمساهمتك! سيتم مراجعتها قريباً.',
                status: 'success',
                duration: 5000,
            })
        }
    }

    if (submitted) {
        return (
            <Box maxW="600px" mx="auto" p={8} textAlign="center">
                <Alert status="success" borderRadius="lg" mb={6}>
                    <AlertIcon />
                    تم إرسال مساهمتك بنجاح! سيتم مراجعتها من قبل المشرفين.
                </Alert>
                <Button as={Link} to="/" colorScheme="brand" leftIcon={<span>➡️</span>}>
                    العودة للرئيسية
                </Button>
            </Box>
        )
    }

    return (
        <Box maxW="700px" mx="auto" p={{ base: 4, md: 8 }}>
            <VStack align="stretch" spacing={6}>
                <Box>
                    <Heading size="lg" mb={2}>إضافة محتوى جديد</Heading>
                    <Text color="gray.500">ساهم بإضافة اتفاقية أو قضية أو قرار دولي جديد</Text>
                </Box>

                <Card bg={cardBg}>
                    <CardBody>
                        <form onSubmit={handleSubmit}>
                            <VStack spacing={4} align="stretch">
                                <FormControl isRequired>
                                    <FormLabel>نوع المحتوى</FormLabel>
                                    <Select value={type} onChange={(e) => { setType(e.target.value); setFormData({}); }}>
                                        <option value="treaty">اتفاقية دولية</option>
                                        <option value="case">سابقة قضائية</option>
                                        <option value="resolution">قرار دولي</option>
                                    </Select>
                                </FormControl>

                                {type === 'treaty' && (
                                    <>
                                        <FormControl isRequired>
                                            <FormLabel>اسم الاتفاقية</FormLabel>
                                            <Input placeholder="مثال: اتفاقية فيينا للعلاقات الدبلوماسية" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>سنة التبني</FormLabel>
                                            <Input type="number" placeholder="1961" onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>المجال</FormLabel>
                                            <Select placeholder="اختر المجال" onChange={(e) => setFormData({ ...formData, topic: e.target.value })}>
                                                {topics.map(t => <option key={t} value={t}>{t}</option>)}
                                            </Select>
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>عدد الدول الأطراف</FormLabel>
                                            <Input type="number" placeholder="193" onChange={(e) => setFormData({ ...formData, states: e.target.value })} />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>رابط النص الكامل</FormLabel>
                                            <Input type="url" placeholder="https://..." onChange={(e) => setFormData({ ...formData, link: e.target.value })} />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>وصف مختصر</FormLabel>
                                            <Textarea placeholder="نبذة عن الاتفاقية..." onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                                        </FormControl>
                                    </>
                                )}

                                {type === 'case' && (
                                    <>
                                        <FormControl isRequired>
                                            <FormLabel>اسم القضية</FormLabel>
                                            <Input placeholder="مثال: جنوب أفريقيا ضد إسرائيل" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>المحكمة</FormLabel>
                                            <Select placeholder="اختر المحكمة" onChange={(e) => setFormData({ ...formData, court: e.target.value })}>
                                                <option value="ICJ">محكمة العدل الدولية (ICJ)</option>
                                                <option value="ICC">المحكمة الجنائية الدولية (ICC)</option>
                                                <option value="ECHR">المحكمة الأوروبية لحقوق الإنسان</option>
                                            </Select>
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>السنة</FormLabel>
                                            <Input type="number" placeholder="2024" onChange={(e) => setFormData({ ...formData, year: e.target.value })} />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>ملخص القضية</FormLabel>
                                            <Textarea placeholder="ملخص مختصر..." onChange={(e) => setFormData({ ...formData, summary: e.target.value })} />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>رابط القضية</FormLabel>
                                            <Input type="url" placeholder="https://..." onChange={(e) => setFormData({ ...formData, link: e.target.value })} />
                                        </FormControl>
                                    </>
                                )}

                                {type === 'resolution' && (
                                    <>
                                        <FormControl isRequired>
                                            <FormLabel>رقم القرار</FormLabel>
                                            <Input placeholder="مثال: S/RES/2728" onChange={(e) => setFormData({ ...formData, number: e.target.value })} />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>الجهة المصدرة</FormLabel>
                                            <Select placeholder="اختر الجهة" onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
                                                <option value="مجلس الأمن">مجلس الأمن</option>
                                                <option value="الجمعية العامة">الجمعية العامة</option>
                                            </Select>
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>السنة</FormLabel>
                                            <Input type="number" placeholder="2024" onChange={(e) => setFormData({ ...formData, year: e.target.value })} />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>موضوع القرار</FormLabel>
                                            <Textarea placeholder="موضوع القرار..." onChange={(e) => setFormData({ ...formData, subject: e.target.value })} />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>رابط القرار</FormLabel>
                                            <Input type="url" placeholder="https://undocs.org/..." onChange={(e) => setFormData({ ...formData, link: e.target.value })} />
                                        </FormControl>
                                    </>
                                )}

                                <Button type="submit" colorScheme="brand" size="lg" leftIcon={<span>📩</span>} isLoading={loading}>
                                    إرسال المساهمة
                                </Button>
                            </VStack>
                        </form>
                    </CardBody>
                </Card>
            </VStack>
        </Box>
    )
}
