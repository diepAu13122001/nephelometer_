import Account from "./account";
import Blog from "./blog";
import Register from "./register";

class Home {
  constructor() {}

  render(main_container) {
    // Create the scrollup button container
    const scrollUpBtnDiv = document.createElement("div");
    scrollUpBtnDiv.classList.add("scrollup__btn");

    // Create the anchor element
    const anchor = document.createElement("a");
    anchor.href = "#";

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
    sectionContainer.appendChild(image1Div);
    sectionContainer.appendChild(content1Div);
    sectionContainer.appendChild(image2Div);
    sectionContainer.appendChild(content2Div);
    sectionContainer.appendChild(image3Div);
    sectionContainer.appendChild(content3Div);

    // Append the sectionContainer to the section
    section.appendChild(sectionContainer);

    // Append the section to the body or the desired parent element
    document.body.appendChild(section);

    // Create the section element
    const section1 = document.createElement("section");
    section1.classList.add("footer");
    section1.id = "footer";

    // Create the footer element
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    // Create the section__container div
    const sectionContainer11 = document.createElement("div");
    sectionContainer11.classList.add("section__container", "footer__container");

    // Create the first footer column
    const footerCol1 = document.createElement("div");
    footerCol1.classList.add("footer__col");

    // Create the logo inside footer column
    const footerLogo = document.createElement("div");
    footerLogo.classList.add("logo", "footer__logo");
    const logoLink1 = document.createElement("a");
    logoLink1.href = "#";
    logoLink1.textContent = "nephelometer";
    footerLogo.appendChild(logoLink);
    footerCol1.appendChild(footerLogo);

    // Create the paragraph inside footer column
    const para11 = document.createElement("p");
    para11.textContent = "Get out there & discover your next destination!";
    footerCol1.appendChild(para1);

    // Append the first column to the section container
    sectionContainer.appendChild(footerCol1);

    // Create the second footer column
    const footerCol2 = document.createElement("div");
    footerCol2.classList.add("footer__col");

    // Create the h4 header inside the second column
    const h4_1 = document.createElement("h4");
    h4_1.textContent = "More on The Blog";
    footerCol2.appendChild(h4_1);

    // Create the unordered list inside the second column
    const ul1 = document.createElement("ul");
    ul1.classList.add("footer__links");

    // Create the list items and links inside the second column
    const listItems1 = [
      { text: "About The Creator", link: "#" },
      { text: "Contributors & Writers", link: "#" },
      { text: "Write For Us", link: "#" },
      { text: "Contact Us", link: "#" },
      { text: "Privacy Policy", link: "#" },
    ];

    // Manually add each list item to the unordered list
    listItems1.forEach((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = item.link;
      a.textContent = item.text;
      li.appendChild(a);
      ul1.appendChild(li);
    });

    footerCol2.appendChild(ul1);

    // Append the second column to the section container
    sectionContainer.appendChild(footerCol2);

    // Create the third footer column
    const footerCol3 = document.createElement("div");
    footerCol3.classList.add("footer__col");

    // Create the h4 header inside the third column
    const h4_2 = document.createElement("h4");
    h4_2.textContent = "More on nephelometer";
    footerCol3.appendChild(h4_2);

    // Create the unordered list inside the third column
    const ul2 = document.createElement("ul");
    ul2.classList.add("footer__links");

    // Create the list items and links inside the third column
    const listItems2 = [
      { text: "The Team", link: "#" },
      { text: "Jobs", link: "#" },
      { text: "Press", link: "#" },
    ];

    // Manually add each list item to the unordered list
    listItems2.forEach((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = item.link;
      a.textContent = item.text;
      li.appendChild(a);
      ul2.appendChild(li);
    });

    footerCol3.appendChild(ul2);

    // Append the third column to the section container
    sectionContainer.appendChild(footerCol3);

    // Create the footer bar
    const footerBar = document.createElement("div");
    footerBar.classList.add("footer__bar");
    footerBar.textContent =
      "Copyright © 2024 Le Minh Tien. All rights reserved.";

    // Append the section container and footer bar to the footer
    footer.appendChild(sectionContainer);
    footer.appendChild(footerBar);

    // Append the footer to the section
    section.appendChild(footer);

    // Append the section to the body or the desired parent element
    document.body.appendChild(section);
  }

  goto_account() {
    const account = new Account;
    app.renderComponent(account);
  }

  goto_blog() {
    const blog = new Blog;
    app.renderComponent(blog);
  }

  goto_registration() {
    const register = new Register;
    app.renderComponent(register);
  }

}

export default Home;