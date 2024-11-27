import app from "../app.js";
import Footer from "../component/footer.js";
import Nav from "../component/nav.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
import { firebaseApp } from "../data/firebase-app.js";
import Home from "./home.js";

class Register {
  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.nav = new Nav();
    this.footer = new Footer();
  }

  render(main_container) {
    this.nav.render(main_container);

    // Create wrapper container
    const wrapperP = document.createElement("div");
    wrapperP.classList.add("wrapper-p");

    // Create wrapper and add active-popup class
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper", "active-popup");

    // Create close icon
    const closeIcon = document.createElement("span");
    closeIcon.classList.add("icon-close");
    const closeIconI = document.createElement("i");
    closeIconI.classList.add("fa-solid", "fa-xmark");
    closeIcon.appendChild(closeIconI);
    wrapper.appendChild(closeIcon);

    // Create login form
    const loginFormBox = document.createElement("div");
    loginFormBox.classList.add("form-box", "login");

    const loginTitle = document.createElement("h2");
    loginTitle.textContent = "Login";
    loginFormBox.appendChild(loginTitle);

    const loginForm = document.createElement("form");
    loginForm.id = "loginForm";

    // Email input box
    const emailBox = document.createElement("div");
    emailBox.classList.add("input-box");
    const emailIcon = document.createElement("span");
    emailIcon.classList.add("icon");
    const emailI = document.createElement("i");
    emailI.classList.add("fa-solid", "fa-envelope");
    emailIcon.appendChild(emailI);
    emailBox.appendChild(emailIcon);
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "email_login";
    emailInput.name = "email_login";
    emailBox.appendChild(emailInput);
    const emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email_login");
    emailLabel.textContent = "Email";
    emailBox.appendChild(emailLabel);
    loginForm.appendChild(emailBox);

    // Password input box
    const passwordBox = document.createElement("div");
    passwordBox.classList.add("input-box");
    const passwordIcon = document.createElement("span");
    passwordIcon.classList.add("icon");
    const passwordI = document.createElement("i");
    passwordI.classList.add("fa-solid", "fa-lock");
    passwordIcon.appendChild(passwordI);
    passwordBox.appendChild(passwordIcon);
    const passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.id = "password_login";
    passwordInput.name = "password_login";
    passwordBox.appendChild(passwordInput);
    const passwordLabel = document.createElement("label");
    passwordLabel.setAttribute("for", "password_login");
    passwordLabel.textContent = "Password";
    passwordBox.appendChild(passwordLabel);
    loginForm.appendChild(passwordBox);

    // Remember me and forgot password
    const rememberForgot = document.createElement("div");
    rememberForgot.classList.add("remember-forgot");
    const rememberLabel = document.createElement("label");
    const rememberInput = document.createElement("input");
    rememberInput.type = "checkbox";
    rememberInput.id = "remember";
    rememberInput.name = "remember";
    rememberLabel.appendChild(rememberInput);
    rememberLabel.appendChild(document.createTextNode(" Remember me"));
    rememberForgot.appendChild(rememberLabel);
    const forgotLink = document.createElement("a");
    forgotLink.href = "#";
    forgotLink.textContent = "Forgot password ?";
    rememberForgot.appendChild(forgotLink);
    loginForm.appendChild(rememberForgot);

    // Login button
    const loginButton = document.createElement("button");
    loginButton.type = "submit";
    loginButton.classList.add("btn");
    loginButton.id = "login_btn";
    loginButton.textContent = "Login";
    loginButton.addEventListener("click", this.login.bind(this));
    loginForm.appendChild(loginButton);

    // Login to Register link
    const loginToRegister = document.createElement("div");
    loginToRegister.classList.add("login-register");
    const loginToRegisterP = document.createElement("p");
    loginToRegisterP.innerHTML =
      "Don't have an account ? <a href='#' class='register-link'>Register</a>";
    loginToRegister.appendChild(loginToRegisterP);
    loginForm.appendChild(loginToRegister);

    loginFormBox.appendChild(loginForm);

    // Add login form to wrapper
    wrapper.appendChild(loginFormBox);

    // Create registration form
    const registerFormBox = document.createElement("div");
    registerFormBox.classList.add("form-box", "register");

    const registerTitle = document.createElement("h2");
    registerTitle.textContent = "Registration";
    registerFormBox.appendChild(registerTitle);

    const registerForm = document.createElement("form");
    registerForm.id = "registerForm";

    // Username input box
    const usernameBox = document.createElement("div");
    usernameBox.classList.add("input-box");
    const usernameIcon = document.createElement("span");
    usernameIcon.classList.add("icon");
    const usernameI = document.createElement("i");
    usernameI.classList.add("fa-solid", "fa-user");
    usernameIcon.appendChild(usernameI);
    usernameBox.appendChild(usernameIcon);
    const usernameInput = document.createElement("input");
    usernameInput.type = "text";
    usernameInput.id = "username_register";
    usernameInput.name = "username";
    usernameBox.appendChild(usernameInput);
    const usernameLabel = document.createElement("label");
    usernameLabel.textContent = "Username";
    usernameBox.appendChild(usernameLabel);
    registerForm.appendChild(usernameBox);

    // Registration email input box
    const registerEmailBox = document.createElement("div");
    registerEmailBox.classList.add("input-box");
    const registerEmailIcon = document.createElement("span");
    registerEmailIcon.classList.add("icon");
    const registerEmailI = document.createElement("i");
    registerEmailI.classList.add("fa-solid", "fa-envelope");
    registerEmailIcon.appendChild(registerEmailI);
    registerEmailBox.appendChild(registerEmailIcon);
    const registerEmailInput = document.createElement("input");
    registerEmailInput.type = "email";
    registerEmailInput.id = "email_register";
    registerEmailInput.name = "email_register";
    registerEmailBox.appendChild(registerEmailInput);
    const registerEmailLabel = document.createElement("label");
    registerEmailLabel.setAttribute("for", "email_register");
    registerEmailLabel.textContent = "Email";
    registerEmailBox.appendChild(registerEmailLabel);
    registerForm.appendChild(registerEmailBox);

    // Registration password input box
    const registerPasswordBox = document.createElement("div");
    registerPasswordBox.classList.add("input-box");
    const registerPasswordIcon = document.createElement("span");
    registerPasswordIcon.classList.add("icon");
    const registerPasswordI = document.createElement("i");
    registerPasswordI.classList.add("fa-solid", "fa-lock");
    registerPasswordIcon.appendChild(registerPasswordI);
    registerPasswordBox.appendChild(registerPasswordIcon);
    const registerPasswordInput = document.createElement("input");
    registerPasswordInput.type = "password";
    registerPasswordInput.id = "password_register";
    registerPasswordInput.name = "password_register";
    registerPasswordBox.appendChild(registerPasswordInput);
    const registerPasswordLabel = document.createElement("label");
    registerPasswordLabel.setAttribute("for", "password_register");
    registerPasswordLabel.textContent = "Password";
    registerPasswordBox.appendChild(registerPasswordLabel);
    registerForm.appendChild(registerPasswordBox);

    // Terms and conditions checkbox
    const termsConditions = document.createElement("div");
    termsConditions.classList.add("remember-forgot");
    const termsLabel = document.createElement("label");
    const termsInput = document.createElement("input");
    termsInput.type = "checkbox";
    termsInput.id = "terms";
    termsInput.name = "terms";
    termsLabel.appendChild(termsInput);
    termsLabel.appendChild(
      document.createTextNode(" I accepted the terms & conditions")
    );
    termsConditions.appendChild(termsLabel);
    registerForm.appendChild(termsConditions);

    // Register button
    const registerButton1 = document.createElement("button");
    registerButton1.type = "submit";
    registerButton1.classList.add("btn");
    registerButton1.id = "signup_btn";
    registerButton1.textContent = "Register";
    registerButton1.addEventListener("click", this.register.bind(this));
    registerForm.appendChild(registerButton1);

    // Register to Login link
    const registerToLogin = document.createElement("div");
    registerToLogin.classList.add("login-register");
    const registerToLoginP = document.createElement("p");
    registerToLoginP.innerHTML =
      "Already have an account ? <a href='#' class='login-link'>Login</a>";
    registerToLogin.appendChild(registerToLoginP);
    registerForm.appendChild(registerToLogin);

    registerFormBox.appendChild(registerForm);

    // Add registration form to wrapper
    wrapper.appendChild(registerFormBox);

    // Add wrapper to wrapper-p
    wrapperP.appendChild(wrapper);

    // Append wrapper-p to the document body
    main_container.appendChild(wrapperP);

    this.footer.render(main_container);
    this.wrapper_form();
  }

  wrapper_form() {
    const wrapper = document.querySelector(".wrapper");
    const loginLink = document.querySelector(".login-link");
    const registerLink = document.querySelector(".register-link");
    const iconClose = document.querySelector(".icon-close");

    registerLink.addEventListener("click", () => {
      wrapper.classList.add("active");
    });

    loginLink.addEventListener("click", () => {
      wrapper.classList.remove("active");
    });

    iconClose.addEventListener("click", () => {
      wrapper.classList.remove("active-popup");
    });
  }

  login(event) {
    event.preventDefault();
    const email = document.getElementById("email_login").value.trim();
    const password = document.getElementById("password_login").value.trim();
    // khong nhap du du lieu
    if (!(email && password)) alert("Vui long nhap du thong tin");
    else {
      // co du du lieu -> check auth tren firebase
      const auth = getAuth(firebaseApp);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // luu user hien tai vao local storage
          localStorage.setItem("currentUser", JSON.stringify(user));
          // chuyen trang home
          this.goto_home();
          
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
        });
    }
  }

  register(event) {
    event.preventDefault();
    // get data from input form
    const email = document.getElementById("email_register").value.trim();
    const password = document.getElementById("password_register").value.trim();
    const username = document.getElementById("username_register").value.trim();
    const terms = document.getElementById("terms").checked;
    // kiem tra thong tin nhap vao
    if (this.validate_registerform(email, username, password, terms)) {
      const auth = getAuth(firebaseApp);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // luu them username
          updateProfile(user, {
            displayName: username,
            photoURL:
              "https://i.pinimg.com/236x/a3/9b/7b/a39b7b7bd7012a4f6fd2030c50e91d0e.jpg",
          })
            .then(() => {
              console.log("User profile updated");
            })
            .catch((error) => {
              alert("Update profile error:", error);
            });
          console.log(user);

          alert("Dang ky thanh cong, vui long chuyen sang login")
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
        });
    }
  }

  goto_home() {
    const home = new Home();
    app.renderComponent(home);
  }

  validate_registerform(email, username, password, terms) {
    if (!(email && password && username)) {
      // khong nhap du du lieu
      alert("Vui long nhap du thong tin");
      return false;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert("Email khong dung dinh dang!");
      return false;
    }
    if (password.length < 6) {
      alert("Mat khau phai tu 6 chu so tro len!");
      return false;
    }
    if (!terms) {
      alert("Dong y dieu khoan va dich vu");
      return false;
    }
    return true;
  }
}

export default Register;
