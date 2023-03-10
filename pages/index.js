import FavoriteFoods from "@/sections/FavoriteFoods";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import RegularFoods from "@/sections/RegularFoods";
import SpecialMenu from "@/sections/SpecialMenu";
import TypeFoods from "@/sections/TypeFoods";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>FOODID</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logo-foodid.png" />
      </Head>
      <main className="h-full">
        <Header />
        <FavoriteFoods />
        <TypeFoods />
        <SpecialMenu />
        <RegularFoods />
        <Footer />
      </main>
    </>
  );
}
