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

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/ProductPage/:id" element={<ProductsPage />}></Route>
        <Route path="/Product/:id" element={<Product />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/Whishlist" element={<Whishlist />}></Route>
        <Route path="/Checkout" element={<Checkout />}>
          <Route index element={<Address />} />{" "}
          <Route path="/Checkout/Shipping" element={<Shipping />} />
          <Route path="/Checkout/Payment" element={<Payment />} />
        </Route>
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
