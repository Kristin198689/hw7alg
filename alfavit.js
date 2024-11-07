function buildFrequencyDictionary(text) {
  // Приводим текст к нижнему регистру, чтобы игнорировать заглавные буквы
  text = text.toLowerCase();

  // Создаем пустой объект для частотного словаря
  const frequencyDict = {};

  // Проходим по каждому символу в тексте
  for (let char of text) {
    // Проверяем, является ли символ буквой (английского алфавита)
    if (char >= "a" && char <= "z") {
      // Если буква уже есть в словаре, увеличиваем её значение на 1
      // Иначе инициализируем её значением 1
      frequencyDict[char] = (frequencyDict[char] || 0) + 1;
    }
  }

  return frequencyDict;
}

const text = "This is an example text for building a frequency dictionary.";
const frequencyDict = buildFrequencyDictionary(text);
console.log(frequencyDict);
