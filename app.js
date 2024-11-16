import Nav from "./components/nav.js"
import Footer from "./components/footer.js"
import Home from "./pages/home.js"
import Login from "./pages/login.js"

class App {
    constructor() {
        this.mainContainer = document.getElementById("app");
    }

    renderComponent(component) {
        this.mainContainer.innerHTML = "";
        component.render(this.mainContainer);
    }
}

const nav = new Nav();
if (localStorage.getItem("currentUser")) {
    const home = new Home();
    app.renderComponent(home);
  } else {
    const login = new Login();
    app.renderComponent(login);
  }

export default app;