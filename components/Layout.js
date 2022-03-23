import Header from "./Header";

const Layout = ({ children, page }) => {
  return (
    <>
      <head>
        <title>Infocrypto - {page}</title>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit&display=swap"
          rel="stylesheet"
        ></link> */}
      </head>
      <Header />

      {children}
    </>
  );
};

export default Layout;
