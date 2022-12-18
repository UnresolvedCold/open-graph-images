import Head from "next/head";

const cardClasses = "bg-zinc-800/60 p-5 rounded-2xl shadow-xl hover:text-zinc-100 hover:ring-4 ring-zinc-800 transition-all";

export default function Home() {
  return (
    <div className="bg-zinc-900 text-white">
      <Head>
        <title>OG Images for Lance Ross</title>
        <meta name="title" content="OG Images for Lance Ross" />
        <meta name="description" content="Open Graph Images template for Lance Ross powered by Next.js and Vercel." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://images.lanceross.xyz" />
        <meta property="og:title" content="OG Images for Lance Ross" />
        <meta property="og:description" content="Open Graph Images template for Lance Ross powered by Next.js and Vercel." />
        <meta property="og:image" content="/api/lanceross?title=OG+Images+for+Lance Ross" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://images.lanceross.xyz" />
        <meta property="twitter:title" content="OG Images for Lance Ross" />
        <meta property="twitter:description" content="Open Graph Images template for Lance Ross powered by Next.js and Vercel." />
        <meta property="twitter:image" content="/api/lanceross?title=OG+Images+for+Lance Ross" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center min-h-screen justify-center relative antialiased">
        <div className="max-w-xl md:max-w-3xl text-lg px-6 pt-10 pb-20 lg:pb-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 tracking-tight">
            Open Graph Images
          </h1>
          <p className="mb-12">
            Get started by generating an Open Graph image down below.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            <a href="/api/lanceross?title=Your+Title+Here" className={`umami--click--main-template ${cardClasses}`}>
              <h2 className="text-xl sm:text-2xl mt-1 mb-3">Main Template</h2>
              <p>This OG Image template is what I use for my personal website.</p>
            </a>
            <a href="/api/old?title=Your+Title+Here" className={`umami--click--old-template ${cardClasses}`}>
              <h2 className="text-xl sm:text-2xl mt-1 mb-3">Old Template</h2>
              <p>This is my old template with I still use Netlify Edge Functions.</p>
            </a>
            <a href="/api/example?text=Hello+Pearl!" className={`umami--click--example-og ${cardClasses}`}>
              <h2 className="text-xl sm:text-2xl mt-1 mb-3">Example</h2>
              <p>Wanna try it? Click this to generate an image with "Hello Pearl!"</p>
            </a>
            <a href="https://vercel.com/" target="_blank" rel="noopener" className={`umami--click--vercel-click ${cardClasses}`}>
              <h2 className="text-xl sm:text-2xl mt-1 mb-3">Deploy</h2>
              <p>Instantly deploy this project template with Vercel.</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
