import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import Footer from "../component/footer.js";
import Nav from "../component/nav.js";
import postDetail from "./postDetail.js";
import { database } from "../data/firebase-app.js";

class Blog {
  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.nav = new Nav();
    this.footer = new Footer();
  }

  render(main_container) {
    this.nav.render(main_container);

    // Create the banner section
    const banner = document.createElement("div");
    banner.classList.add("banner");

    // Create the container inside the banner
    const bannerContainer = document.createElement("div");
    bannerContainer.classList.add("container");

    // Add the banner title
    const bannerTitle = document.createElement("h1");
    bannerTitle.classList.add("banner-title");
    bannerTitle.textContent = "nephelometer";

    // Add the banner description
    const bannerDescription = document.createElement("p");
    bannerDescription.textContent =
      "everything that you want to know about your next destination";

    // Create the search form
    const form = document.createElement("form");

    // Add the search input
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.classList.add("search-input");
    searchInput.placeholder = "find your destination . . .";

    // Add the search button
    const searchButton = document.createElement("button");
    searchButton.type = "submit";
    searchButton.classList.add("search-btn");
    searchButton.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';

    // Assemble the form
    form.appendChild(searchInput);
    form.appendChild(searchButton);

    // Assemble the banner content
    bannerContainer.appendChild(bannerTitle);
    bannerContainer.appendChild(bannerDescription);
    bannerContainer.appendChild(form);
    banner.appendChild(bannerContainer);

    // Create the section element
    const designSection = document.createElement("section");
    designSection.classList.add("design");
    designSection.id = "design";

    // Create the container
    const container = document.createElement("div");
    container.classList.add("container");

    // Create the title
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    const titleH2 = document.createElement("h2");
    titleH2.textContent = "Categories";
    titleDiv.appendChild(titleH2);

    // Add title to the container
    container.appendChild(titleDiv);

    // Create the design-content container
    const designContent = document.createElement("div");
    designContent.classList.add("design-content");

    // Helper function to create design items
    // Create the design-content container
    designContent.classList.add("design-content");

    // Item 1
    const item1 = document.createElement("div");
    item1.classList.add("design-item");

    const designImg1 = document.createElement("div");
    designImg1.classList.add("design-img");

    const img1 = document.createElement("img");
    img1.src = "../css/assets/art-design-1.jpg";
    img1.alt = "";
    designImg1.appendChild(img1);

    const spanLikes1 = document.createElement("span");
    spanLikes1.innerHTML = `<i class="far fa-heart"></i> 22`;
    designImg1.appendChild(spanLikes1);

    const spanText1 = document.createElement("span");
    spanText1.textContent = "nephelometer";
    designImg1.appendChild(spanText1);

    const designTitle1 = document.createElement("div");
    designTitle1.classList.add("design-title");

    const link1 = document.createElement("a");
    link1.href = "#";
    link1.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing";
    designTitle1.appendChild(link1);

    item1.appendChild(designImg1);
    item1.appendChild(designTitle1);
    designContent.appendChild(item1);

    // Item 2
    const item2 = document.createElement("div");
    item2.classList.add("design-item");

    const designImg2 = document.createElement("div");
    designImg2.classList.add("design-img");

    const img2 = document.createElement("img");
    img2.src = "../css/assets/art-design-2.jpg";
    img2.alt = "";
    designImg2.appendChild(img2);

    const spanLikes2 = document.createElement("span");
    spanLikes2.innerHTML = `<i class="far fa-heart"></i> 22`;
    designImg2.appendChild(spanLikes2);

    const spanText2 = document.createElement("span");
    spanText2.textContent = "nephelometer";
    designImg2.appendChild(spanText2);

    const designTitle2 = document.createElement("div");
    designTitle2.classList.add("design-title");

    const link2 = document.createElement("a");
    link2.href = "#";
    link2.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing";
    designTitle2.appendChild(link2);

    item2.appendChild(designImg2);
    item2.appendChild(designTitle2);
    designContent.appendChild(item2);

    // Item 3
    const item3 = document.createElement("div");
    item3.classList.add("design-item");

    const designImg3 = document.createElement("div");
    designImg3.classList.add("design-img");

    const img3 = document.createElement("img");
    img3.src = "../css/assets/art-design-3.jpg";
    img3.alt = "";
    designImg3.appendChild(img3);

    const spanLikes3 = document.createElement("span");
    spanLikes3.innerHTML = `<i class="far fa-heart"></i> 22`;
    designImg3.appendChild(spanLikes3);

    const spanText3 = document.createElement("span");
    spanText3.textContent = "nephelometer";
    designImg3.appendChild(spanText3);

    const designTitle3 = document.createElement("div");
    designTitle3.classList.add("design-title");

    const link3 = document.createElement("a");
    link3.href = "#";
    link3.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing";
    designTitle3.appendChild(link3);

    item3.appendChild(designImg3);
    item3.appendChild(designTitle3);
    designContent.appendChild(item3);

    // Repeat for items 4, 5, and 6...

    // Append design-content to the container
    container.appendChild(designContent);

    // Append container to the section
    designSection.appendChild(container);

    // Append the section to the body or specific parent element
    main_container.appendChild(designSection);

    // Create the section element
    const blogSection = document.createElement("section");
    blogSection.classList.add("blog");
    blogSection.id = "blog";

    // Create the container
    const container1 = document.createElement("div");
    container1.classList.add("container");

    // Create the title
    const titleDiv1 = document.createElement("div");
    titleDiv.classList.add("title");
    const titleH21 = document.createElement("h2");
    titleH21.textContent = "Latest Blog";
    titleDiv.appendChild(titleH2);

    // Append the title to the container
    container.appendChild(titleDiv);

    // Create the blog-content container
    const blogContent = document.createElement("div");
    blogContent.classList.add("blog-content");
    blogContent.id = "post_list";

    // Append the blog-content to the container
    container.appendChild(blogContent);

    // Append the container to the section
    blogSection.appendChild(container);

    // Append the section to the body or a specific parent element
    main_container.appendChild(blogSection);

    this.footer.render(main_container);
  }

  goto_createpost() {
    const createpost = new CreatePost();
    app.renderComponent(createpost);
  }

  goto_postdetail() {
    const postdetail = new postDetail();
    app.renderComponent(postdetail);
  }

  async get_posts() {
    const querySnapshot = await getDocs(collection(database, "posts"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  }

  async render_post(postData) {
    const item3 = document.createElement("div");
    item3.classList.add("design-item");

    const designImg3 = document.createElement("div");
    designImg3.classList.add("design-img");

    const img3 = document.createElement("img");
    img3.src = postData.data().image;
    img3.alt = postData.data().caption;
    designImg3.appendChild(img3);

    const spanLikes3 = document.createElement("span");
    spanLikes3.innerHTML = `<i class="far fa-heart"></i> 22`;
    designImg3.appendChild(spanLikes3);

    // get username by id
    const docRef = doc(database, "cities", postData.id);
    const docSnap = await getDoc(docRef);

    const spanText3 = document.createElement("span");
    spanText3.textContent = docSnap.data().displayName;
    designImg3.appendChild(spanText3);

    const designTitle3 = document.createElement("div");
    designTitle3.classList.add("design-title");

    const link3 = document.createElement("a");
    link3.href = "#";
    link3.textContent = postData.data().caption;
    designTitle3.appendChild(link3);

    item3.appendChild(designImg3);
    item3.appendChild(designTitle3);
    return item3;
  }
}

export default Blog;
