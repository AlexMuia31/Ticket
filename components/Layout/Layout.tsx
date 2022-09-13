import Header from "../Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
