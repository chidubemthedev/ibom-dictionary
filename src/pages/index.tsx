import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ibom Dictionary</title>
        <meta name="description" content="From idea to product, like magic!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <Nav />
        <Header />
      </div>
    </>
  );
}