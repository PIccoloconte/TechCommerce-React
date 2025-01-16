//import { Navbar, Sidebar, Footer } from "./components";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import ProductsPage from "./screen/ProductsPage";
import Product from "./screen/Product";
import Cart from "./screen/Cart";
import Checkout from "./screen/Checkout";
import Address from "./screen/Address";
import Shipping from "./screen/Shipping";
import Payment from "./screen/Payment";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/ProductPage" element={<ProductsPage />}></Route>
        <Route path="/Product" element={<Product />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/Checkout" element={<Checkout />}>
          <Route path="/Checkout/Address" element={<Address />} />
          <Route path="/Checkout/Shipping" element={<Shipping />} />
          <Route path="/Checkout/Payment" element={<Payment />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
