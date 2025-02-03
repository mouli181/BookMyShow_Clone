// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Book from "./components/images/book.jsx";
import LogIn from "./components/LogIn/LogIn.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import New from "./components/new/new.jsx";
// import SignIn from './components/signIn/signIn.jsx';
import Footer from "./components/footer/footer.jsx";
// import Cast from './components/new/cast/cast.jsx';
// import Events from  "./components/events/events.jsx"
import { useState } from "react";

function App() {
  return (
    <BrowserRouter>
        <div className="APP">
          <Navbar />
          <Routes>
            <Route path="/" element={<Book />} />
            <Route path="/new" element={<New />} />
            <Route path="logIn" element={<LogIn />} />
          </Routes>
          <Footer />
        </div>
    </BrowserRouter>
  )
}

export default App;
