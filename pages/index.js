import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";


const Home = () => {
  return (
    <main className="p-4">
      <div className="flex flex-col justify-between">
        <div className="grid grid-cols-2 px-8 py-12 justify-between min-h-[90vh]">
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
                className="bg-turqoise-gradient text-white px-4 py-2 rounded-md font-medium hover:scale-105 transition duration-300"
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
        <div className="col-span-2 flex flex-col justify-end">
          <div className="w-full flex items-center justify-center font-bold text-2xl border-b-4 border-black dark:border-white py-4 mb-8">
            <h2>SPECIALIZATION</h2>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Link href="/web-development" className="border border-turqoise rounded-md px-4 py-4 hover-container hover:border-black dark:hover:border-white transition duration-300">
              <div className="border-b border-black dark:border-white pb-2 flex items-center">
                <h3 className="font-semibold">Web Development</h3>
                <div>
                  <FaArrowRight className="ml-2 arrow-hover" />
                </div>
              </div>
              <p className="font-medium text-sm text-dark_gray dark:text-light_gray py-2">
                Our web development team specializes in creating dynamic and
                responsive websites tailored to your business needs.
              </p>
            </Link>

            <Link href="/creative-design" className="border border-turqoise rounded-md px-4 py-4 hover-container hover:border-black dark:hover:border-white transition duration-300">
              <div className="border-b border-black dark:border-white pb-2 flex items-center">
                <h3 className="font-semibold">Creative Design</h3>
                <div>
                  <FaArrowRight className="ml-2 arrow-hover" />
                </div>
              </div>
              <p className="font-medium text-sm text-dark_gray dark:text-light_gray py-2">
                Our creative design team brings your ideas to life with
                innovative and visually stunning designs.
              </p>
            </Link>

            <Link href="/digital-marketing" className="border border-turqoise rounded-md px-4 py-4 hover-container hover:border-black dark:hover:border-white transition duration-300">
              <div className="border-b border-black dark:border-white pb-2 flex items-center">
                <h3 className="font-semibold">Digital Marketing</h3>
                <div>
                  <FaArrowRight className="ml-2 arrow-hover" />
                </div>
              </div>
              <p className="font-medium text-sm text-dark_gray dark:text-light_gray py-2">
                We help you reach a broader audience and boost your online
                presence with our effective digital marketing strategies.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;