import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { Card, Title, Paragraph, Chip } from 'react-native-paper';
import { supabase } from '../lib/supabase';

export default function CasesScreen({ navigation }) {
    const [cases, setCases] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCases = async () => {
            const { data, error } = await supabase
                .from('cases')
                .select('*')
                .order('created_at', { ascending: false });

            if (data) setCases(data);
            setLoading(false);
        };

        fetchCases();
    }, []);

    if (loading) return <View style={styles.center}><ActivityIndicator size="large" color="#1A365D" /></View>;

    const renderItem = ({ item }) => (
        <Card style={styles.card} onPress={() => navigation.navigate('التفاصيل', { item, type: 'case' })}>
            <Card.Content>
                <View style={styles.headerRow}>
                    <Title style={styles.title}>{item.name}</Title>
                    <Chip style={styles.courtChip} textStyle={{ color: 'white' }}>{item.court}</Chip>
                </View>
                <Paragraph style={styles.date}>📅 {item.year}</Paragraph>
                <Paragraph numberOfLines={4} style={styles.summary}>{item.summary}</Paragraph>
                <Paragraph style={{ color: '#3182CE', marginTop: 8, fontSize: 12, fontWeight: 'bold' }}>اضغط لعرض التفاصيل ←</Paragraph>
            </Card.Content>
        </Card>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={cases}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f0f2f5' },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    list: { padding: 10 },
    card: { marginBottom: 12, elevation: 2 },
    headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
    title: { flex: 1, marginRight: 5, fontSize: 18 },
    courtChip: { backgroundColor: '#C53030', height: 32 },
    date: { color: '#666', marginVertical: 4 },
    summary: { color: '#4a5568', lineHeight: 20 }
});
