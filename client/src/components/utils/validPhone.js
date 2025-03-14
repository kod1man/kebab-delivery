export default function validPhone(phone) {
  const regex = /^(\+7|8)[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/;

  return regex.test(phone);
}
