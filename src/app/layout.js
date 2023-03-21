import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Providers from "./Providers";
export const metadata = {
  title: "IMDB Clone",
  description: "This is IMDB clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />
          {/*Nav*/}
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
