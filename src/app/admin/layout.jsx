import Navbar from "../components/user/Navbar";
export default function AdminLayout({ children }) {
  return (
    <>
    <Navbar/>
    <main className="pt-16">{children}</main>
    </>
  );
}