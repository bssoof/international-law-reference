import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { Card, Title, Paragraph, IconButton } from 'react-native-paper';
import { supabase } from '../lib/supabase';

export default function ResolutionsScreen({ navigation }) {
    const [resolutions, setResolutions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchResolutions = async () => {
            const { data, error } = await supabase
                .from('resolutions')
                .select('*')
                .order('created_at', { ascending: false });

            if (data) setResolutions(data);
            setLoading(false);
        };

        fetchResolutions();
    }, []);

    if (loading) return <View style={styles.center}><ActivityIndicator size="large" color="#1A365D" /></View>;

    const renderItem = ({ item }) => (
        <Card style={styles.card} onPress={() => navigation.navigate('التفاصيل', { item, type: 'resolution' })}>
            <Card.Title
                title={item.number}
                titleStyle={styles.resNumber}
                subtitle={`${item.type} • ${item.year}`}
                left={(props) => <IconButton {...props} icon="certificate" iconColor="#38A169" />}
                right={(props) => <IconButton {...props} icon="chevron-right" />}
            />
            <Card.Content>
                <Paragraph style={styles.subject}>{item.subject}</Paragraph>
                {item.title && <Paragraph style={styles.fullTitle} numberOfLines={2}>"{item.title}"</Paragraph>}
                <Paragraph style={{ color: '#3182CE', marginTop: 8, fontSize: 12, fontWeight: 'bold' }}>اضغط لعرض التفاصيل ←</Paragraph>
            </Card.Content>
        </Card>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={resolutions}
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
    resNumber: { color: '#1A365D', fontWeight: 'bold' },
    subject: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
    fullTitle: { fontStyle: 'italic', color: '#666' }
});
