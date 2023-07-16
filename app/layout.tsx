import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "./layout.scss";
import { Nanum_Gothic } from "next/font/google";

const nanum_gothic = Nanum_Gothic({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "How many days left until Yoon Seok Yeol's term ends?",
  description: "the number of days left until Yoon Seok Yeol's term ends",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={nanum_gothic.className}>
        {/* <body> */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
