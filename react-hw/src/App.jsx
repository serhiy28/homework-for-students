/*
Отримання та відображення завдання з API:
Редагувати App компонент, 
який виконує запит до API https://jsonplaceholder.typicode.com/todos/1
і відображає дані завдання.

Вимоги:
- Використати useEffect для виконання запиту при першому рендері компонента.
- Створити три стани за допомогою useState:
    - task — для збереження отриманого завдання;
    - error — для обробки помилок при запиті;
    - loading — для індикації завантаження даних.
- Відобразити:
    - повідомлення про завантаження, коли loading === true;
    - повідомлення про помилку, якщо error не порожній;
    - інформацію про завдання, коли task успішно отриманий.
- Використати fetch для запиту до API.
*/

import React from 'react'
import './App.css'

function App() {

  const [task, setTask] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setTask(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (<div className='container'>
    <h1>React Homework</h1>
    {loading && <p>Завантаження...</p>}
    {error && <p>Помилка: {error}</p>}
    {task && (
      <div>
        <p>ID: {task.id}</p>
        <p>Назва: {task.title}</p>
        <p>Виконано: {task.completed ? 'Так' : 'Ні'}</p>
      </div>
    )}
  </div>)
}

export default App;

