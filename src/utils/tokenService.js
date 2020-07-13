export default {
  setToken,
};

function setToken(token) {
  // token is a string
  if (token) {
    localStorage.setItem('token', token);
  } else {
    localStorage.removeItem('token');
  }
}