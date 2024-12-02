import {Image} from "@nextui-org/react";
import { Layout } from "@/components/Layout/Layout";

function Home() {
  return (
    <Layout className="flex items-center">
      <div className="w-full flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-24 px-4 sm:px-8 md:px-12 lg:px-4">
        <div className="relative aspect-square w-28 sm:w-36 md:w-44 lg:w-[420px] rounded-full overflow-hidden outline outline-4 outline-neutral-200 dark:outline-neutral-700 shadow">
          <Image
            isZoomed
            src="/images/profile.png"
            alt="me"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full"
          />
        </div>
        <div className="text-center mt-4 lg:text-left">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl text-neutral-800 dark:text-secondary font-bold">
              Curious Mind, Dedicated Student, and <span className="text-primary">Software Engineer.</span>
            </h1>
            <p className="mt-4 text-neutral-600 dark:text-text md:text-xl md:mt-6">
              {"I'm Fattah Arif Nugroho, a student, and a budding software engineer from Semarang, Indonesia."}
            </p>
          </div>
      </div>
    </Layout>
  );
}

export default Home;
