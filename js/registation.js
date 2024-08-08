const user_List = [
  {
    username: "admin",
    email: "admin@gmail.com",
    password: "nephelometeradmin",
  },
];

if (!JSON.parse(localStorage.getItem("user_list"))) {
  localStorage.setItem("user_list", JSON.stringify(user_list));
}

function registerUser() {
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var terms = document.getElementById('terms').checked;

  if (username === "" || email === "" || password === "" || !terms) {
      alert("Vui lòng điền đầy đủ thông tin và đồng ý với điều khoản.");
      return false;
  }

  // Lưu dữ liệu vào Local Storage
  localStorage.setItem('username', username);
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);

  alert("Đăng ký thành công!");

  return false;
}

document.addEventListener('DOMContentLoaded', (event) => {
  if (localStorage.getItem('remember') === 'true') {
      document.getElementById('login-email').value = localStorage.getItem('email');
      document.getElementById('login-password').value = localStorage.getItem('password');
      document.getElementById('remember').checked = true;
  }
});

function loginUser() {
  var email = document.getElementById('login-email').value;
  var password = document.getElementById('login-password').value;
  var remember = document.getElementById('remember').checked;

  var storedEmail = localStorage.getItem('email');
  var storedPassword = localStorage.getItem('password');

  if (email === storedEmail && password === storedPassword) {
      if (remember) {
          localStorage.setItem('remember', 'true');
      } else {
          localStorage.removeItem('remember');
      }
      alert("Đăng nhập thành công!");
      window.location.href = "../index.html"; // Chuyển hướng đến trang chào mừng
      return false;
  } else {
      alert("Email hoặc mật khẩu không đúng.");
      return false;
  }
}
