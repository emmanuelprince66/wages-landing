"use client";
import About from "./components/about/About";
import Header from "./components/header/Header";
import { useStateContext } from "./util/StateContext";


export default function Home() {
  const { state } = useStateContext();


  return (
   <>
     {
      !state && (
        <main className="w-full h-full">
        <Header/>
        <About/>
      </main>
      )
     }
   </>
  );
}
