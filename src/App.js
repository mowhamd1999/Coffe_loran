import "./App.css";
import Header from './features/Header/Header'
import Footer from "./features/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './features/Main/Main'
import Category from './features/Category/Category'
import Product from './features/Product/Product'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/"  element = {<Main />}/>
          <Route path="/category/:category" element={<Category />}/>
          <Route path="/category/:category/:name" element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
