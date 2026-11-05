/*
Динамічне отримання та відображення списку завдань:
Напишіть код прямо у Expo Snack (https://snack.expo.dev/) 
та після перевірки вставте результат у ваш поточний файл.

Вимоги:
- Використати React Native компоненти:
    - TextInput для введення числа — кількості завдань для запиту;
    - Button для виконання запиту;
    - FlatList для відображення списку завдань.
- Керувати станом за допомогою useState та useEffect:
    - tasks — масив отриманих завдань;
    - error — для обробки помилок.
    - loading — для індикації завантаження;
- При натисканні кнопки робити запит на API https://jsonplaceholder.typicode.com/todos?_limit=<число з TextInput> та оновлювати список tasks.
  Приклад запиту: якщо у TextInput введено 5, URL буде https://jsonplaceholder.typicode.com/todos?_limit=5
- Відобразити:
    - повідомлення про завантаження, коли loading === true;
    - повідомлення про помилку, якщо error не порожній;
    - список завдань через FlatList, показуючи title кожного елемента.
*/

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const [count, setCount] = useState('5');
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    if (trigger === 0) return;

    let cancelled = false;
    setLoading(true);
    setError('');

    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${count}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (!cancelled) setTasks(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [trigger]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={count}
        onChangeText={setCount}
        keyboardType="numeric"
        placeholder="Кількість завдань"
      />
      <Button title="Отримати завдання" onPress={() => setTrigger((t) => t + 1)} />

      {loading && <Text style={styles.info}>Завантаження...</Text>}
      {error !== '' && <Text style={styles.error}>Помилка: {error}</Text>}

      <FlatList
        data={tasks}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, paddingTop: 48 },
  input: { borderWidth: 1, borderColor: '#999', padding: 8, marginBottom: 12 },
  info: { marginVertical: 8 },
  error: { marginVertical: 8, color: 'red' },
  item: { paddingVertical: 6, borderBottomWidth: 1, borderBottomColor: '#eee' },
});
