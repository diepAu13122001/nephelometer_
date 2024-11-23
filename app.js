import Nav from "./component/nav.js";
import Footer from "./component/footer.js";
import Home from "./pages/home.js";
import Register from "./pages/register.js";
import postDetail from "./pages/postDetail.js";
import Blog from "./pages/blog.js";
import Account from "./pages/account.js";

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
const home = new Home();
const register = new Register();
const postdetail = new postDetail();
const blog = new Blog();
const account = new Account();


// if (localStorage.getItem("currentUser")) {
//     const home = new Home();
//     app.renderComponent(home);
//   } else {
//     const register = new Register();
//     app.renderComponent(register);
//   }

app.renderComponent(blog)

export default app;