import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Project from "./Project";
import Experience from "./Experience";
import Header from "./Header";
import Hero from "./Hero";
import Skill from "./Skill";

import BlogList from "./pages/Blog/BlogList";
import BlogDetails from "./pages/Blog/BlogDetail";
import SignInPage from "./pages/SignInPage";
import BlogEditor from "./pages/BlogEditor";
import Dashboard from "./pages/Dashboard";

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

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded)
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center text-white">
        Loading...
      </div>
    );
  if (!isSignedIn) return <Navigate to="/signin" />;

  return <>{children}</>;
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/blog"
          element={
            <ProtectedRoute>
              <BlogList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <ProtectedRoute>
              <BlogDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blog/editor"
          element={
            <ProtectedRoute>
              <BlogEditor />
            </ProtectedRoute>
          }
        />

        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signin/sso-callback" element={<SignInPage />} />
        <Route path="/signin/factor-one" element={<SignInPage />} />
        <Route path="/signin/factor-two" element={<SignInPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
