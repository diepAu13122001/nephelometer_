import Nav from "./component/nav.js";
import Footer from "./component/footer.js";
import createPostPopup from "./component/createPost.js";
import Home from "./pages/home.js";
import Register from "./pages/register.js";
import postDetail from "./pages/postDetail.js";
import Blog from "./pages/blog.js";
import Account from "./pages/account.js";
import PostDetail from "./pages/postDetail.js";

class App {
  constructor() {
    this.mainContainer = document.getElementById("app");
  }

  renderComponent(component) {
    this.mainContainer.innerHTML = "";
    component.render(this.mainContainer);
  }
}

const app = new App();
const blog = new PostDetail();

app.renderComponent(blog);

export default app;
