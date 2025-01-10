import Head from "next/head";
import AboutSection from "./AboutSection";
import ImageGrid from "./ImageGrid";
export default function About() {
  return (
    <>
      <Head>
        <title>Restoran</title>
        <meta name="description" content="Welcome to our restaurant!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white text-gray-900 font-sans">
        <div className="container mx-auto py-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Image Grid */}
            <ImageGrid />

            {/* About Section */}
            <AboutSection />
          </div>
        </div>
      </main>
    </>
  );
}
