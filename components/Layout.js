import Header from "./Header";

const Layout = ({ children, page }) => {
  return (
    <>
      <head>
        <title>Banacrypt - {page}</title>
      </head>
      <Header />

      {children}
    </>
  );
};

export default Layout;
