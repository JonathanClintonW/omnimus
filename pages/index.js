import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const specializations = [
  {
    id: "01",
    title: "Web Development",
    description:
      "Delivering cutting-edge web design and development solutions for a digital-first world.",
    details:
      "We specialize in creating dynamic and responsive websites for your business needs.",
    image: "", // Add the path to your image here
    link: "/web-development",
  },
  {
    id: "02",
    title: "Creative Design",
    description:
      "Creating visually compelling designs that captivate and engage your audience.",
    details:
      "Our design solutions are innovative, user-friendly, and tailored to enhance your brand’s visual identity.",
    image: "", // Add the path to your image here
    link: "/creative-design",
  },
  {
    id: "03",
    title: "Digital Marketing",
    description:
      "Implementing effective digital marketing strategies to increase your online presence.",
    details:
      "We offer comprehensive digital marketing services, including SEO, social media marketing, and PPC campaigns, to drive traffic and boost conversions.",
    image: "", // Add the path to your image here
    link: "/digital-marketing",
  },
];

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

        <div className="col-span-2 flex flex-col min-h-screen">
          <div className="w-full flex items-center justify-center font-bold text-2xl border-b-4 border-black dark:border-white py-4 mb-8">
            <h2>SPECIALIZATION</h2>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Link
              href="/web-development"
              className="border-2 border-turqoise rounded-md px-4 py-4 hover-container hover:border-black dark:hover:border-white transition duration-300"
            >
              <div className="border-b-2 border-black dark:border-white pb-2 flex items-center">
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

            <Link
              href="/creative-design"
              className="border-2 border-turqoise rounded-md px-4 py-4 hover-container hover:border-black dark:hover:border-white transition duration-300"
            >
              <div className="border-b-2 border-black dark:border-white pb-2 flex items-center">
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

            <Link
              href="/digital-marketing"
              className="border-2 border-turqoise rounded-md px-4 py-4 hover-container hover:border-black dark:hover:border-white transition duration-300"
            >
              <div className="border-b-2 border-black dark:border-white pb-2 flex items-center">
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

        <div>
          <div className="w-full flex items-center font-bold text-lg border-b-4 border-black dark:border-white py-4 mb-8">
            <h2>SPECIALIZATION</h2>
          </div>
          <div>
            {specializations.map((specialization) => (
              <div
                key={specialization.id}
                className="grid grid-cols-3 mb-8 border-b border-dark_gray py-4"
              >
                <div>
                  <p className="font-semibold text-gray">
                    {specialization.id}/
                  </p>
                  <h2 className="font-bold text-2xl">{specialization.title}</h2>
                </div>

                <div>
                  <img
                    src={specialization.image}
                    alt={specialization.title}
                    className="w-full h-auto"
                  />
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    {specialization.description}
                  </h3>
                  <p className="font-medium text-sm text-dark_gray dark:text-light_gray py-2">
                    {specialization.details}
                  </p>
                  <div className="flex">
                    <Link
                      href={specialization.link}
                      className="bg-black text-white dark:bg-white dark:text-black rounded-full px-4 py-2 flex items-center justify-center"
                    >
                      EXPLORE MORE
                    </Link>
                    <div className="ml-2 flex items-center justify-center h-10 w-10 rounded-full bg-turqoise-gradient">
                          <FaArrowRight className="text-white" />
                        </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
