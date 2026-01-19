import React, { useState } from 'react'
import {
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton,
    Button, FormControl, FormLabel, Input, VStack, Text, useToast, Tabs, TabList,
    TabPanels, Tab, TabPanel, Avatar, Menu, MenuButton, MenuList, MenuItem, HStack
} from '@chakra-ui/react'
import { FiUser, FiLogOut, FiStar, FiSettings } from 'react-icons/fi'

// Simple placeholder - auth is disabled for now
const useAuth = () => ({
    user: null,
    favorites: [],
    signIn: async () => ({ error: { message: 'غير متاح حالياً' } }),
    signUp: async () => ({ error: { message: 'غير متاح حالياً' } }),
    signOut: async () => { },
})

export function AuthModal({ isOpen, onClose }) {
    const [isLogin, setIsLogin] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(false)
    const { signIn, signUp } = useAuth()
    const toast = useToast()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            if (isLogin) {
                const { error } = await signIn(email, password)
                if (error) throw error
                toast({ title: 'مرحباً بعودتك!', status: 'success', duration: 3000 })
                onClose()
            } else {
                const { error } = await signUp(email, password, name)
                if (error) throw error
                toast({
                    title: 'تم إنشاء الحساب!',
                    description: 'تحقق من بريدك الإلكتروني لتأكيد الحساب',
                    status: 'success',
                    duration: 5000
                })
                onClose()
            }
        } catch (error) {
            toast({ title: 'خطأ', description: error.message, status: 'error', duration: 5000 })
        }

        setLoading(false)
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay backdropFilter="blur(4px)" />
            <ModalContent mx={4}>
                <ModalHeader textAlign="center">
                    {isLogin ? 'تسجيل الدخول' : 'إنشاء حساب جديد'}
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <Tabs isFitted onChange={(i) => setIsLogin(i === 0)}>
                        <TabList mb={4}>
                            <Tab>دخول</Tab>
                            <Tab>تسجيل</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel p={0}>
                                <form onSubmit={handleSubmit}>
                                    <VStack spacing={4}>
                                        <FormControl isRequired>
                                            <FormLabel>البريد الإلكتروني</FormLabel>
                                            <Input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="example@email.com"
                                            />
                                        </FormControl>
                                        <FormControl isRequired>
                                            <FormLabel>كلمة المرور</FormLabel>
                                            <Input
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="••••••••"
                                            />
                                        </FormControl>
                                        <Button
                                            type="submit"
                                            colorScheme="brand"
                                            width="100%"
                                            isLoading={loading}
                                        >
                                            دخول
                                        </Button>
                                    </VStack>
                                </form>
                            </TabPanel>
                            <TabPanel p={0}>
                                <form onSubmit={handleSubmit}>
                                    <VStack spacing={4}>
                                        <FormControl isRequired>
                                            <FormLabel>الاسم</FormLabel>
                                            <Input
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="اسمك الكامل"
                                            />
                                        </FormControl>
                                        <FormControl isRequired>
                                            <FormLabel>البريد الإلكتروني</FormLabel>
                                            <Input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="example@email.com"
                                            />
                                        </FormControl>
                                        <FormControl isRequired>
                                            <FormLabel>كلمة المرور</FormLabel>
                                            <Input
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="••••••••"
                                                minLength={6}
                                            />
                                        </FormControl>
                                        <Button
                                            type="submit"
                                            colorScheme="green"
                                            width="100%"
                                            isLoading={loading}
                                        >
                                            إنشاء حساب
                                        </Button>
                                    </VStack>
                                </form>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export function UserMenu() {
    const { user, signOut, favorites } = useAuth()
    const [isAuthOpen, setIsAuthOpen] = useState(false)

    if (!user) {
        return (
            <>
                <Button
                    size="sm"
                    colorScheme="brand"
                    leftIcon={<FiUser />}
                    onClick={() => setIsAuthOpen(true)}
                >
                    دخول
                </Button>
                <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
            </>
        )
    }

    return (
        <Menu>
            <MenuButton as={Button} variant="ghost" p={0}>
                <HStack spacing={2}>
                    <Avatar
                        size="sm"
                        name={user.user_metadata?.full_name || user.email}
                        bg="brand.500"
                    />
                    <Text fontSize="sm" display={{ base: 'none', md: 'block' }}>
                        {user.user_metadata?.full_name || 'مستخدم'}
                    </Text>
                </HStack>
            </MenuButton>
            <MenuList>
                <MenuItem icon={<FiStar />}>
                    المفضلة ({favorites.length})
                </MenuItem>
                <MenuItem icon={<FiSettings />}>
                    الإعدادات
                </MenuItem>
                <MenuItem icon={<FiLogOut />} onClick={signOut} color="red.500">
                    تسجيل الخروج
                </MenuItem>
            </MenuList>
        </Menu>
    )
}
