import {
  collection,
  getDocs,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import Footer from "../component/footer.js";
import Nav from "../component/nav.js";
import { database } from "../data/firebase-app.js";
import PostDetail from "./postDetail.js";
import app from "../app.js";
class Blog {
  constructor() {
    this.nav = new Nav();
    this.footer = new Footer();
    // set title name for web page
    document.title = "Blog";
  }

  async render(main_container) {
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
    main_container.appendChild(banner);

    // Create the section element
    const blogSection = document.createElement("section");
    blogSection.classList.add("blog");
    blogSection.id = "blog";

    // Create the container
    const container1 = document.createElement("div");
    container1.classList.add("container");

    // Create the title
    const titleDiv1 = document.createElement("div");
    titleDiv1.classList.add("title");
    const titleH21 = document.createElement("h2");
    titleH21.textContent = "Latest Blog";
    titleDiv1.appendChild(titleH21);

    // Append the title to the container
    container1.appendChild(titleDiv1);

    // Create the blog-content container
    const blogContent = document.createElement("div");
    blogContent.classList.add("blog-content");
    blogContent.id = "post_list";

    // Append the blog-content to the container
    container1.appendChild(blogContent);
    // Create the design-content container
    const designContent = document.createElement("div");
    designContent.classList.add("design-content");
    // Create the design-content container
    designContent.classList.add("design-content");

    // goi ham xuat cac post tu firestore ra man hinh hien thi
    await this.get_posts(designContent);

    // Append the container to the section
    container1.appendChild(designContent);
    blogSection.appendChild(container1);

    // Append the section to the body or a specific parent element
    main_container.appendChild(blogSection);

    this.footer.render(main_container);
  }

  goto_postdetail() {
    const postdetail = new PostDetail();
    app.renderComponent(postdetail);
  }

  async get_posts(posts_container) {
    const querySnapshot = await getDocs(collection(database, "posts"));
    const _this = this; // trong arrow func khong co ngu canh => giu lai du lieu cua this
    querySnapshot.forEach(async (doc) => {
      await _this.render_post(doc.data(), posts_container);
    });
  }

  async render_post(postData, posts_container) {
    const item1 = document.createElement("div");
    item1.classList.add("design-item");

    const designImg1 = document.createElement("div");
    designImg1.classList.add("design-img");

    const img1 = document.createElement("img");
    img1.src = postData.image;
    img1.alt = "";
    designImg1.appendChild(img1);

    const spanLikes1 = document.createElement("span");
    const random_heart = Math.floor(Math.random() * 100);
    spanLikes1.innerHTML = `<i class="far fa-heart"></i> ${random_heart}`;
    designImg1.appendChild(spanLikes1);

    // get username from firestore by uid
    const userRef = doc(database, "users", postData.created_by);
    const userDoc = await getDoc(userRef);
    const spanText1 = document.createElement("span");
    spanText1.textContent = userDoc.data().displayName;
    designImg1.appendChild(spanText1);

    const designTitle1 = document.createElement("div");
    designTitle1.classList.add("design-title");

    const link1 = document.createElement("a");
    link1.href = "#";
    link1.textContent = postData.title;
    designTitle1.appendChild(link1);
    // bat su kien khi click vao thi phai chuyen trang --------------------
    const _this = this;
    link1.addEventListener("click", () => {
      // luu lai du lieu cua post da bam vao local storage
      const currentPost = {
        id: postData.id,
        title: postData.title,
        image: postData.image,
        caption: postData.caption,
        created_by: userDoc.data().displayName,
        heart: random_heart,
      };
      localStorage.setItem("currentPost", JSON.stringify(currentPost));
      _this.goto_postdetail();
    });

    item1.appendChild(designImg1);
    item1.appendChild(designTitle1);

    posts_container.appendChild(item1);
  }

  search() {
    const searchInput = document.getElementById("search-input");
    const searchValue = searchInput.value.toLowerCase();
    // tim kiem theo ten post
    // :)
  }
}

export default Blog;
