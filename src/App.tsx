import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import Experience from "./Experience";
import Header from "./Header";
import Hero from "./Hero";
import Skill from "./Skill";

import BlogList from "./pages/Blog/BlogList";
import BlogDetail from "./pages/Blog/BlogDetail";
import SignIn from "./pages/SignIn";
import BlogEditor from "./pages/BlogEditor";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skill />
      <Experience />
      <Project />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/editor" element={<BlogEditor />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/blog/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
