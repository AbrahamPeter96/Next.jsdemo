import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <h1 className="text-red-400">Home</h1>
    </>
  );
}
