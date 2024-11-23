import Footer from "../component/footer.js";
import Nav from "../component/nav.js";
import postDetail from "./postDetail.js";

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
    function createDesignItem(imgSrc, likes, text, linkText) {
      const designItem = document.createElement("div");
      designItem.classList.add("design-item");

      const designImg = document.createElement("div");
      designImg.classList.add("design-img");

      const img = document.createElement("img");
      img.src = imgSrc;
      img.alt = "";
      designImg.appendChild(img);

      const spanLikes = document.createElement("span");
      spanLikes.innerHTML = `<i class="far fa-heart"></i> ${likes}`;
      designImg.appendChild(spanLikes);

      const spanText = document.createElement("span");
      spanText.textContent = text;
      designImg.appendChild(spanText);

      const designTitle = document.createElement("div");
      designTitle.classList.add("design-title");

      const link = document.createElement("a");
      link.href = "#";
      link.textContent = linkText;
      designTitle.appendChild(link);

      designItem.appendChild(designImg);
      designItem.appendChild(designTitle);

      return designItem;
    }

    // Create each design item manually
    const item1 = createDesignItem(
      "../css/assets/art-design-1.jpg",
      22,
      "nephelometer",
      "Lorem ipsum, dolor sit amet consectetur adipisicing"
    );
    const item2 = createDesignItem(
      "../css/assets/art-design-2.jpg",
      22,
      "nephelometer",
      "Lorem ipsum, dolor sit amet consectetur adipisicing"
    );
    const item3 = createDesignItem(
      "../css/assets/art-design-3.jpg",
      22,
      "nephelometer",
      "Lorem ipsum, dolor sit amet consectetur adipisicing"
    );
    const item4 = createDesignItem(
      "../css/assets/art-design-4.jpg",
      22,
      "nephelometer",
      "Lorem ipsum, dolor sit amet consectetur adipisicing"
    );
    const item5 = createDesignItem(
      "../css/assets/art-design-5.jpg",
      22,
      "nephelometer",
      "Lorem ipsum, dolor sit amet consectetur adipisicing"
    );
    const item6 = createDesignItem(
      "../css/assets/art-design-6.jpg",
      22,
      "nephelometer",
      "Lorem ipsum, dolor sit amet consectetur adipisicing"
    );

    // Append items to the design-content
    designContent.appendChild(item1);
    designContent.appendChild(item2);
    designContent.appendChild(item3);
    designContent.appendChild(item4);
    designContent.appendChild(item5);
    designContent.appendChild(item6);

    // Append design-content to the container
    container.appendChild(designContent);

    // Append container to the section
    designSection.appendChild(container);

    // Append the section to the body or specific parent element
    document.body.appendChild(designSection);

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
    const createpost = new CreatePost;
    app.renderComponent(createpost);
  }

  goto_postdetail() {
    const postdetail = new postDetail;
    app.renderComponent(postdetail);
  }
}

export default Blog;