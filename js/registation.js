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

function signup(e) {
  // chan luong mac dinh
  e.preventDefault();
  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;
  const username = document.getElementById("username").value;
  const terms = document.getElementById("terms")
  // validate
  if (!email || !pass || !username || !terms) {
    alert("Vui lòng điền đầy đủ thông tin và đồng ý với điều khoản.");
    return;
  } else {
    const new_user_list = JSON.parse(localStorage.getItem("user_list"));
    new_user_list.push({ username: username, email: email, pass: pass });
    localStorage.setItem("user_list", JSON.stringify(new_user_list));
    localStorage.setItem(
      "current_user",
      JSON.stringify({ username: username, email: email, pass: pass })
      ,location.href = "../index.html"
    );
    alert("Đăng ký thành công!");
    return;
  }
}
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
    localStorage.setItem("loggedInUser", storedUsername);

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
