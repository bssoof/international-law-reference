import React from 'react';
import { View, StyleSheet, ScrollView, Linking } from 'react-native';
import { Card, Title, Paragraph, Button, Avatar, Divider } from 'react-native-paper';

export default function AboutScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Avatar.Icon size={80} icon="scale-balance" style={{ backgroundColor: '#1A365D' }} />
                <Title style={styles.title}>المرصد القانوني الدولي</Title>
                <Paragraph style={styles.version}>الإصدار 1.0.0</Paragraph>
            </View>

            <Card style={styles.card}>
                <Card.Content>
                    <Title style={styles.sectionTitle}>نبذة عن التطبيق</Title>
                    <Paragraph style={styles.text}>
                        المرصد القانوني الدولي هو منصة متخصصة في توفير مرجع شامل للقانون الدولي،
                        تشمل الاتفاقيات الدولية، السوابق القضائية، وقرارات الأمم المتحدة.
                    </Paragraph>
                    <Paragraph style={styles.text}>
                        يهدف التطبيق إلى تسهيل الوصول للمعلومات القانونية الدولية للطلاب والباحثين
                        والمهتمين بالشؤون القانونية والدولية.
                    </Paragraph>
                </Card.Content>
            </Card>

            <Card style={styles.card}>
                <Card.Content>
                    <Title style={styles.sectionTitle}>المميزات</Title>
                    <View style={styles.feature}>
                        <Avatar.Icon size={40} icon="file-document" style={{ backgroundColor: '#3182CE' }} />
                        <View style={styles.featureText}>
                            <Paragraph style={styles.featureTitle}>الاتفاقيات الدولية</Paragraph>
                            <Paragraph>قاعدة بيانات شاملة للمعاهدات والاتفاقيات</Paragraph>
                        </View>
                    </View>
                    <Divider style={{ marginVertical: 10 }} />
                    <View style={styles.feature}>
                        <Avatar.Icon size={40} icon="gavel" style={{ backgroundColor: '#D53F8C' }} />
                        <View style={styles.featureText}>
                            <Paragraph style={styles.featureTitle}>السوابق القضائية</Paragraph>
                            <Paragraph>أحكام المحاكم الدولية الهامة</Paragraph>
                        </View>
                    </View>
                    <Divider style={{ marginVertical: 10 }} />
                    <View style={styles.feature}>
                        <Avatar.Icon size={40} icon="certificate" style={{ backgroundColor: '#38A169' }} />
                        <View style={styles.featureText}>
                            <Paragraph style={styles.featureTitle}>القرارات الدولية</Paragraph>
                            <Paragraph>قرارات مجلس الأمن والجمعية العامة</Paragraph>
                        </View>
                    </View>
                </Card.Content>
            </Card>

            <Card style={styles.card}>
                <Card.Content>
                    <Title style={styles.sectionTitle}>تواصل معنا</Title>
                    <Button icon="email" mode="outlined" onPress={() => Linking.openURL('mailto:basil1222038@gmail.com')} style={{ marginBottom: 10 }}>
                        البريد الإلكتروني
                    </Button>
                    <Button icon="web" mode="outlined" onPress={() => Linking.openURL('https://bssoof.github.io/international-law-reference/')}>
                        الموقع الإلكتروني
                    </Button>
                </Card.Content>
            </Card>

            <Paragraph style={styles.footer}>© 2026 المرصد القانوني الدولي. جميع الحقوق محفوظة.</Paragraph>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f0f2f5' },
    header: { alignItems: 'center', padding: 30, backgroundColor: '#fff', marginBottom: 10 },
    title: { marginTop: 10, color: '#1A365D', fontSize: 22 },
    version: { color: '#718096' },
    card: { margin: 10, elevation: 2 },
    sectionTitle: { fontSize: 18, color: '#1A365D', marginBottom: 10 },
    text: { lineHeight: 22, color: '#4a5568', marginBottom: 10 },
    feature: { flexDirection: 'row', alignItems: 'center' },
    featureText: { marginLeft: 15, flex: 1 },
    featureTitle: { fontWeight: 'bold', color: '#1A365D' },
    footer: { textAlign: 'center', color: '#718096', padding: 20 }
});
