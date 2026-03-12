
import Navbar from "@/components/home/Navbar";
import "../globals.css";
import Footer from "@/components/home/Footer";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
         <Navbar/>
      <div>
        {children}
      </div>
       <Footer/>
    </div>
  );
}