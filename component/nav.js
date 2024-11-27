import app from "../app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
import { firebaseApp } from "../data/firebase-app.js";
import Account from "../pages/account.js";
import Blog from "../pages/blog.js";
import Home from "../pages/home.js";
import Register from "../pages/register.js";

class Nav {
  constructor() {}

  render(main_container) {
    // Create the nav element
    const nav = document.createElement("nav");

    // Create the nav__bar div
    const navBar = document.createElement("div");
    navBar.classList.add("nav__bar");

    // Create the logo div
    const logoDiv = document.createElement("div");
    logoDiv.classList.add("logo", "nav__logo");
    const logoLink = document.createElement("a");
    logoLink.addEventListener("click", this.goto_header.bind(this));
    logoLink.href = "#";
    logoLink.textContent = "nephelometer";
    logoDiv.appendChild(logoLink);

    // Create the nav__links ul
    const navLinks = document.createElement("ul");
    navLinks.classList.add("nav__links");
    navLinks.id = "nav-links";

    // Create the list items for the links
    const exploreLink = document.createElement("li");
    const exploreAnchor = document.createElement("a");
    exploreAnchor.textContent = "Explore";
    exploreAnchor.addEventListener("click", this.goto_explore.bind(this));
    exploreAnchor.href = "#";
    exploreLink.appendChild(exploreAnchor);

    const blogLink = document.createElement("li");
    const blogAnchor = document.createElement("a");
    blogAnchor.addEventListener("click", this.goto_blog.bind(this));
    blogAnchor.href = "#";
    blogAnchor.textContent = "Blog";
    blogLink.appendChild(blogAnchor);

    const aboutLink = document.createElement("li");
    const aboutAnchor = document.createElement("a");
    aboutAnchor.addEventListener("click", this.goto_footer.bind(this));
    aboutAnchor.href = "#";
    aboutAnchor.textContent = "About Us";
    aboutLink.appendChild(aboutAnchor);

    const accountLink = document.createElement("li");
    accountLink.id = "account-open-nav";
    const accountButton1 = document.createElement("button");
    accountButton1.id = "accountButton_1";
    accountButton1.classList.add("nav__action", "btn");
    const accountButtonIcon1 = document.createElement("i");
    accountButtonIcon1.classList.add("fa-solid", "fa-user");
    accountButton1.appendChild(accountButtonIcon1);
    accountButton1.appendChild(document.createTextNode(" Account"));
    accountLink.appendChild(accountButton1);

    // Append links to the nav__links
    navLinks.appendChild(exploreLink);
    navLinks.appendChild(blogLink);
    navLinks.appendChild(aboutLink);
    navLinks.appendChild(accountLink);

    // Create the menu button div
    const menuBtnDiv = document.createElement("div");
    menuBtnDiv.classList.add("nav__menu__btn");
    menuBtnDiv.id = "menu-btn";
    const menuIcon = document.createElement("i");
    menuIcon.classList.add("fa-solid", "fa-bars");
    menuBtnDiv.appendChild(menuIcon);

    // Create the action button div
    const actionBtnDiv = document.createElement("div");
    actionBtnDiv.classList.add("nav__action__btn");
    const accountButton2 = document.createElement("button");
    accountButton2.id = "accountButton_2";
    accountButton2.classList.add("nav__action", "btn");
    const accountButtonIcon2 = document.createElement("i");
    accountButtonIcon2.classList.add("fa-solid", "fa-user");
    accountButton2.appendChild(accountButtonIcon2);

    accountButton2.href = "#";
    accountButton2.appendChild(document.createTextNode(" Account"));
    actionBtnDiv.appendChild(accountButton2);

    // Append elements to the nav
    navBar.appendChild(logoDiv);
    navBar.appendChild(navLinks);
    navBar.appendChild(menuBtnDiv);
    navBar.appendChild(actionBtnDiv);

    // Append the nav to the header
    nav.appendChild(navBar);

    // Append header to the body or desired parent element
    main_container.appendChild(nav);

    this.check_account();
    this.createminimizedBtn();
  }

  createminimizedBtn() {
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    const menuBtnIcon = menuBtn.querySelector("i");
    const account_open_nav = document.querySelector("#account-open-nav");

    menuBtn.addEventListener("click", (e) => {
      const isOpen = navLinks.classList.contains("open");
      menuBtnIcon.setAttribute(
        "class",
        isOpen ? "fa-solid fa-bars" : "fa-solid fa-xmark"
      );
      if (isOpen) {
        account_open_nav.classList.remove("hide");
        navLinks.classList.add("close");
        navLinks.addEventListener(
          "animationend",
          (e) => {
            navLinks.classList.remove("open");
            navLinks.classList.remove("close");
          },
          { once: true }
        );
      } else {
        navLinks.classList.add("open");
      }
    });

    navLinks.addEventListener("click", (e) => {
      navLinks.classList.remove("open");
      menuBtnIcon.setAttribute("class", "fa-solid fa-bars");
    });
  }

  goto_home() {
    const home = new Home();
    app.renderComponent(home);
  }

  goto_header() {
    const home = new Home();
    app.renderComponent(home);
    home.scrollto_header();
  }

  goto_footer() {
    const home = new Home();
    app.renderComponent(home);
    home.scrollto_footer();
  }

  goto_explore() {
    const home = new Home();
    app.renderComponent(home);
    home.scrollto_explore();
  }

  goto_blog() {
    const blog = new Blog();
    app.renderComponent(blog);
  }

  goto_account() {
    const account = new Account();
    app.renderComponent(account);
  }

  check_account() {
    // kiem tra neu co bien currentuser trong local storage

    // doi ten btn account

    const auth = getAuth(firebaseApp);
    const user = auth.currentUser;
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      document
        .getElementById("accountButton_2")
        .addEventListener("click", this.goto_account.bind(this));
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;
      console.log(displayName);
      document
        .getElementById("accountButton_2").innerText = displayName;
      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      const uid = user.uid;
    } else {
      document
        .getElementById("accountButton_2")
        .addEventListener("click", this.goto_register.bind(this));
    }
  }

  goto_register() {
    const register = new Register();
    app.renderComponent(register);
  }
}

export default Nav;
