import Banner from "../../components/banner/Banner";
import Categories from "../../components/categories/Categories";
import PopularLinks from "../../components/popularLinks/PopularLinks";
import RecentUpdates from "../../components/recentUpdates/RecentUpdates";
import Calendar from "../../components/calendar/Calendar";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/buttons/TopButton";

const Home = () => {
  return (
    <>
      <div className='flex flex-col h-screen'>

        <main className="flex flex-col flex-grow items-center mb-5">
          <Banner />
          <Categories />
          <div className="mx-10 max-w-screen-2xl">
            <PopularLinks />
            <div className="mt-8 font-OpenSans grid w-full grid-rows-1 grid-cols-1 md:grid-cols-2 gap-8">
              <RecentUpdates />
              <Calendar />

            </div>
              <TopButton/>

          </div>

        </main>
        <Footer />


      </div>
    </>
  );
}

export default Home;