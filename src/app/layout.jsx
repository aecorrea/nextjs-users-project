import Navbar from "../components/Navbar";
import { Roboto } from "next/font/google";
import "@/src/app/globals.css"

export const metadata = {
  title: "Mi Tienda con Next JS - HomePage",
  description: "Esta es la Pagina principal de mi tienda",
  keywords: "tienda, online, ecommerce",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"]

});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        
      </body>
    </html>
  );
}
