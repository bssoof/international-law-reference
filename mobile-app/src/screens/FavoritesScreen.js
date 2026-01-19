import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import { Card, Title, Paragraph, Chip, IconButton, Avatar, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FavoritesScreen({ navigation, isDarkMode }) {
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadFavorites();
    }, []);

    const loadFavorites = async () => {
        try {
            const saved = await AsyncStorage.getItem('favorites');
            if (saved) setFavorites(JSON.parse(saved));
        } catch (e) {
            console.log('Error loading favorites');
        }
        setLoading(false);
    };

    const removeFavorite = async (id, type) => {
        Alert.alert('إزالة من المفضلة', 'هل أنت متأكد؟', [
            { text: 'إلغاء', style: 'cancel' },
            {
                text: 'إزالة', style: 'destructive', onPress: async () => {
                    const updated = favorites.filter(f => !(f.id === id && f.type === type));
                    setFavorites(updated);
                    await AsyncStorage.setItem('favorites', JSON.stringify(updated));
                }
            }
        ]);
    };

    const getIcon = (type) => {
        if (type === 'treaty') return 'file-document';
        if (type === 'case') return 'gavel';
        if (type === 'resolution') return 'certificate';
        return 'star';
    };

    const getColor = (type) => {
        if (type === 'treaty') return '#3182CE';
        if (type === 'case') return '#D53F8C';
        if (type === 'resolution') return '#38A169';
        return '#1A365D';
    };

    const bgColor = isDarkMode ? '#1a1a2e' : '#f0f2f5';
    const cardBg = isDarkMode ? '#16213e' : 'white';
    const textColor = isDarkMode ? '#eee' : '#1A365D';

    const renderItem = ({ item }) => (
        <Card style={[styles.card, { backgroundColor: cardBg }]} onPress={() => navigation.navigate('التفاصيل', { item, type: item.type })}>
            <Card.Content style={styles.row}>
                <Avatar.Icon size={45} icon={getIcon(item.type)} style={{ backgroundColor: getColor(item.type) }} />
                <View style={styles.textContainer}>
                    <Title style={[styles.title, { color: textColor }]}>{item.name || item.number}</Title>
                    <Paragraph style={{ color: isDarkMode ? '#aaa' : '#666' }} numberOfLines={1}>
                        {item.description || item.summary || item.subject}
                    </Paragraph>
                </View>
                <IconButton icon="delete" iconColor="#C53030" onPress={() => removeFavorite(item.id, item.type)} />
            </Card.Content>
        </Card>
    );

    return (
        <View style={[styles.container, { backgroundColor: bgColor }]}>
            <FlatList
                data={favorites}
                keyExtractor={(item, index) => `${item.type}-${item.id}-${index}`}
                renderItem={renderItem}
                contentContainerStyle={styles.list}
                ListEmptyComponent={
                    <View style={styles.empty}>
                        <Avatar.Icon size={70} icon="star-outline" style={{ backgroundColor: '#E2E8F0' }} />
                        <Paragraph style={{ marginTop: 15, color: '#718096', fontSize: 16 }}>لا توجد عناصر في المفضلة</Paragraph>
                        <Paragraph style={{ color: '#718096', marginTop: 5 }}>اضغط ⭐ في صفحة التفاصيل لإضافة عنصر</Paragraph>
                    </View>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    list: { padding: 10 },
    card: { marginBottom: 10, elevation: 2 },
    row: { flexDirection: 'row', alignItems: 'center' },
    textContainer: { flex: 1, marginLeft: 12 },
    title: { fontSize: 15 },
    empty: { alignItems: 'center', marginTop: 80 }
});
