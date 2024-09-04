"use client";
import About from "./components/about/About";
import Dapp from "./components/dapp/Dapp";
import Features from "./components/features/Features";
import Header from "./components/header/Header";
import Info from "./components/info/Info";
import Referral from "./components/referral/Referral";
import Why from "./components/why/Why";
import { useStateContext } from "./util/StateContext";

export default function Home() {
  const { state } = useStateContext();

  return (
    <>
      {!state && (
        <main className="w-full h-full">
          <Header />
          <About />
          <Why />
          <Features />
          {/* <Info /> */}
          <Referral />
          <Dapp />
        </main>
      )}
    </>
  );
}
