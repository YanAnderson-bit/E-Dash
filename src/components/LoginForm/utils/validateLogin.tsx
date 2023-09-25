type Login = {
  email: string;
  password: string;
};

export default (login: Login) => {
  if (login.email === 'edu@edu.com' && login.password === '1234') return true;
  return false;
};
