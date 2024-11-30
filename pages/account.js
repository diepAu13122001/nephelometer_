import app from "../app.js";
import Footer from "../component/footer.js";
import Nav from "../component/nav.js";
import { firebaseApp } from "../data/firebase-app.js";
import Home from "./home.js";
import postDetail from "./postDetail.js";
import createPostPopup from "../component/createPost.js";

import {
  getAuth,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

class Account {
  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.nav = new Nav();
    this.footer = new Footer();
  }

  render(main_container) {
    this.nav.render(main_container);



    // Create the main container
    const container = document.createElement("div");
    container.classList.add("container");

    // Create the card
    const card = document.createElement("div");
    card.classList.add("card", "p-0");

    // Create the card image section
    const cardImage = document.createElement("div");
    cardImage.classList.add("card-image");
    const img = document.createElement("img");
    img.src =
      "https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    img.alt = "";
    cardImage.appendChild(img);

    // Create the card content section
    const cardContent = document.createElement("div");
    cardContent.classList.add(
      "card-content",
      "d-flex",
      "flex-column",
      "align-items-center"
    );

    // Add account name
    const accountName = document.createElement("h4");
    accountName.classList.add("pt-2");
    accountName.id = "account_name";
    accountName.textContent = "SomeOne Famous";

    // Add account email
    const accountEmail = document.createElement("h5");
    accountEmail.id = "account_email";
    accountEmail.textContent = "Creative Designer";

    // Create account analysis section
    const accountAnalysis = document.createElement("div");
    accountAnalysis.classList.add("account_analysis");

    // Add posts quantity
    const postQty = document.createElement("div");
    postQty.id = "post_qty";
    postQty.innerHTML = "<span>100</span> posts";
    accountAnalysis.appendChild(postQty);

    // Add followers quantity
    const followerQty = document.createElement("div");
    followerQty.id = "follower_qty";
    followerQty.innerHTML = "<span>100</span> followers";
    accountAnalysis.appendChild(followerQty);

    // Add add button
    const addBtn = document.createElement("div");
    addBtn.id = "add_btn";
    const addButton = document.createElement("button");
    addButton.innerHTML = '<i class="fa-solid fa-circle-plus"></i>';
    addBtn.appendChild(addButton);
    accountAnalysis.appendChild(addBtn);

    // Add social icons
    const socialIcons = document.createElement("ul");
    socialIcons.classList.add(
      "social-icons",
      "d-flex",
      "justify-content-center"
    );

    // Create individual social links manually
    const facebookLi = document.createElement("li");
    facebookLi.style.setProperty("--i", 1);
    const facebookLink = document.createElement("a");
    facebookLink.href = "#";
    facebookLink.innerHTML = '<span class="fab fa-facebook"></span>';
    facebookLi.appendChild(facebookLink);

    const twitterLi = document.createElement("li");
    twitterLi.style.setProperty("--i", 2);
    const twitterLink = document.createElement("a");
    twitterLink.href = "#";
    twitterLink.innerHTML = '<span class="fab fa-twitter"></span>';
    twitterLi.appendChild(twitterLink);

    const instagramLi = document.createElement("li");
    instagramLi.style.setProperty("--i", 3);
    const instagramLink = document.createElement("a");
    instagramLink.href = "#";
    instagramLink.innerHTML = '<span class="fab fa-instagram"></span>';
    instagramLi.appendChild(instagramLink);

    // Append social links to the social icons list
    socialIcons.appendChild(facebookLi);
    socialIcons.appendChild(twitterLi);
    socialIcons.appendChild(instagramLi);

    // Assemble the card content
    cardContent.appendChild(accountName);
    cardContent.appendChild(accountEmail);
    cardContent.appendChild(accountAnalysis);
    cardContent.appendChild(socialIcons);

    // Assemble the card
    card.appendChild(cardImage);
    card.appendChild(cardContent);

    // Append the card to the container
    container.appendChild(card);

    const logoutbtn = document.createElement("button");
    logoutbtn.innerHTML = "Log Out";
    logoutbtn.id = "logout_btn";
    logoutbtn.addEventListener("click", this.logout.bind(this));
    main_container.appendChild(logoutbtn);

    // Add the container to the DOM (e.g., append to body or a specific parent element)
    main_container.appendChild(container);

    this.footer.render(main_container);
  }

  goto_createpost() {
    // const createpost = new createPost;
    // app.renderComponent(createpost);
  }

  goto_home() {
    const home = new Home();
    app.renderComponent(home);
  }

  logout() {
    const auth = getAuth(firebaseApp);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        this.goto_home();
      })
      .catch((error) => {
        // An error happened.
        alert(error)
      });
  }
}

export default Account;
