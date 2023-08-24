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
import { Toaster } from "react-hot-toast";
import Threads from "./components/pages/Threads/Threads";
import Popular from "./components/pages/popular/popular";

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
          <Route path="/my_threads" element={<Threads />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </div>
  );
}

export default App;
