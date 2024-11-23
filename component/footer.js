class Footer {
    constructor() {}

    render(main_container) {
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
    const logo1 = document.createElement("div");
    logo1.classList.add("logo", "footer__logo");
    const logoLink1 = document.createElement("a");
    logoLink1.href = "#";
    logoLink1.textContent = "nephelometer";
    logo1.appendChild(logoLink1);
    const footerText = document.createElement("p");
    footerText.textContent = "Get out there & discover your next destination!";
    footerCol1.appendChild(logo1);
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
    main_container.appendChild(footerSection);
    }
}

export default Footer;