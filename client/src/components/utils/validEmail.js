export default function validEmail(email) {

  if (!email || typeof email !== 'string') {
    return false;
  }


  const trimmedEmail = email.trim();


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  return emailRegex.test(trimmedEmail);
}
