import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <div className='flex flex-col h-screen'>

        <main className="flex flex-col flex-grow items-center mb-5">
          <Banner />

        </main>
        <Footer />


      </div>
    </>
  );
}

export default Home;