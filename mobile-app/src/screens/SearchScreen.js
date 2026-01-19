import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TextInput, ActivityIndicator, Linking } from 'react-native';
import { Card, Title, Paragraph, Chip, IconButton } from 'react-native-paper';
import { supabase } from '../lib/supabase';

export default function SearchScreen() {
    const [query, setQuery] = useState('');
    const [paramResult, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        if (!query.trim()) return;
        setLoading(true);

        try {
            // Parallel search across tables
            const treatPromise = supabase.from('treaties').select('*').ilike('name', `%${query}%`);
            const casePromise = supabase.from('cases').select('*').ilike('name', `%${query}%`);
            const resPromise = supabase.from('resolutions').select('*').ilike('number', `%${query}%`);

            const [treaties, cases, resolutions] = await Promise.all([treatPromise, casePromise, resPromise]);

            // Combine and tag results
            const combined = [
                ...(treaties.data || []).map(i => ({ ...i, category: 'اتفاقية' })),
                ...(cases.data || []).map(i => ({ ...i, category: 'قضية' })),
                ...(resolutions.data || []).map(i => ({ ...i, category: 'قرار' }))
            ];

            setResults(combined);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const openLink = (url) => { if (url) Linking.openURL(url); };

    const renderItem = ({ item }) => (
        <Card style={styles.card} onPress={() => openLink(item.link)}>
            <Card.Content>
                <View style={styles.row}>
                    <Chip style={styles.chip} textStyle={{ fontSize: 10, height: 16 }}>{item.category}</Chip>
                    <Title style={styles.title}>{item.name || item.number}</Title>
                </View>
                {/* Show date/year if available */}
                <Paragraph style={styles.meta}>
                    {item.date || item.year} {item.court ? `• ${item.court}` : ''}
                </Paragraph>
                <Paragraph numberOfLines={2} style={styles.desc}>{item.description || item.summary || item.subject}</Paragraph>
            </Card.Content>
        </Card>
    );

    return (
        <View style={styles.container}>
            <View style={styles.searchHeader}>
                <TextInput
                    style={styles.input}
                    placeholder="ابحث عن اتفاقية، قضية..."
                    value={query}
                    onChangeText={setQuery}
                    onSubmitEditing={handleSearch}
                    returnKeyType="search"
                />
                <IconButton icon="magnify" onPress={handleSearch} color="white" style={{ backgroundColor: '#1A365D' }} />
            </View>

            {loading ? (
                <View style={styles.center}><ActivityIndicator size="large" color="#1A365D" /></View>
            ) : (
                <FlatList
                    data={paramResult}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    contentContainerStyle={styles.list}
                    ListEmptyComponent={query && !loading ? <Paragraph style={{ textAlign: 'center', marginTop: 20 }}>لا توجد نتائج</Paragraph> : null}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f0f2f5' },
    searchHeader: { flexDirection: 'row', padding: 10, alignItems: 'center' },
    input: { flex: 1, backgroundColor: 'white', borderRadius: 8, padding: 10, marginRight: 5, elevation: 1 },
    list: { padding: 10 },
    card: { marginBottom: 10 },
    row: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
    chip: { marginRight: 8, height: 24 }, // Small chip
    title: { fontSize: 16, flex: 1 },
    meta: { fontSize: 12, color: '#666', marginBottom: 4 },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});
