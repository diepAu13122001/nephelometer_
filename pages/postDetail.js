import Account from "./account";

class postDetail {
  constructor() {}

  render(main_container) {
    // Create the header element
    const header = document.createElement("header");
    header.classList.add("header");
    header.id = "home";

    // Create the nav element
    const nav = document.createElement("nav");

    // Create the nav__bar div
    const navBar = document.createElement("div");
    navBar.classList.add("nav__bar");

    // Create the logo div
    const logoDiv = document.createElement("div");
    logoDiv.classList.add("logo", "nav__logo");
    const logoLink = document.createElement("a");
    logoLink.href = "../index.html#";
    logoLink.textContent = "nephelometer";
    logoDiv.appendChild(logoLink);

    // Append the logo to the navBar
    navBar.appendChild(logoDiv);

    // Create the nav__links ul
    const navLinks = document.createElement("ul");
    navLinks.classList.add("nav__links");
    navLinks.id = "nav-links";

    // Create the first li element
    const li1 = document.createElement("li");
    const a1 = document.createElement("a");
    a1.href = "../index.html#more";
    a1.textContent = "Explore";
    li1.appendChild(a1);

    // Create the second li element
    const li2 = document.createElement("li");
    const a2 = document.createElement("a");
    a2.href = "./blog.html";
    a2.textContent = "Blog";
    li2.appendChild(a2);

    // Create the third li element
    const li3 = document.createElement("li");
    const a3 = document.createElement("a");
    a3.href = "../index.html#footer";
    a3.textContent = "About Us";
    li3.appendChild(a3);

    // Create the fourth li element (account button)
    const li4 = document.createElement("li");
    li4.id = "account-open-nav";
    const button1 = document.createElement("button");
    button1.id = "accountButton_1";
    button1.classList.add("nav__action", "btn");
    const span1 = document.createElement("span");
    const icon1 = document.createElement("i");
    icon1.classList.add("fa-solid", "fa-user");
    span1.appendChild(icon1);
    span1.appendChild(document.createTextNode(" Account"));
    button1.appendChild(span1);
    li4.appendChild(button1);

    // Append the list items to the navLinks
    navLinks.appendChild(li1);
    navLinks.appendChild(li2);
    navLinks.appendChild(li3);
    navLinks.appendChild(li4);

    // Append the navLinks to the navBar
    navBar.appendChild(navLinks);

    // Create the menu button
    const menuBtnDiv = document.createElement("div");
    menuBtnDiv.classList.add("nav__menu__btn");
    menuBtnDiv.id = "menu-btn";
    const icon2 = document.createElement("i");
    icon2.classList.add("fa-solid", "fa-bars");
    menuBtnDiv.appendChild(icon2);

    // Create the nav__action__btn div (second account button)
    const actionBtnDiv = document.createElement("div");
    actionBtnDiv.classList.add("nav__action__btn");
    const button2 = document.createElement("button");
    button2.id = "accountButton_2";
    button2.classList.add("nav__action", "btn");
    const span2 = document.createElement("span");
    const icon3 = document.createElement("i");
    icon3.classList.add("fa-solid", "fa-user");
    span2.appendChild(icon3);
    span2.appendChild(document.createTextNode(" Account"));
    button2.appendChild(span2);
    actionBtnDiv.appendChild(button2);

    // Append all elements to the nav
    nav.appendChild(navBar);
    nav.appendChild(menuBtnDiv);
    nav.appendChild(actionBtnDiv);

    // Append the nav to the header
    header.appendChild(nav);

    // Append the header to the body (or a specific container)
    document.body.appendChild(header);

    // Create the main blog-card div
    const blogCard = document.createElement("div");
    blogCard.classList.add("blog-card", "spring-fever");

    // Create the title-content div
    const titleContent = document.createElement("div");
    titleContent.classList.add("title-content");

    // Create the h3 element for the post title
    const postTitle = document.createElement("h3");
    postTitle.id = "post_title";
    postTitle.textContent = "SPRING FEVER";

    // Create the hr element for the line
    const hr = document.createElement("hr");

    // Append the title and hr to the titleContent div
    titleContent.appendChild(postTitle);
    titleContent.appendChild(hr);

    // Append the titleContent to the blogCard
    blogCard.appendChild(titleContent);

    // Create the card-info div
    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");
    cardInfo.id = "post_content";
    cardInfo.textContent =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.";

    // Append the cardInfo to the blogCard
    blogCard.appendChild(cardInfo);

    // Create the utility-info div
    const utilityInfo = document.createElement("div");
    utilityInfo.classList.add("utility-info");

    // Create the utility-list ul
    const utilityList = document.createElement("ul");
    utilityList.classList.add("utility-list");

    // Create the comments list item
    const commentsItem = document.createElement("li");
    commentsItem.classList.add("comments");
    const commentLink = document.createElement("a");
    commentLink.href = "#";
    commentLink.classList.add("comment-link");
    commentLink.textContent = "12";
    commentsItem.appendChild(commentLink);

    // Create the date list item
    const dateItem = document.createElement("li");
    dateItem.classList.add("date");
    dateItem.textContent = "03.12.2015";

    // Append both list items to the utility-list
    utilityList.appendChild(commentsItem);
    utilityList.appendChild(dateItem);

    // Append the utility-list to the utility-info
    utilityInfo.appendChild(utilityList);

    // Append the utility-info to the blogCard
    blogCard.appendChild(utilityInfo);

    // Create the close button (btn-close)
    const closeButton = document.createElement("a");
    closeButton.href = "#";
    closeButton.classList.add("btn-close");
    closeButton.textContent = "X";

    // Append the close button to the blogCard
    blogCard.appendChild(closeButton);

    // Create the comment-card div
    const commentCard = document.createElement("div");
    commentCard.classList.add("comment-card");
    commentCard.id = "comment_list";

    // Append the commentCard to the blogCard
    blogCard.appendChild(commentCard);

    // Create the overlay divs
    const gradientOverlay = document.createElement("div");
    gradientOverlay.classList.add("gradient-overlay");
    const colorOverlay = document.createElement("div");
    colorOverlay.classList.add("color-overlay");

    // Append the overlays to the blogCard
    blogCard.appendChild(gradientOverlay);
    blogCard.appendChild(colorOverlay);

    // Finally, append the blogCard to the body or a specific container
    document.body.appendChild(blogCard);

    // Create the footer section and its main elements
    const footerSection = document.createElement("section");
    footerSection.classList.add("footer");
    footerSection.id = "footer";

    const footerElement = document.createElement("footer");
    footerElement.classList.add("footer");

    const sectionContainer = document.createElement("div");
    sectionContainer.classList.add("section__container", "footer__container");

    // First column
    const footerCol1 = document.createElement("div");
    footerCol1.classList.add("footer__col");

    const logoDiv1 = document.createElement("div");
    logoDiv1.classList.add("logo", "footer__logo");

    const logoLink1 = document.createElement("a");
    logoLink1.href = "#";
    logoLink1.textContent = "nephelometer";

    logoDiv.appendChild(logoLink);
    footerCol1.appendChild(logoDiv);

    const footerText = document.createElement("p");
    footerText.textContent = "Get out there & discover your next destination!";
    footerCol1.appendChild(footerText);

    // Second column
    const footerCol2 = document.createElement("div");
    footerCol2.classList.add("footer__col");

    const col2Header = document.createElement("h4");
    col2Header.textContent = "More on The Blog";
    footerCol2.appendChild(col2Header);

    const footerLinks2 = document.createElement("ul");
    footerLinks2.classList.add("footer__links");

    const linkItem1 = document.createElement("li");
    const link1 = document.createElement("a");
    link1.href = "#";
    link1.textContent = "About The Creator";
    linkItem1.appendChild(link1);
    footerLinks2.appendChild(linkItem1);

    const linkItem2 = document.createElement("li");
    const link2 = document.createElement("a");
    link2.href = "#";
    link2.textContent = "Contributors & Writers";
    linkItem2.appendChild(link2);
    footerLinks2.appendChild(linkItem2);

    const linkItem3 = document.createElement("li");
    const link3 = document.createElement("a");
    link3.href = "#";
    link3.textContent = "Write For Us";
    linkItem3.appendChild(link3);
    footerLinks2.appendChild(linkItem3);

    const linkItem4 = document.createElement("li");
    const link4 = document.createElement("a");
    link4.href = "#";
    link4.textContent = "Contact Us";
    linkItem4.appendChild(link4);
    footerLinks2.appendChild(linkItem4);

    const linkItem5 = document.createElement("li");
    const link5 = document.createElement("a");
    link5.href = "#";
    link5.textContent = "Privacy Policy";
    linkItem5.appendChild(link5);
    footerLinks2.appendChild(linkItem5);

    footerCol2.appendChild(footerLinks2);

    // Third column
    const footerCol3 = document.createElement("div");
    footerCol3.classList.add("footer__col");

    const col3Header = document.createElement("h4");
    col3Header.textContent = "More on nephelometer";
    footerCol3.appendChild(col3Header);

    const footerLinks3 = document.createElement("ul");
    footerLinks3.classList.add("footer__links");

    const linkItem6 = document.createElement("li");
    const link6 = document.createElement("a");
    link6.href = "#";
    link6.textContent = "The Team";
    linkItem6.appendChild(link6);
    footerLinks3.appendChild(linkItem6);

    const linkItem7 = document.createElement("li");
    const link7 = document.createElement("a");
    link7.href = "#";
    link7.textContent = "Jobs";
    linkItem7.appendChild(link7);
    footerLinks3.appendChild(linkItem7);

    const linkItem8 = document.createElement("li");
    const link8 = document.createElement("a");
    link8.href = "#";
    link8.textContent = "Press";
    linkItem8.appendChild(link8);
    footerLinks3.appendChild(linkItem8);

    footerCol3.appendChild(footerLinks3);

    // Add columns to the container
    sectionContainer.appendChild(footerCol1);
    sectionContainer.appendChild(footerCol2);
    sectionContainer.appendChild(footerCol3);

    // Footer bar
    const footerBar = document.createElement("div");
    footerBar.classList.add("footer__bar");
    footerBar.textContent =
      "Copyright © 2024 Le Minh Tien. All rights reserved.";

    // Assemble the footer
    footerElement.appendChild(sectionContainer);
    footerElement.appendChild(footerBar);
    footerSection.appendChild(footerElement);

    // Append the footer to the document body
    document.body.appendChild(footerSection);
  }

  goto_account() {
    const account = new Account;
    app.renderComponent(account);
  }
}

export default postDetail;