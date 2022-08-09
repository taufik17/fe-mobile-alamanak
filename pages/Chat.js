import NavbarBottom from "../components/navbarBottom";
import Head from "next/head";
function Chat() {
  return (
    <>
      <Head>
        <title>Chat | Alamanak</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
    <div className="container">
      <NavbarBottom />
      <h1>Chat Page</h1>
    </div>
    </>
  );
}

export default Chat;