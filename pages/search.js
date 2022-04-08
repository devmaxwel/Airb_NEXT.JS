import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import InfoCard from "../components/InfoCard";

function Search({searchResult}) {
  const router = useRouter();
  // ES6 destructuring
  const { location, startDate, endDate, guests } = router.query;
  console.log(searchResult)

  const formatedStartDate = format(new Date(startDate), "dd MMMM yy");

  const formatedEndDate = format(new Date(endDate), "dd MMMM yy");

  const range = `${formatedStartDate} - ${formatedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${guests}`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-4">
          <p className="text-xs">
            300+ stays - {range} - for {guests}{" "}
            {guests > 1 ? "guests" : "guest"}
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-3 px-4 space-x-3 text-1xl text-gray-500 whitespace-nowrap">
            <p className="button">Cancellation Flexibity</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
          <div className="flex flex-col">
            {searchResult?.map((searchResults, index) => {
              return (
                <InfoCard
                  key={index}
                  image={searchResults.img}
                  title={searchResults.title}
                  location={searchResults.location}
                  description={searchResults.description}
                  price={searchResults.price}
                  star={searchResults.star}
                  total={searchResults.total}
                />
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResult = await fetch("https://links.papareact.com/isz")
    .then((res) => res.json())
    .catch((err) => err.message);

  return {
    props: {
      searchResult,
    },
  };
}
