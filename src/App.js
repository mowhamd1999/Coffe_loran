import "./App.css";
import Header from './features/Header/Header'
import Footer from "./features/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './features/Main/Main'
import Category from "./components/Category/Category";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/"  element = {<Main />}/>
          <Route path="/category/:category" element={<Category />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
