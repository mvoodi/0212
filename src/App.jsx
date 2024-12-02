import { useState, useEffect } from 'react';
import './App.css'; // Подключение стилей

function App() {
  // Состояние для исходных данных
  const [data, setData] = useState([]);
  
  // Состояние для строки поиска
  const [searchString, setSearchString] = useState('');
  
  // Состояние для фильтрованных данных
  const [filteredData, setFilteredData] = useState([]);

  // Используем useEffect для загрузки данных при первом рендере
  useEffect(() => {
    // Инициализируем данные вручную
    const initialData = [
      { id: 1, name: 'Afghanistan' },
      { id: 2, name: 'Albania' },
      { id: 3, name: 'Algeria' },
      { id: 4, name: 'Andorra' },
      { id: 5, name: 'Angola' },
      { id: 6, name: 'Antigua and Barbuda' },
      { id: 7, name: 'Argentina' },
      { id: 8, name: 'Armenia' },
      { id: 9, name: 'Australia' },
      { id: 10, name: 'Austria' },
      { id: 11, name: 'Azerbaijan' },
      { id: 12, name: 'Bahamas' },
      { id: 13, name: 'Bahrain' },
      { id: 14, name: 'Bangladesh' },
      { id: 15, name: 'Barbados' },
      { id: 16, name: 'Belarus' },
      { id: 17, name: 'Belgium' },
      { id: 18, name: 'Belize' },
      { id: 19, name: 'Benin' },
      { id: 20, name: 'Bhutan' },
      { id: 21, name: 'Bolivia' },
      { id: 22, name: 'Bosnia and Herzegovina' },
      { id: 23, name: 'Botswana' },
      { id: 24, name: 'Brazil' },
      { id: 25, name: 'Brunei' },
      { id: 26, name: 'Bulgaria' },
      { id: 27, name: 'Burkina Faso' },
      { id: 28, name: 'Burundi' },
      { id: 29, name: 'Cabo Verde' },
      { id: 30, name: 'Cambodia' },
      { id: 31, name: 'Cameroon' },
      { id: 32, name: 'Canada' },
      { id: 33, name: 'Central African Republic' },
      { id: 34, name: 'Chad' },
      { id: 35, name: 'Chile' },
      { id: 36, name: 'China' },
      { id: 37, name: 'Colombia' },
      { id: 38, name: 'Comoros' },
      { id: 39, name: 'Congo (Congo-Brazzaville)' },
      { id: 40, name: 'Costa Rica' },
      { id: 41, name: 'Croatia' },
      { id: 42, name: 'Cuba' },
      { id: 43, name: 'Cyprus' },
      { id: 44, name: 'Czechia (Czech Republic)' },
      { id: 45, name: 'Denmark' },
      { id: 46, name: 'Djibouti' },
      { id: 47, name: 'Dominica' },
      { id: 48, name: 'Dominican Republic' },
      { id: 49, name: 'Ecuador' },
      { id: 50, name: 'Egypt' },
      { id: 51, name: 'El Salvador' },
      { id: 52, name: 'Equatorial Guinea' },
      { id: 53, name: 'Eritrea' },
      { id: 54, name: 'Estonia' },
      { id: 55, name: 'Eswatini (fmr. Swaziland)' },
      { id: 56, name: 'Ethiopia' },
      { id: 57, name: 'Fiji' },
      { id: 58, name: 'Finland' },
      { id: 59, name: 'France' },
      { id: 60, name: 'Gabon' },
      { id: 61, name: 'Gambia' },
      { id: 62, name: 'Georgia' },
      { id: 63, name: 'Germany' },
      { id: 64, name: 'Ghana' },
      { id: 65, name: 'Greece' },
      { id: 66, name: 'Grenada' },
      { id: 67, name: 'Guatemala' },
      { id: 68, name: 'Guinea' },
      { id: 69, name: 'Guinea-Bissau' },
      { id: 70, name: 'Guyana' },
      { id: 71, name: 'Haiti' },
      { id: 72, name: 'Holy See' },
      { id: 73, name: 'Honduras' },
      { id: 74, name: 'Hungary' },
      { id: 75, name: 'Iceland' },
      { id: 76, name: 'India' },
      { id: 77, name: 'Indonesia' },
      { id: 78, name: 'Iran' },
      { id: 79, name: 'Iraq' },
      { id: 80, name: 'Ireland' },
      { id: 81, name: 'Israel' },
      { id: 82, name: 'Italy' },
      { id: 83, name: 'Jamaica' },
      { id: 84, name: 'Japan' },
      { id: 85, name: 'Jordan' },
      { id: 86, name: 'Kazakhstan' },
      { id: 87, name: 'Kenya' },
      { id: 88, name: 'Kiribati' },
      { id: 89, name: 'Kuwait' },
      { id: 90, name: 'Kyrgyzstan' },
      { id: 91, name: 'Laos' },
      { id: 92, name: 'Latvia' },
      { id: 93, name: 'Lebanon' },
      { id: 94, name: 'Lesotho' },
      { id: 95, name: 'Liberia' },
      { id: 96, name: 'Libya' },
      { id: 97, name: 'Liechtenstein' },
      { id: 98, name: 'Lithuania' },
      { id: 99, name: 'Luxembourg' },
      { id: 100, name: 'Madagascar' }
    ];

    setData(initialData); // Устанавливаем данные
  }, []); // Этот useEffect выполнится только один раз, при монтировании компонента

  // Используем useEffect для фильтрации данных при изменении строки поиска
  useEffect(() => {
    // Фильтруем данные при каждом изменении строки поиска
    const filtered = data.filter(item => 
      item.name.toLowerCase().includes(searchString.toLowerCase())
    );
    setFilteredData(filtered); // Обновляем состояние с фильтрованными данными
  }, [searchString, data]); // Этот useEffect выполнится при изменении searchString или data

  return (
    <div className="App" id="root">
      <h1>Search Books</h1>
      {/* Поле для ввода строки поиска */}
      <input
        type="text"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)} // Обновляем строку поиска
        placeholder="Search for a book"
      />
      <ul>
        {data.length === 0 ? (
          <p>Loading...</p>
        ) : filteredData.length === 0 ? (
          <p>No books found((</p> // Если нет совпадений
        ) : (
          filteredData.map(item => <li key={item.id}>{item.name}</li>) // Выводим отфильтрованный список
        )}
      </ul>
    </div>
  );
}

export default App;