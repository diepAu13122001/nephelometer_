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
    exploreAnchor.href = "#more";
    exploreAnchor.textContent = "Explore";
    exploreLink.appendChild(exploreAnchor);

    const blogLink = document.createElement("li");
    const blogAnchor = document.createElement("a");
    blogAnchor.href = "./html/blog.html";
    blogAnchor.textContent = "Blog";
    blogLink.appendChild(blogAnchor);

    const aboutLink = document.createElement("li");
    const aboutAnchor = document.createElement("a");
    aboutAnchor.href = "#footer";
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
    }
}

export default Nav;