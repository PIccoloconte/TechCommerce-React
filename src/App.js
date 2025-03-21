//import { Navbar, Sidebar, Footer } from "./components";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  HashRouter,
} from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import ProductsPage from "./screen/ProductsPage";
import Product from "./screen/Product";
import Cart from "./screen/Cart";
import Checkout from "./screen/Checkout";
import Address from "./screen/Address";
import Shipping from "./screen/Shipping";
import Payment from "./screen/Payment";
import Whishlist from "./screen/Whishlist";
import Blog from "./screen/Blog";
import ContactUs from "./screen/ContactUs";
import About from "./screen/About";
import SingleBlogPost from "./screen/SingleBlogPost";
import ScrollToTop from "./components/ScrollToTop";
import ErrorScreen from "./screen/ErrorScreen";
import LoginManager from "./screen/LoginManager";
import Login from "./screen/Login";
import Register from "./screen/Register";
import ResetPassword from "./screen/ResetPassword";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Sidebar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/ProductPage/:id" element={<ProductsPage />}></Route>
        <Route path="/Product/:id" element={<Product />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
        <Route path="/SingleBlogPost/:id" element={<SingleBlogPost />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/ContactUs" element={<ContactUs />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/Whishlist" element={<Whishlist />}></Route>
        <Route path="/LoginManager" element={<LoginManager />}>
          <Route index element={<Login />}></Route>{" "}
          <Route path="/LoginManager/Register" element={<Register />}></Route>
          <Route
            path="/LoginManager/ResetPassword"
            element={<ResetPassword />}
          ></Route>
        </Route>

        <Route path="/Checkout" element={<Checkout />}>
          <Route index element={<Address />} />{" "}
          <Route path="/Checkout/Shipping" element={<Shipping />} />
          <Route path="/Checkout/Payment" element={<Payment />} />
        </Route>
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
