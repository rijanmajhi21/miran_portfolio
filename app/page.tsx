import HeroSection from "@/components/hero-section";
import Head from "next/head";

export const metadata = {
  title: "Miran | Photography",
  description:
    "Explore the world through the lens of Miran. A collection of stunning portraits, landscapes, and creative photography capturing moments, emotions, and stories.",
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
