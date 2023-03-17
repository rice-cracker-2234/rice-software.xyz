import Head from 'next/head';
import Image from 'next/image';
import PageLayout from '@/components/PageLayout';

const Index = () => {
  return (
    <PageLayout>
      <Head>
        <title>Rice Software</title>
        <meta name="robots" content="all" />
        <meta name="canonical" content="https://rice-software.xyz" />
        <meta
          name="description"
          content="A free and open-source site of mine."
        />

        <meta property="og:title" content="Rice Software" />
        <meta property="og:description" content="i build software lol" />
      </Head>

      <div className="relative flex h-[36rem] w-full items-center justify-center">
        <div className="absolute h-[28rem] w-full">
          <Image
            src="/synui.webp"
            alt=""
            fill={true}
            className="rounded-3xl object-contain"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default Index;
