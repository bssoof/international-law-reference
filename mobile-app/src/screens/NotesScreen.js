import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TextInput, Alert } from 'react-native';
import { Card, Title, Paragraph, Button, IconButton, Avatar, FAB } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NotesScreen() {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');
    const [showInput, setShowInput] = useState(false);

    useEffect(() => {
        loadNotes();
    }, []);

    const loadNotes = async () => {
        try {
            const saved = await AsyncStorage.getItem('user_notes');
            if (saved) setNotes(JSON.parse(saved));
        } catch (e) {
            console.log('Error loading notes');
        }
    };

    const saveNotes = async (updatedNotes) => {
        try {
            await AsyncStorage.setItem('user_notes', JSON.stringify(updatedNotes));
        } catch (e) {
            console.log('Error saving notes');
        }
    };

    const addNote = () => {
        if (!newNote.trim()) return;
        const note = {
            id: Date.now().toString(),
            text: newNote,
            date: new Date().toLocaleDateString('ar-EG')
        };
        const updated = [note, ...notes];
        setNotes(updated);
        saveNotes(updated);
        setNewNote('');
        setShowInput(false);
    };

    const deleteNote = (id) => {
        Alert.alert('حذف الملاحظة', 'هل أنت متأكد؟', [
            { text: 'إلغاء', style: 'cancel' },
            {
                text: 'حذف', style: 'destructive', onPress: () => {
                    const updated = notes.filter(n => n.id !== id);
                    setNotes(updated);
                    saveNotes(updated);
                }
            }
        ]);
    };

    const renderItem = ({ item }) => (
        <Card style={styles.card}>
            <Card.Content>
                <Paragraph style={styles.noteText}>{item.text}</Paragraph>
                <Paragraph style={styles.dateText}>{item.date}</Paragraph>
            </Card.Content>
            <Card.Actions>
                <IconButton icon="delete" color="#C53030" onPress={() => deleteNote(item.id)} />
            </Card.Actions>
        </Card>
    );

    return (
        <View style={styles.container}>
            <Title style={styles.header}>ملاحظاتي</Title>
            <Paragraph style={styles.subHeader}>سجّل ملاحظاتك حول القضايا والاتفاقيات</Paragraph>

            {showInput && (
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="اكتب ملاحظتك هنا..."
                        value={newNote}
                        onChangeText={setNewNote}
                        multiline
                    />
                    <View style={styles.inputActions}>
                        <Button mode="contained" onPress={addNote}>حفظ</Button>
                        <Button onPress={() => setShowInput(false)}>إلغاء</Button>
                    </View>
                </View>
            )}

            <FlatList
                data={notes}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.list}
                ListEmptyComponent={
                    <View style={styles.empty}>
                        <Avatar.Icon size={60} icon="note-text-outline" style={{ backgroundColor: '#E2E8F0' }} />
                        <Paragraph style={{ marginTop: 10, color: '#718096' }}>لا توجد ملاحظات بعد</Paragraph>
                    </View>
                }
            />

            <FAB
                icon="plus"
                style={styles.fab}
                onPress={() => setShowInput(true)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f0f2f5' },
    header: { textAlign: 'center', color: '#1A365D', marginTop: 20 },
    subHeader: { textAlign: 'center', color: '#718096', marginBottom: 10 },
    list: { padding: 10 },
    card: { marginBottom: 10, elevation: 2 },
    noteText: { fontSize: 16, lineHeight: 24 },
    dateText: { fontSize: 12, color: '#718096', marginTop: 5 },
    inputContainer: { padding: 15, backgroundColor: 'white', margin: 10, borderRadius: 10, elevation: 3 },
    input: { borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 8, padding: 10, minHeight: 80, textAlignVertical: 'top', marginBottom: 10 },
    inputActions: { flexDirection: 'row', justifyContent: 'space-between' },
    empty: { alignItems: 'center', marginTop: 50 },
    fab: { position: 'absolute', right: 20, bottom: 20, backgroundColor: '#1A365D' }
});
