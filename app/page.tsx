import HeroSection from "@/components/hero-section";
import Head from "next/head";

export const metadata = {
  title: "Miran | Photography",
  description:
    "Discover the art of photography through Miran's lens. A curated collection of captivating portraits, breathtaking landscapes, and emotive photography that tells stories and captures timeless moments.",
  icons: {
    icon: "/favicon.png",
  },
};

const HomePage = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <HeroSection />
    </>
  );
};

export default HomePage;
