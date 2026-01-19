import React from 'react';
import { View, FlatList, StyleSheet, Linking, TouchableOpacity, Image } from 'react-native';
import { Card, Title, Paragraph, List } from 'react-native-paper';

export default function ResourcesScreen() {
    const resources = [
        { id: '1', title: 'الأمم المتحدة', desc: 'الموقع الرسمي للأمم المتحدة', url: 'https://www.un.org/ar/', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_the_United_Nations.svg/1200px-Flag_of_the_United_Nations.svg.png' },
        { id: '2', title: 'محكمة العدل الدولية', desc: 'الموقع الرسمي لـ ICJ', url: 'https://www.icj-cij.org/ar', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/ICJ_Logo.svg/1200px-ICJ_Logo.svg.png' },
        { id: '3', title: 'المحكمة الجنائية الدولية', desc: 'الموقع الرسمي لـ ICC', url: 'https://www.icc-cpi.int/', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/International_Criminal_Court_logo.svg/1200px-International_Criminal_Court_logo.svg.png' },
        { id: '4', title: 'المفوضية السامية لحقوق الإنسان', desc: 'OHCHR', url: 'https://www.ohchr.org/ar/home', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/OHCHR_Logo.svg/1200px-OHCHR_Logo.svg.png' },
        { id: '5', title: 'اللجنة الدولية للصليب الأحمر', desc: 'ICRC', url: 'https://www.icrc.org/ar', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Emblem_of_the_ICRC.svg/1200px-Emblem_of_the_ICRC.svg.png' },
    ];

    const openLink = (url) => Linking.openURL(url);

    const renderItem = ({ item }) => (
        <Card style={styles.card} onPress={() => openLink(item.url)}>
            <Card.Content style={styles.row}>
                {/* Simple Icon Placeholder if Image fails or for simplicity */}
                <List.Icon icon="web" color="#1A365D" style={{ margin: 0 }} />
                <View style={styles.textContainer}>
                    <Title style={styles.title}>{item.title}</Title>
                    <Paragraph style={styles.desc}>{item.desc}</Paragraph>
                </View>
                <List.Icon icon="open-in-new" color="#718096" />
            </Card.Content>
        </Card>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={resources}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f0f2f5' },
    list: { padding: 16 },
    card: { marginBottom: 12, elevation: 2 },
    row: { flexDirection: 'row', alignItems: 'center' },
    textContainer: { flex: 1, marginLeft: 10, marginRight: 10 },
    title: { fontSize: 16, fontWeight: 'bold' },
    desc: { fontSize: 13, color: '#666' }
});
