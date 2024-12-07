import Account from "./account.js";
import Blog from "./blog.js";
import Register from "./register.js";
import Nav from "../component/nav.js";
import Footer from "../component/footer.js";
import createPostPopup from "../component/createPost.js";

class Home {
  constructor() {
    this.nav = new Nav();
    this.footer = new Footer();
  }

  render(main_container) {
    this.nav.render(main_container);

    // Create the scrollup button container
    const scrollUpBtnDiv = document.createElement("div");
    scrollUpBtnDiv.classList.add("scrollup__btn");

    // Create the anchor element
    const anchor = document.createElement("a");
    anchor.addEventListener("click", this.scrollto_header.bind(this));

    // Create the button element
    const button = document.createElement("button");
    button.classList.add("btn");

    // Create the icon element
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-circle-chevron-up");

    // Append the icon to the button
    button.appendChild(icon);

    // Append the button to the anchor
    anchor.appendChild(button);

    // Append the anchor to the scrollup button container
    scrollUpBtnDiv.appendChild(anchor);

    // Append the scrollup button container to the body or desired parent element
    document.body.appendChild(scrollUpBtnDiv);

    // Create main container div
    const container = document.createElement("div");
    container.className = "section__container header__container";
    container.id = "welcome";

    // Create header content div
    const headerContent = document.createElement("div");
    headerContent.className = "header__content";

    // Create and append h3 element
    const subHeader = document.createElement("h3");
    subHeader.className = "section__subheader";
    subHeader.textContent = "A VACATION GUIDE";
    headerContent.appendChild(subHeader);

    // Create and append h1 element
    const header = document.createElement("h1");
    header.className = "section__header";
    header.textContent = "Be Prepared For Beyond!";
    headerContent.appendChild(header);

    // Create and append scroll button div
    const scrollBtn = document.createElement("div");
    scrollBtn.className = "scroll__btn";
    const scrollLink = document.createElement("a");
    scrollLink.href = "#";
    scrollLink.addEventListener("click", this.scrollto_explore.bind(this));
    scrollLink.textContent = "Scroll down";
    const arrowSpan = document.createElement("span");
    const arrowIcon = document.createElement("i");
    arrowIcon.className = "fa-solid fa-arrow-down";
    arrowSpan.appendChild(arrowIcon);
    scrollLink.appendChild(arrowSpan);
    scrollBtn.appendChild(scrollLink);
    headerContent.appendChild(scrollBtn);

    // Append header content to main container
    container.appendChild(headerContent);

    // Create header socials div
    const headerSocials = document.createElement("div");
    headerSocials.className = "header__socials";

    // Create and append "Follow us" span
    const followSpan = document.createElement("span");
    followSpan.textContent = "Follow us";
    headerSocials.appendChild(followSpan);

    // Create and append Instagram link
    const instagramLink = document.createElement("a");
    instagramLink.href = "#";
    const instagramIcon = document.createElement("i");
    instagramIcon.className = "fa-brands fa-instagram";
    instagramLink.appendChild(instagramIcon);
    headerSocials.appendChild(instagramLink);

    // Create and append Twitter link
    const twitterLink = document.createElement("a");
    twitterLink.href = "#";
    const twitterIcon = document.createElement("i");
    twitterIcon.className = "fa-brands fa-twitter";
    twitterLink.appendChild(twitterIcon);
    headerSocials.appendChild(twitterLink);

    // Append header socials to main container
    container.appendChild(headerSocials);

    // Append the entire structure to the body or another element
    document.body.appendChild(container);

    // Create the section element
    const section = document.createElement("section");
    section.classList.add("about");
    section.id = "more";

    // Create the section__container div
    const sectionContainer1 = document.createElement("div");
    sectionContainer1.classList.add("section__container", "about__container");

    // Create the first image and content block
    const image1Div = document.createElement("div");
    image1Div.classList.add("about__image", "about__image-1");
    const image1 = document.createElement("img");
    image1.src = "./css/assets/about-1.jpg";
    image1.alt = "about";
    image1Div.appendChild(image1);

    const content1Div = document.createElement("div");
    content1Div.classList.add("about__content", "about__content-1");
    const subheader1 = document.createElement("h3");
    subheader1.classList.add("section__subheader");
    subheader1.textContent = "GET STARTED";
    const header1 = document.createElement("h2");
    header1.classList.add("section__header");
    header1.textContent = "What level of hiker are you?";
    const para1 = document.createElement("p");
    para1.textContent = `Whether you're a novice seeking scenic strolls or an experienced
                    trekker craving challenging ascents, we've curated a diverse range
                    of trails to cater to every adventurer. Uncover your hiking
                    identity, explore tailored recommendations, and embrace the great
                    outdoors with a newfound understanding of your capabilities.`;
    const btn1Div = document.createElement("div");
    btn1Div.classList.add("about__btn");
    const btn1Link = document.createElement("a");
    btn1Link.href = "#";
    btn1Link.textContent = "Read more";
    const btn1Icon = document.createElement("span");
    const btn1IconElement = document.createElement("i");
    btn1IconElement.classList.add("fa-solid", "fa-arrow-right");
    btn1Icon.appendChild(btn1IconElement);
    btn1Link.appendChild(btn1Icon);
    btn1Div.appendChild(btn1Link);

    content1Div.appendChild(subheader1);
    content1Div.appendChild(header1);
    content1Div.appendChild(para1);
    content1Div.appendChild(btn1Div);

    // Create the second image and content block
    const image2Div = document.createElement("div");
    image2Div.classList.add("about__image", "about__image-2");
    const image2 = document.createElement("img");
    image2.src = "./css/assets/about-2.jpg";
    image2.alt = "about";
    image2Div.appendChild(image2);

    const content2Div = document.createElement("div");
    content2Div.classList.add("about__content", "about__content-2");
    const subheader2 = document.createElement("h3");
    subheader2.classList.add("section__subheader");
    subheader2.textContent = "HIKING ESSENTIALS";
    const header2 = document.createElement("h2");
    header2.classList.add("section__header");
    header2.textContent = "Picking the right hiking gear!";
    const para2 = document.createElement("p");
    para2.textContent = `From durable footwear that conquers rugged trails to lightweight
                    backpacks that carry your essentials with ease, we navigate the
                    intricacies of gear selection to ensure you're geared up for success
                    on every hike. Lace up your boots and let the journey begin with
                    confidence, knowing you've chosen the right gear for the trail
                    ahead!`;
    const btn2Div = document.createElement("div");
    btn2Div.classList.add("about__btn");
    const btn2Link = document.createElement("a");
    btn2Link.href = "#";
    btn2Link.textContent = "Read more";
    const btn2Icon = document.createElement("span");
    const btn2IconElement = document.createElement("i");
    btn2IconElement.classList.add("fa-solid", "fa-arrow-right");
    btn2Icon.appendChild(btn2IconElement);
    btn2Link.appendChild(btn2Icon);
    btn2Div.appendChild(btn2Link);

    content2Div.appendChild(subheader2);
    content2Div.appendChild(header2);
    content2Div.appendChild(para2);
    content2Div.appendChild(btn2Div);

    // Create the third image and content block
    const image3Div = document.createElement("div");
    image3Div.classList.add("about__image", "about__image-3");
    const image3 = document.createElement("img");
    image3.src = "./css/assets/about-3.jpg";
    image3.alt = "about";
    image3Div.appendChild(image3);

    const content3Div = document.createElement("div");
    content3Div.classList.add("about__content", "about__content-3");
    const subheader3 = document.createElement("h3");
    subheader3.classList.add("section__subheader");
    subheader3.textContent = "WHERE YOU GO IS THE KEY";
    const header3 = document.createElement("h2");
    header3.classList.add("section__header");
    header3.textContent = "Understanding your map & timing";
    const para3 = document.createElement("p");
    para3.textContent = `Knowing when to start and anticipating the changing conditions
                    ensures a safe and enjoyable journey. So, dive into the details,
                    grasp the contours, and synchronize your steps with the rhythm of
                    nature. It's not just a hike; it's a journey orchestrated by your
                    map and timed to perfection.`;
    const btn3Div = document.createElement("div");
    btn3Div.classList.add("about__btn");
    const btn3Link = document.createElement("a");
    btn3Link.href = "#";
    btn3Link.textContent = "Read more";
    const btn3Icon = document.createElement("span");
    const btn3IconElement = document.createElement("i");
    btn3IconElement.classList.add("fa-solid", "fa-arrow-right");
    btn3Icon.appendChild(btn3IconElement);
    btn3Link.appendChild(btn3Icon);
    btn3Div.appendChild(btn3Link);

    content3Div.appendChild(subheader3);
    content3Div.appendChild(header3);
    content3Div.appendChild(para3);
    content3Div.appendChild(btn3Div);

    // Append all the created elements to the sectionContainer
    sectionContainer1.appendChild(image1Div);
    sectionContainer1.appendChild(content1Div);
    sectionContainer1.appendChild(image2Div);
    sectionContainer1.appendChild(content2Div);
    sectionContainer1.appendChild(image3Div);
    sectionContainer1.appendChild(content3Div);

    // Append the sectionContainer to the section
    section.appendChild(sectionContainer1);

    // Append the section to the body or the desired parent element
    main_container.appendChild(section);

    this.footer.render(main_container);
  }

  goto_account() {
    const account = new Account();
    app.renderComponent(account);
  }

  goto_blog() {
    const blog = new Blog();
    app.renderComponent(blog);
  }

  goto_registration() {
    const register = new Register();
    app.renderComponent(register);
  }

  scrollto_explore() {
    const target_section = document.getElementById("more");
    target_section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  scrollto_footer() {
    const target_section = document.getElementById("footer");
    target_section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  scrollto_header() {
    const target_section = document.getElementById("app");
    target_section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

export default Home;
