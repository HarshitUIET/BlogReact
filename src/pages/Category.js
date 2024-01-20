import { useContext } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import Blogs from "../components/Blogs";

  function Category() {
  
       const {posts} = useContext(AppContext);
      const location = useLocation();
     const navigate = useNavigate();
     const category = location.pathname.split('/').at(-1).replaceAll("-"," ");

    return (
        <div className=" relative">
         <div>
          <Header/>
         </div>
         <div className="fixed left-48 top-24">
           <button className="border-2 border-gray-300 py-1 px-4 rounded-md" onClick={()=>{navigate(-1)}}>Back</button>
         </div>
         <div className="  mb-9 mt-14 flex flex-col items-center">
         <Blogs/>
         <Pagination/>
         </div>
        </div>
    )
  }

  export default Category;