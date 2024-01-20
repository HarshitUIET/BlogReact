import { useContext } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import Blogs from "../components/Blogs";

function Tag() {
  
    
      const {posts} = useContext(AppContext);
      const location = useLocation();
      const navigate = useNavigate();
      const tag = location.pathname.split('/').at(-1).replaceAll("%20"," ");

      return (
        <div className=" relative flex flex-col items-center">
        <div>
          <Header/>
        </div>
        <div className=" fixed left-28 top-20">
          <button  className="border-2 border-gray-300 py-1 px-4 rounded-md" onClick={()=>navigate(-1)}>Back</button>
        </div>
        <div className="  mt-24">
        <span className="text-3xl font-bold">Blogs on {tag}</span>
        </div>
        <div>
          <Blogs/>
          <Pagination/>
        </div>
       </div>
      )
    
  
}

export default Tag;