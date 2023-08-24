import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { NavMobile } from "./components/mobile-nav/Nav";
import { AiProfile } from "./components/pages/AiProfile/Aiprofile";
import { Home } from "./components/pages/Home/Home";
import { Sidebar } from "./components/sidebar/Sidebar";
import { SignUp } from "./components/signup/signUp";
import { HowItWorks } from "./components/pages/HowItWorks/HowItWorks";
import { SignIn } from "./components/signIn/Signin";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="md:flex md:relative">
      {/* <div className="container py-10 px-4 pb-20 md:pb-0 md:px-0 md:w-[86%] md:absolute md:left-[13%] flex flex-col gap-16 justify-center items-center">
      <Header />
      <Home />
      <Footer />
    </div> */}

      {/* <AiProfile /> */}
      <BrowserRouter>
        <NavMobile />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/ai_profile" element={<AiProfile />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>
        <ToastContainer

        position="top-center"
        
        
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
