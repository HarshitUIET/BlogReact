import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { baseUrl } from "../baseUrl";
import Header from "../components/Header";
import Card from "../components/Card";


function BlogPage() {

     const newBaseUrl = 'https://codehelp-apis.vercel.app/api/';

    const [blog,setBlog] = useState(null);
    const [relatedblogs,setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const {loading,setLoading} = useContext(AppContext);

    const blogId = location.pathname.split('/').at(-1);

    async function FetchRelatedBlogs() {
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        } catch (error) {
            console.log("Error aa gya blogid");
            setBlog(null);
            setRelatedBlogs([]);
        }
         setLoading(false);
    }

    useEffect(()=>{
        if(blogId) {
            FetchRelatedBlogs();
        }
    },[location.pathname]);

    return (
        <div className=" relative">
        <div>
            <Header/>
        </div>
        <div className="  fixed top-32 left-36">
            <button  className="border-2 border-gray-300 py-1 px-4 rounded-md" onClick={()=>{navigate(-1)}}>Back</button>
        </div>
          {
            loading ?
            (<div>
               <p>Loading</p>
            </div>) : 
            blog ? 
            (<div className=" mt-24 flex flex-col items-center">
                <Card post={blog} />
               <div className=" mx-auto text-start max-w-2xl w-11/12 my-4">
               <span className="text-3xl font-bold">Related Blogs</span>
                </div>
                {
                    relatedblogs.map((post,index)=>{
                    
                       return <Card key={index} post={post}/>
                
                    })
                }
            </div>) : (<div>No Blogs Found</div>)
          }
        </div>
    )
}

export default BlogPage;