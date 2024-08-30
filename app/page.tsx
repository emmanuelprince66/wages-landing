import About from "./components/about/About";
import Header from "./components/header/Header";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Header/>
      <About/>
    </main>
  );
}
