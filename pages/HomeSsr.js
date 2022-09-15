import NavbarBottom from "../components/navbarBottom";
import Search from "../components/search";
import HomeContent from "../components/content/homeContentSsr";
import Head from "next/head";

function HomeSsr(props) {
  const newRecipe = props.newRecipe;
  const category = props.category;
  const popular = props.popular;

  return (
    <>
      <Head>
        <title>Alamanak - Ala Makanan Enak</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div className="container box-shadow">
        <Search />
        <HomeContent newRecipe={newRecipe} category={category} popular={popular} />
        <NavbarBottom />
      </div>
    </>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const getCategory = await fetch(`${process.env.BASE_URL}/category_recipe`);
  const category = await getCategory.json();
  console.log("ini castegory", category);
  
  const getNewRecipe = await fetch(`${process.env.BASE_URL}/recipe/find/latest`);
  const newRecipe = await getNewRecipe.json();
  
  const getPopularRecipe = await fetch(`${process.env.BASE_URL}/recipe/find/popular`);
  const popular = await getPopularRecipe.json();
  
  // Pass data to the HomeSsr via props
  return { props: { newRecipe, category, popular } };
}


export default HomeSsr;
