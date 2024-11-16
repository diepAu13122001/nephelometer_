import postDetail from "./postDetail";

class Blog {
  constructor() {}

  render(main_container) {
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

    // Assemble the header
    header.appendChild(nav);
    header.appendChild(banner);

    // Append the header to the body or specific parent element
    document.body.appendChild(header);

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
    document.body.appendChild(blogSection);

    // Create the footer section
    const footerSection = document.createElement("section");
    footerSection.classList.add("footer");
    footerSection.id = "footer";

    // Create the footer element
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    // Create the footer container
    const footerContainer = document.createElement("div");
    footerContainer.classList.add("section__container", "footer__container");

    // Create the first footer column
    const footerCol1 = document.createElement("div");
    footerCol1.classList.add("footer__col");
    const logo = document.createElement("div");
    logo.classList.add("logo", "footer__logo");
    const logoLink = document.createElement("a");
    logoLink.href = "#";
    logoLink.textContent = "nephelometer";
    logo.appendChild(logoLink);
    const footerText = document.createElement("p");
    footerText.textContent = "Get out there & discover your next destination!";
    footerCol1.appendChild(logo);
    footerCol1.appendChild(footerText);

    // Create the second footer column
    const footerCol2 = document.createElement("div");
    footerCol2.classList.add("footer__col");
    const col2Heading = document.createElement("h4");
    col2Heading.textContent = "More on The Blog";
    const col2Links = document.createElement("ul");
    col2Links.classList.add("footer__links");

    // Add individual links for the second column
    const link1 = document.createElement("li");
    link1.innerHTML = '<a href="#">About The Creator</a>';
    const link2 = document.createElement("li");
    link2.innerHTML = '<a href="#">Contributors & Writers</a>';
    const link3 = document.createElement("li");
    link3.innerHTML = '<a href="#">Write For Us</a>';
    const link4 = document.createElement("li");
    link4.innerHTML = '<a href="#">Contact Us</a>';
    const link5 = document.createElement("li");
    link5.innerHTML = '<a href="#">Privacy Policy</a>';

    col2Links.appendChild(link1);
    col2Links.appendChild(link2);
    col2Links.appendChild(link3);
    col2Links.appendChild(link4);
    col2Links.appendChild(link5);

    footerCol2.appendChild(col2Heading);
    footerCol2.appendChild(col2Links);

    // Create the third footer column
    const footerCol3 = document.createElement("div");
    footerCol3.classList.add("footer__col");
    const col3Heading = document.createElement("h4");
    col3Heading.textContent = "More on nephelometer";
    const col3Links = document.createElement("ul");
    col3Links.classList.add("footer__links");

    // Add individual links for the third column
    const link6 = document.createElement("li");
    link6.innerHTML = '<a href="#">The Team</a>';
    const link7 = document.createElement("li");
    link7.innerHTML = '<a href="#">Jobs</a>';
    const link8 = document.createElement("li");
    link8.innerHTML = '<a href="#">Press</a>';

    col3Links.appendChild(link6);
    col3Links.appendChild(link7);
    col3Links.appendChild(link8);

    footerCol3.appendChild(col3Heading);
    footerCol3.appendChild(col3Links);

    // Assemble the footer columns into the container
    footerContainer.appendChild(footerCol1);
    footerContainer.appendChild(footerCol2);
    footerContainer.appendChild(footerCol3);

    // Create the footer bar
    const footerBar = document.createElement("div");
    footerBar.classList.add("footer__bar");
    footerBar.textContent =
      "Copyright © 2024 Le Minh Tien. All rights reserved.";

    // Assemble the footer
    footer.appendChild(footerContainer);
    footer.appendChild(footerBar);

    // Append the footer to the footer section
    footerSection.appendChild(footer);

    // Append the footer section to the body or specific parent element
    document.body.appendChild(footerSection);
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