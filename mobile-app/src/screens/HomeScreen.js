import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Card, Button, Title, Paragraph, Avatar, IconButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen({ navigation, isDarkMode }) {
    const categories = [
        { title: 'الاتفاقيات الدولية', icon: 'file-document-outline', route: 'الاتفاقيات', color: '#3182CE' },
        { title: 'السوابق القضائية', icon: 'gavel', route: 'القضايا', color: '#D53F8C' },
        { title: 'القرارات الدولية', icon: 'certificate', route: 'القرارات', color: '#38A169' },
        { title: 'المصادر والمراجع', icon: 'web', route: 'المصادر', color: '#805AD5' },
        { title: 'المفضلة', icon: 'star', route: 'المفضلة', color: '#FFD700' },
        { title: 'المقارنة', icon: 'compare', route: 'المقارنة', color: '#DD6B20' },
    ];

    const bgColor = isDarkMode ? '#1a1a2e' : '#F7FAFC';
    const cardBg = isDarkMode ? '#16213e' : 'white';
    const textColor = isDarkMode ? '#eee' : '#1A365D';
    const subtitleColor = isDarkMode ? '#aaa' : '#718096';

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: bgColor }]}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <Title style={[styles.appTitle, { color: textColor }]}>المرصد القانوني الدولي</Title>
                    <Paragraph style={[styles.subtitle, { color: subtitleColor }]}>مرجعك الأول في القانون الدولي</Paragraph>
                </View>

                {/* Search Bar Button */}
                <TouchableOpacity
                    style={[styles.searchButton, { backgroundColor: cardBg }]}
                    onPress={() => navigation.navigate('البحث')}
                >
                    <IconButton icon="magnify" iconColor={subtitleColor} size={20} />
                    <Text style={[styles.searchText, { color: subtitleColor }]}>بحث عن اتفاقية أو قضية...</Text>
                </TouchableOpacity>

                {/* Categories Grid */}
                <View style={styles.grid}>
                    {categories.map((cat, index) => (
                        <Card key={index} style={[styles.card, { backgroundColor: cardBg }]} onPress={() => navigation.navigate(cat.route)}>
                            <Card.Content style={styles.cardContent}>
                                <Avatar.Icon size={48} icon={cat.icon} style={{ backgroundColor: cat.color }} />
                                <Title style={[styles.cardTitle, { color: textColor }]}>{cat.title}</Title>
                            </Card.Content>
                        </Card>
                    ))}
                </View>

                {/* Featured Section */}
                <Card style={[styles.featuredCard, { backgroundColor: cardBg }]}>
                    <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' }} />
                    <Card.Content>
                        <Title style={{ color: textColor }}>فلسطين في القانون الدولي</Title>
                        <Paragraph style={{ color: subtitleColor }}>استعرض أهم القرارات والاتفاقيات المتعلقة بالقضية الفلسطينية.</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button onPress={() => navigation.navigate('الاتفاقيات')}>تصفح الآن</Button>
                    </Card.Actions>
                </Card>

                {/* Quick Actions */}
                <View style={styles.quickActions}>
                    <Button mode="text" icon="note-text" onPress={() => navigation.navigate('الملاحظات')} textColor={textColor}>
                        ملاحظاتي
                    </Button>
                    <Button mode="text" icon="information" onPress={() => navigation.navigate('النبذة')} textColor={textColor}>
                        نبذة عن التطبيق
                    </Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    scrollContent: { padding: 16 },
    header: { marginBottom: 20, alignItems: 'center' },
    appTitle: { fontSize: 24, fontWeight: 'bold' },
    subtitle: { fontSize: 14 },

    searchButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        padding: 5,
        marginBottom: 20,
        elevation: 2,
        height: 50,
    },
    searchText: { fontSize: 16 },

    grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 20 },
    card: { width: '48%', marginBottom: 16, elevation: 3 },
    cardContent: { alignItems: 'center', paddingVertical: 10 },
    cardTitle: { marginTop: 10, fontSize: 13, textAlign: 'center' },
    featuredCard: { elevation: 4, borderRadius: 12 },
    quickActions: { flexDirection: 'row', justifyContent: 'center', marginTop: 15 }
});
