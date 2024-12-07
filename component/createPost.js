import { database, storage, firebaseApp } from "../data/firebase-app.js";
import {
  addDoc,
  collection,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";


class CreatePostPopup {
  constructor() {
    this.popupElement = null; // To hold the popup DOM element
  }

  render(main_container) {
    // If popup already exists, do nothing
    if (this.popupElement) return;

    // Create popup container
    const popupContainer = document.createElement("div");
    popupContainer.id = "popupContainer";
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

    const cancelButton = document.createElement("button");
    cancelButton.type = "reset";
    cancelButton.classList.add("btn");
    cancelButton.id = "cancelButton";
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener(
      "click",
      this.close.bind(this, main_container)
    );
    form.appendChild(cancelButton);

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

  async handleSubmit(event) {
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

    await this.uploadimage_file(postData.image);
    await this.createpost(postData);
    this.close();
  }

  close(main_container) {
    if (this.popupElement) {
      this.popupElement.style.display = "none";
    }
  }

  async uploadimage_file(file) {
    // Create a reference
    const imageRef = ref(storage, file.name);
    try {
      // Upload file
      const snapshot = await uploadBytes(imageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      this.$imageid = downloadURL;
      console.log("File available at", downloadURL);
    } catch (error) {
      console.error("Upload failed", error);
    }
  }

  async createpost(postData) {
    try {
      const auth = getAuth(firebaseApp);
      const user = auth.currentUser;  
      const docRef = await addDoc(collection(database, "posts"), {
        title: postData.title,
        caption: postData.caption,
        image: this.$imageid,
        created_by: user.uid,
      });
      console.log("Document written with ID: ", docRef.id);
      alert("Create post successfully");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
}
export default CreatePostPopup;
