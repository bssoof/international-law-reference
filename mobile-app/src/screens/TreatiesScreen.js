import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { Card, Title, Paragraph, Chip } from 'react-native-paper';
import { supabase } from '../lib/supabase';

export default function TreatiesScreen({ navigation }) {
    const [treaties, setTreaties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTreaties = async () => {
            const { data, error } = await supabase
                .from('treaties')
                .select('*')
                .order('created_at', { ascending: false });

            if (data) setTreaties(data);
            if (error) console.error(error);
            setLoading(false);
        };

        fetchTreaties();
    }, []);

    if (loading) return <View style={styles.center}><ActivityIndicator size="large" color="#1A365D" /></View>;

    const renderItem = ({ item }) => (
        <Card style={styles.card} onPress={() => navigation.navigate('التفاصيل', { item, type: 'treaty' })}>
            <Card.Content>
                <Title>{item.name}</Title>
                <Paragraph style={styles.date}>📅 {item.date}</Paragraph>
                <View style={styles.row}>
                    <Chip icon="earth" style={styles.chip}>{item.states} دولة</Chip>
                    <Chip icon="tag" style={styles.chip}>{item.topic}</Chip>
                </View>
                <Paragraph numberOfLines={3} style={styles.desc}>{item.description}</Paragraph>
                <Paragraph style={{ color: '#3182CE', marginTop: 8, fontSize: 12, fontWeight: 'bold' }}>اضغط لعرض التفاصيل ←</Paragraph>
            </Card.Content>
        </Card>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={treaties}
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
    card: { marginBottom: 10, elevation: 2 },
    date: { color: '#666', marginBottom: 5 },
    row: { flexDirection: 'row', flexWrap: 'wrap', marginVertical: 5 },
    chip: { marginRight: 5, backgroundColor: '#e2e8f0' },
    desc: { marginTop: 5, color: '#4a5568' }
});
