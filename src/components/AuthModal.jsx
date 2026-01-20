import { useState } from 'react'
import {
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton,
    Tabs, TabList, TabPanels, Tab, TabPanel,
    FormControl, FormLabel, Input, Button, VStack, useToast, Text, Alert, AlertIcon
} from '@chakra-ui/react'
import { useAuth } from '../hooks/useAuth'

export default function AuthModal({ isOpen, onClose }) {
    const { signIn, signUp, isSupabaseReady } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const toast = useToast()

    const handleSubmit = async (isSignUp) => {
        setIsLoading(true)
        try {
            const { error } = isSignUp
                ? await signUp(email, password)
                : await signIn(email, password)

            if (error) throw error

            toast({
                title: isSignUp ? 'تم إنشاء الحساب بنجاح!' : 'تم تسجيل الدخول بنجاح',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
            onClose()
        } catch (error) {
            toast({
                title: 'خطأ',
                description: error.message,
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>تسجيل الدخول / اشتراك</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    {!isSupabaseReady && (
                        <Alert status="warning" mb={4} borderRadius="md" fontSize="sm">
                            <AlertIcon />
                            يجب تفعيل Supabase لتسجيل الدخول.
                        </Alert>
                    )}

                    <Tabs isFitted variant="enclosed" colorScheme="brand">
                        <TabList mb="1em">
                            <Tab>دخول</Tab>
                            <Tab>حساب جديد</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <AuthForm
                                    email={email} setEmail={setEmail}
                                    password={password} setPassword={setPassword}
                                    onSubmit={() => handleSubmit(false)}
                                    isLoading={isLoading}
                                    label="تسجيل الدخول"
                                />
                            </TabPanel>
                            <TabPanel>
                                <AuthForm
                                    email={email} setEmail={setEmail}
                                    password={password} setPassword={setPassword}
                                    onSubmit={() => handleSubmit(true)}
                                    isLoading={isLoading}
                                    label="إنشاء حساب"
                                />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

function AuthForm({ email, setEmail, password, setPassword, onSubmit, isLoading, label }) {
    return (
        <VStack spacing={4}>
            <FormControl>
                <FormLabel>البريد الإلكتروني</FormLabel>
                <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@mail.com"
                />
            </FormControl>
            <FormControl>
                <FormLabel>كلمة المرور</FormLabel>
                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="******"
                />
            </FormControl>
            <Button
                colorScheme="brand"
                width="full"
                onClick={onSubmit}
                isLoading={isLoading}
            >
                {label}
            </Button>
        </VStack>
    )
}
