import BookCard from "../component/Card/BookCard";
import Homecard1 from "../component/Card/Homecard1";
import StationeryProduct from "./product/StationeryProduct";

const Home = () => {
  return (
    <div className="block ">
      <section className="">
        <StationeryProduct />
      </section>
      <section className="flex">
        <div className="relative flex items-center justify-center w-full h-64 px-4 sm:h-80 lg:h-96 sm:px-6 lg:px-8">
          <img
            className="object-cover w-full h-full rounded-xl"
            src="https://mikirei.com/uploads/3ff9d441e62ae52d1800682cbf11d89a850824c1.jpg"
            alt="Hero banner"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center px-6 sm:px-12 lg:px-16">
            <h1 className="max-w-xs text-2xl italic font-bold text-black sm:text-3xl lg:text-4xl xl:text-5xl sm:max-w-sm lg:max-w-md">
              Your story{" "}
            </h1>
            <h1 className="max-w-xs text-2xl italic font-bold text-right text-black sm:text-3xl lg:text-4xl xl:text-5xl sm:max-w-sm lg:max-w-md">
              starts here
            </h1>
          </div>
        </div>
      </section>

      <section>
        <div className="p-4 sm:p-6 lg:p-8">
          <Homecard1 />
        </div>
      </section>
      <section className="p-4 sm:p-6 lg:p-8">
        <BookCard />
      </section>
    </div>
  );
};

export default Home;
