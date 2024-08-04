import Link from "next/link";

const MainSection = () => {
  return (
    <section className="grid md:grid-cols-2 md:px-8 py-12 justify-between min-h-[95vh] transition-background duration-500 radial-gradient-light dark:radial-gradient-dark">
      <div className="flex flex-col items-start justify-start">
        <h3 className="font-bold md:text-2xl pl-1 text-gradient-turquoise">
          OMNIMUS
        </h3>
        <div className="w-full mb-4">
          <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl">
            DIGITAL
          </h1>
          <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl text-center">
            AGENCY
          </h1>
        </div>
        <div className="flex w-full p-4">
          <Link
            href="/projects"
            className="bg-turqoise-gradient text-white px-4 py-2 rounded-md font-medium hover:scale-105 transition duration-300 shadow-outside-glow"
          >
            Explore
          </Link>
        </div>
      </div>
      <div className="flex items-center md:items-end justify-end md:mb-12">
        <div className="flex flex-col w-2/4">
          <h2 className="font-bold text-xl pb-4">
            The ideas that improve your products
          </h2>
          <p className="font-medium text-sm text-dark_gray dark:text-light_gray">
            Our agency provides innovative solutions for your company's
            challenges, ensuring your business thrives in the digital landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
