import NavbarBottom from "../components/navbarBottom";
import Search from "../components/search";
import HomeContent from "../components/content/homeContent";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>Alamanak - Ala Makanan Enak</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div className="container box-shadow">
        <Search />
        <HomeContent />
        <NavbarBottom />
      </div>
    </>
  );
}

export default Home;
