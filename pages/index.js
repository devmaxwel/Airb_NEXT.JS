import Head from 'next/head';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';


export default function Home({exploreData, cardsData}) {

  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Airbnb Clone By OpenLabs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      {/* Main */}
      <main className="max-w-5xl mx-auto px-8 sm:px-16">
        <section className="pt-6 ">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* API Data */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            {exploreData?.map((item, index) => {
              return (
                <SmallCard
                  key={index}
                  image={item.img}
                  location={item.location}
                  distance={item.distance}
                />
              );
            })}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map((item, index) => {
              return (
                <LargeCard key={index} image={item.img} title={item.title} />
              );
            })}
          </div>
        </section>
        <MediumCard 
        title='The Greatest Outdoors'
        description='Wishlists curated by Airbnb'
        buttonText='Get Inspired'
        image="https://links.papareact.com/4cj/" />
      </main>
      <Footer />
    </div>
  );
}

export async function  getStaticProps(){
     const exploreData = await fetch("https://links.papareact.com/pyp").then((res) => res.json()).catch((error) => console.error(error.message)); 
     
     const cardsData = await fetch("https://links.papareact.com/zp1")
       .then((res) => res.json())
       .catch((err) => console.error(err.message));
     return {
       props:{
         exploreData,
         cardsData
       }
     }
}
