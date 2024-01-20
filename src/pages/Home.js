import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

  function Home() {
    return (
        <>
      <Header />
      <div className="my-[100px]">
        <Blogs />
        <Pagination />
      </div>
    </>
    )
  }

  export default Home;