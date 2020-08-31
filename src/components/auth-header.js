
export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('uToken'));
  
    if (user && user.accessToken) {
      return { auth: 'Bearer ' + user.accessToken };
    } else {
      return {};
    }
  }