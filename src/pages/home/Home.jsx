import Banner from "../../components/banner/Banner";
import Categories from "../../components/categories/Categories";
import PopularLinks from "../../components/popularLinks/PopularLinks";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <div className='flex flex-col h-screen'>

        <main className="flex flex-col flex-grow items-center mb-5">
          <Banner />
          <Categories />
          <div className="ml-10">
          <PopularLinks />

          </div>

        </main>
        <Footer />


      </div>
    </>
  );
}

export default Home;