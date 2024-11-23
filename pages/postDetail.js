import Footer from "../component/footer.js";
import Nav from "../component/nav.js";
import Account from "./account.js";

class postDetail {
  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.nav = new Nav();
    this.footer = new Footer();
  }

  render(main_container) {
    this.nav.render(main_container);

    
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
    main_container.appendChild(blogCard);

    this.footer.render(main_container);
  }

  goto_account() {
    const account = new Account;
    app.renderComponent(account);
  }
}

export default postDetail;