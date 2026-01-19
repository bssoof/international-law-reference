import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Modal, TouchableOpacity, FlatList } from 'react-native';
import { Card, Title, Paragraph, Button, Text, ActivityIndicator } from 'react-native-paper';
import { supabase } from '../lib/supabase';

export default function CompareScreen() {
    const [treaties, setTreaties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [treaty1, setTreaty1] = useState(null);
    const [treaty2, setTreaty2] = useState(null);
    const [visible, setVisible] = useState(false);
    const [selectingFor, setSelectingFor] = useState(1);

    useEffect(() => {
        fetchTreaties();
    }, []);

    const fetchTreaties = async () => {
        const { data } = await supabase.from('treaties').select('id, name, date, topic, states, description');
        if (data) setTreaties(data);
        setLoading(false);
    };

    const openSelection = (num) => {
        setSelectingFor(num);
        setVisible(true);
    };

    const selectTreaty = (item) => {
        if (selectingFor === 1) setTreaty1(item);
        else setTreaty2(item);
        setVisible(false);
    };

    const ComparisonRow = ({ label, val1, val2 }) => (
        <View style={styles.row}>
            <View style={styles.labelCol}><Text style={styles.labelText}>{label}</Text></View>
            <View style={styles.valCol}><Text style={styles.valText}>{val1 || '-'}</Text></View>
            <View style={styles.valCol}><Text style={styles.valText}>{val2 || '-'}</Text></View>
        </View>
    );

    return (
        <ScrollView style={styles.container}>
            <Title style={styles.header}>مقارنة الاتفاقيات</Title>
            <Paragraph style={styles.subHeader}>اختر اتفاقيتين للمقارنة بينهما</Paragraph>

            <View style={styles.selectors}>
                <Button mode="outlined" onPress={() => openSelection(1)} style={styles.btn}>
                    {treaty1 ? treaty1.name.substring(0, 15) + '...' : 'الأولى'}
                </Button>
                <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>VS</Text>
                <Button mode="outlined" onPress={() => openSelection(2)} style={styles.btn}>
                    {treaty2 ? treaty2.name.substring(0, 15) + '...' : 'الثانية'}
                </Button>
            </View>

            {(treaty1 || treaty2) && (
                <Card style={styles.resultCard}>
                    <Card.Content>
                        <ComparisonRow label="التاريخ" val1={treaty1?.date} val2={treaty2?.date} />
                        <View style={styles.divider} />
                        <ComparisonRow label="الموضوع" val1={treaty1?.topic} val2={treaty2?.topic} />
                        <View style={styles.divider} />
                        <ComparisonRow label="الدول" val1={treaty1 ? `${treaty1.states}` : ''} val2={treaty2 ? `${treaty2.states}` : ''} />
                    </Card.Content>
                </Card>
            )}

            <Modal visible={visible} animationType="slide" transparent={true}>
                <View style={styles.modalView}>
                    <View style={styles.modalContent}>
                        <Title>اختر الاتفاقية</Title>
                        {loading ? <ActivityIndicator /> : (
                            <FlatList
                                data={treaties}
                                keyExtractor={item => item.id.toString()}
                                renderItem={({ item }) => (
                                    <TouchableOpacity style={styles.item} onPress={() => selectTreaty(item)}>
                                        <Text>{item.name}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                        )}
                        <Button onPress={() => setVisible(false)}>إغلاق</Button>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#f0f2f5' },
    header: { textAlign: 'center', color: '#1A365D' },
    subHeader: { textAlign: 'center', marginBottom: 20, color: '#666' },
    selectors: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
    btn: { flex: 1, marginHorizontal: 5 },
    resultCard: { elevation: 2 },
    row: { flexDirection: 'row', paddingVertical: 8 },
    labelCol: { flex: 1, borderRightWidth: 1, borderRightColor: '#eee', paddingRight: 5 },
    valCol: { flex: 1, paddingLeft: 5 },
    labelText: { fontWeight: 'bold', fontSize: 12 },
    valText: { fontSize: 12 },
    divider: { height: 1, backgroundColor: '#eee' },
    modalView: { flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
    modalContent: { backgroundColor: 'white', margin: 20, padding: 20, borderRadius: 10, maxHeight: '80%' },
    item: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#eee' }
});
