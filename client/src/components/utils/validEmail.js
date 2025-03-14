export default function validEmail(email) {
  // Проверка на пустое значение, null или undefined
  if (!email || typeof email !== 'string') {
    return false;
  }

  // Удаляем пробелы в начале и конце строки
  const trimmedEmail = email.trim();

  // Регулярное выражение для проверки email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Проверка на соответствие регулярному выражению
  return emailRegex.test(trimmedEmail);
}
