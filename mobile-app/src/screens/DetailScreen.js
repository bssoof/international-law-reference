import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Linking, Share, Alert } from 'react-native';
import { Card, Title, Paragraph, Button, Chip, Divider, Avatar, IconButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DetailScreen({ route, navigation, isDarkMode }) {
    const { item, type } = route.params || {};
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        checkIfFavorite();
    }, []);

    const checkIfFavorite = async () => {
        try {
            const favorites = await AsyncStorage.getItem('favorites');
            if (favorites) {
                const favList = JSON.parse(favorites);
                const exists = favList.some(f => f.id === item?.id && f.type === type);
                setIsFavorite(exists);
            }
        } catch (e) {
            console.log('Error checking favorites');
        }
    };

    const toggleFavorite = async () => {
        try {
            const favorites = await AsyncStorage.getItem('favorites');
            let favList = favorites ? JSON.parse(favorites) : [];

            if (isFavorite) {
                // Remove from favorites
                favList = favList.filter(f => !(f.id === item.id && f.type === type));
                setIsFavorite(false);
                Alert.alert('تمت الإزالة', 'تم إزالة العنصر من المفضلة');
            } else {
                // Add to favorites
                favList.push({ ...item, type, savedAt: new Date().toISOString() });
                setIsFavorite(true);
                Alert.alert('تمت الإضافة', 'تم إضافة العنصر للمفضلة ⭐');
            }

            await AsyncStorage.setItem('favorites', JSON.stringify(favList));
        } catch (e) {
            console.log('Error toggling favorite');
        }
    };

    const shareItem = async () => {
        try {
            const title = item.name || item.number;
            const message = `📜 ${title}\n\n${item.description || item.summary || item.subject}\n\n🔗 ${item.link || 'المرصد القانوني الدولي'}`;

            await Share.share({
                message,
                title: 'مشاركة من المرصد القانوني الدولي'
            });
        } catch (e) {
            console.log('Error sharing');
        }
    };

    if (!item) {
        return (
            <View style={styles.center}>
                <Paragraph>لا توجد بيانات للعرض</Paragraph>
            </View>
        );
    }

    const openLink = () => {
        if (item.link) Linking.openURL(item.link);
    };

    const bgColor = isDarkMode ? '#1a1a2e' : '#f0f2f5';
    const cardBg = isDarkMode ? '#16213e' : 'white';
    const textColor = isDarkMode ? '#eee' : '#1A365D';

    // Treaty Detail
    if (type === 'treaty') {
        return (
            <ScrollView style={[styles.container, { backgroundColor: bgColor }]}>
                <Card style={[styles.card, { backgroundColor: cardBg }]}>
                    {/* Action Buttons */}
                    <View style={styles.actionRow}>
                        <IconButton icon={isFavorite ? "star" : "star-outline"} iconColor={isFavorite ? "#FFD700" : "#888"} size={28} onPress={toggleFavorite} />
                        <IconButton icon="share-variant" iconColor="#3182CE" size={28} onPress={shareItem} />
                    </View>

                    <Card.Content>
                        <View style={styles.headerRow}>
                            <Avatar.Icon size={50} icon="file-document" style={{ backgroundColor: '#3182CE' }} />
                            <Title style={[styles.title, { color: textColor }]}>{item.name}</Title>
                        </View>

                        <Divider style={styles.divider} />

                        <View style={styles.infoRow}>
                            <Chip icon="calendar" style={styles.chip}>{item.date}</Chip>
                            <Chip icon="earth" style={styles.chip}>{item.states} دولة</Chip>
                            <Chip icon="tag" style={styles.chip}>{item.topic}</Chip>
                        </View>

                        <Title style={[styles.sectionTitle, { color: textColor }]}>الوصف</Title>
                        <Paragraph style={[styles.description, { color: isDarkMode ? '#ccc' : '#4a5568' }]}>{item.description}</Paragraph>

                        {item.link && (
                            <Button mode="contained" icon="open-in-new" onPress={openLink} style={styles.button}>
                                عرض النص الكامل
                            </Button>
                        )}
                    </Card.Content>
                </Card>
            </ScrollView>
        );
    }

    // Case Detail
    if (type === 'case') {
        return (
            <ScrollView style={[styles.container, { backgroundColor: bgColor }]}>
                <Card style={[styles.card, { backgroundColor: cardBg }]}>
                    <View style={styles.actionRow}>
                        <IconButton icon={isFavorite ? "star" : "star-outline"} iconColor={isFavorite ? "#FFD700" : "#888"} size={28} onPress={toggleFavorite} />
                        <IconButton icon="share-variant" iconColor="#3182CE" size={28} onPress={shareItem} />
                    </View>

                    <Card.Content>
                        <View style={styles.headerRow}>
                            <Avatar.Icon size={50} icon="gavel" style={{ backgroundColor: '#D53F8C' }} />
                            <Title style={[styles.title, { color: textColor }]}>{item.name}</Title>
                        </View>

                        <Divider style={styles.divider} />

                        <View style={styles.infoRow}>
                            <Chip icon="domain" style={[styles.chip, { backgroundColor: '#C53030' }]} textStyle={{ color: 'white' }}>{item.court}</Chip>
                            <Chip icon="calendar" style={styles.chip}>{item.year}</Chip>
                        </View>

                        <Title style={[styles.sectionTitle, { color: textColor }]}>ملخص القضية</Title>
                        <Paragraph style={[styles.description, { color: isDarkMode ? '#ccc' : '#4a5568' }]}>{item.summary}</Paragraph>

                        {item.link && (
                            <Button mode="contained" icon="open-in-new" onPress={openLink} style={styles.button}>
                                عرض الحكم الكامل
                            </Button>
                        )}
                    </Card.Content>
                </Card>
            </ScrollView>
        );
    }

    // Resolution Detail
    if (type === 'resolution') {
        return (
            <ScrollView style={[styles.container, { backgroundColor: bgColor }]}>
                <Card style={[styles.card, { backgroundColor: cardBg }]}>
                    <View style={styles.actionRow}>
                        <IconButton icon={isFavorite ? "star" : "star-outline"} iconColor={isFavorite ? "#FFD700" : "#888"} size={28} onPress={toggleFavorite} />
                        <IconButton icon="share-variant" iconColor="#3182CE" size={28} onPress={shareItem} />
                    </View>

                    <Card.Content>
                        <View style={styles.headerRow}>
                            <Avatar.Icon size={50} icon="certificate" style={{ backgroundColor: '#38A169' }} />
                            <View style={{ flex: 1 }}>
                                <Title style={[styles.title, { color: textColor }]}>{item.number}</Title>
                                <Paragraph style={{ color: '#666' }}>{item.type} • {item.year}</Paragraph>
                            </View>
                        </View>

                        <Divider style={styles.divider} />

                        <Title style={[styles.sectionTitle, { color: textColor }]}>الموضوع</Title>
                        <Paragraph style={[styles.subject, { color: isDarkMode ? '#ccc' : '#333' }]}>{item.subject}</Paragraph>

                        {item.title && (
                            <>
                                <Title style={[styles.sectionTitle, { color: textColor }]}>العنوان الكامل</Title>
                                <Paragraph style={[styles.fullTitle, { color: isDarkMode ? '#aaa' : '#666' }]}>"{item.title}"</Paragraph>
                            </>
                        )}

                        {item.link && (
                            <Button mode="contained" icon="open-in-new" onPress={openLink} style={styles.button}>
                                عرض القرار الكامل
                            </Button>
                        )}
                    </Card.Content>
                </Card>
            </ScrollView>
        );
    }

    return null;
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10 },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    card: { elevation: 3, borderRadius: 12 },
    actionRow: { flexDirection: 'row', justifyContent: 'flex-end', paddingRight: 5, paddingTop: 5 },
    headerRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
    title: { flex: 1, marginLeft: 15, fontSize: 18 },
    divider: { marginVertical: 15 },
    infoRow: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 15 },
    chip: { marginRight: 8, marginBottom: 8 },
    sectionTitle: { fontSize: 16, marginBottom: 8 },
    description: { lineHeight: 24, marginBottom: 15 },
    subject: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
    fullTitle: { fontStyle: 'italic', marginBottom: 15 },
    button: { marginTop: 10, backgroundColor: '#1A365D' }
});
