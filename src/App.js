import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Tag from "./pages/Tag";
import BlogPage from './pages/BlogPage';
import { Routes,Route } from "react-router-dom";
import { baseUrl } from "./baseUrl";
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);
   const location = useLocation();
   const [searchParams,SetSearchParams] = useSearchParams();

     
   
  useEffect(() => {

           let page = searchParams.get('page') ?? 1;
     
         if(location.pathname.includes('tags')) {
              const tag = location.pathname.split('/').at(-1).replaceAll("-"," ");
              fetchBlogPosts(Number(page),tag);
         }
         else if(location.pathname.includes('categories')) {
            const category = location.pathname.split('/').at(-1).replaceAll("-"," ");
            fetchBlogPosts(Number(page),null,category);
         }
         else{
          fetchBlogPosts(Number(page));
         }
  }, [location.pathname,location.search]);

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/blog/:blogId" element={<BlogPage/>} />
      <Route path="/tags/:tag" element={<Tag/>} />
      <Route path="/categories/:category" element={<Category/>} />
    </Routes>
  );
}
