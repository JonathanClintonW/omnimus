import Link from "next/link";
const Home = () => {
  return (
    <main className="h-[calc(100vh-80px)] p-4">
      <div className="grid grid-cols-2 px-8 py-12 justify-between h-full">
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
              className="bg-turqoise-gradient text-white px-4 py-2 rounded-md font-medium"
            >
              Explore
            </Link>
          </div>
        </div>
        <div className="flex items-end justify-end">
          <div className="flex flex-col w-2/4">
            <h2 className="font-bold text-xl pb-4">
              The ideas that improve your products
            </h2>
            <p className="font-medium text-sm text-dark_gray dark:text-light_gray">
              We provide cutting-edge web development and design solutions to
              help you achieve your business goals and elevate your online
              presence.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;