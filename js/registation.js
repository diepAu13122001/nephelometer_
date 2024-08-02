const user_List = [
  {
    username: "admin",
    email: "admin@gmail.com",
    password: "nephelometeradmin",
  },
];

document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn form gửi đi

    // Lấy giá trị từ các trường nhập liệu
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const terms = document.getElementById("terms").checked;

    // Kiểm tra các trường đã được điền đầy đủ và checkbox đã được chọn
    if (username && email && password && terms) {
      // Lưu thông tin vào Local Storage
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

      alert("Đăng ký thành công!");
    } else {
      alert("Vui lòng điền đầy đủ thông tin và chấp nhận điều khoản.");
    }
  });

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn form gửi đi

    // Lấy giá trị từ các trường nhập liệu
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const remember = document.getElementById("remember").checked;

    // Lấy thông tin từ Local Storage
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    const storedUsername = localStorage.getItem("username");
    // Lưu tên đăng nhập vào Local Storage để sử dụng sau
    localStorage.setItem('loggedInUser', storedUsername);

    // Kiểm tra thông tin đăng nhập
    if (email === storedEmail && password === storedPassword) {
      if (remember) {
        localStorage.setItem("remember", "true");
      } else {
        localStorage.removeItem("remember");
      }
      alert("Đăng nhập thành công!");
      // Điều hướng đến trang khác
      window.location.href = "../index.html";
    } else {
      alert("Email hoặc mật khẩu không đúng.");
    }
  });

// Tự động điền email và mật khẩu nếu đã chọn "Ghi nhớ đăng nhập"
window.onload = function () {
  if (localStorage.getItem("remember") === "true") {
    document.getElementById("email").value = localStorage.getItem("email");
    document.getElementById("password").value =
      localStorage.getItem("password");
    document.getElementById("remember").checked = true;
  }
};
