// import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div>
      <Navbar />
      <main className="pt-18">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
