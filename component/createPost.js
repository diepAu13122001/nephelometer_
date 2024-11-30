

class createPostPopup {
    constructor() {
      this.popupElement = null; // To hold the popup DOM element
    }
  
    render(main_container) {
      // If popup already exists, do nothing
      if (this.popupElement) return;
  
      // Create popup container
      const popupContainer = document.createElement("div");
      popupContainer.classList.add("popup-overlay");
  
      // Create popup content
      const popupContent = document.createElement("div");
      popupContent.classList.add("popup-content");
  
      // Close button
      const closeButton = document.createElement("span");
      closeButton.classList.add("popup-close");
      closeButton.innerHTML = "&times;";
      closeButton.addEventListener("click", this.close.bind(this));
      popupContent.appendChild(closeButton);
  
      // Form title
      const formTitle = document.createElement("h2");
      formTitle.textContent = "Create a Post";
      popupContent.appendChild(formTitle);
  
      // Form
      const form = document.createElement("form");
      form.classList.add("popup-form");
      form.addEventListener("submit", this.handleSubmit.bind(this));
  
      // Image upload input
      const imageField = this.createInputField(
        "Upload Image",
        "file",
        "post_image",
        "Choose an image to upload"
      );
      form.appendChild(imageField);
  
      // Title input
      const titleField = this.createInputField(
        "Title",
        "text",
        "post_title",
        "Enter post title"
      );
      form.appendChild(titleField);
  
      // Caption input
      const captionField = this.createTextareaField(
        "Caption",
        "post_caption",
        "Write your caption here..."
      );
      form.appendChild(captionField);
  
      // Submit button
      const submitButton = document.createElement("button");
      submitButton.type = "submit";
      submitButton.classList.add("btn");
      submitButton.textContent = "Post";
      form.appendChild(submitButton);
  
      popupContent.appendChild(form);
      popupContainer.appendChild(popupContent);
      main_container.appendChild(popupContainer);
  
      this.popupElement = popupContainer; // Store the popup element
    }
  
    createInputField(labelText, type, id, placeholder) {
      const wrapper = document.createElement("div");
      wrapper.classList.add("input-field");
  
      const label = document.createElement("label");
      label.setAttribute("for", id);
      label.textContent = labelText;
      wrapper.appendChild(label);
  
      const input = document.createElement("input");
      input.type = type;
      input.id = id;
      input.name = id;
      input.placeholder = placeholder;
      wrapper.appendChild(input);
  
      return wrapper;
    }
  
    createTextareaField(labelText, id, placeholder) {
      const wrapper = document.createElement("div");
      wrapper.classList.add("textarea-field");
  
      const label = document.createElement("label");
      label.setAttribute("for", id);
      label.textContent = labelText;
      wrapper.appendChild(label);
  
      const textarea = document.createElement("textarea");
      textarea.id = id;
      textarea.name = id;
      textarea.placeholder = placeholder;
      textarea.rows = 4;
      wrapper.appendChild(textarea);
  
      return wrapper;
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const imageInput = document.getElementById("post_image");
      const titleInput = document.getElementById("post_title");
      const captionInput = document.getElementById("post_caption");
  
      // Validate inputs
      if (!imageInput.files[0]) {
        alert("Please upload an image.");
        return;
      }
      if (!titleInput.value.trim()) {
        alert("Title cannot be empty.");
        return;
      }
      if (!captionInput.value.trim()) {
        alert("Caption cannot be empty.");
        return;
      }
  
      const postData = {
        image: imageInput.files[0], // In a real app, this should be handled with a backend for storage
        title: titleInput.value,
        caption: captionInput.value,
      };
  
      console.log("Post created:", postData);
      alert("Post created successfully!");
      this.close();
    }
  
    open(main_container) {
      if (!this.popupElement) {
        this.render(main_container);
      }
      this.popupElement.style.display = "flex";
    }
  
    close() {
      if (this.popupElement) {
        this.popupElement.style.display = "none";
      }
    }
  }
  
//   // Usage example
//   const CreatePostPopup = new createPostPopup();
  
//   // Open popup when needed
//   document.getElementById("openPopupButton").addEventListener("click", () => {
// CreatePostPopup.open(document.body);
//   });
  
export default createPostPopup;