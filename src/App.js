import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import OurCoffee from "./pages/ourCoffee/OurCoffee";
import Contact from "./pages/contact/Contact";
import Shop from "./pages/shop/Shop";
import Product_detail from "./pages/product-detail/Product_detail";
import Footer from "./componant/footer/Footer";
import PageNotFound from "./pages/page-not-found/PageNotFound";
import Header from "./componant/header/Header";
import ScrollToTop from "./Others/ScrollToTop";
import ScrollToTopButton from "./Others/ScrollToTopButton";
import Our_cart from "./pages/cart/Our_cart";
import NewShop from "./pages/new-shop/NewShop";


function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <ScrollToTopButton />
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-coffee" element={<OurCoffee />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/new-shop" element={<NewShop />} />
        <Route path="/product-detail" element={<Product_detail /> } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Our_cart /> } />
        <Route path="/*" element={<PageNotFound />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
