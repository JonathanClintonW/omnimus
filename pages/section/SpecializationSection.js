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
    image: "/agency.jpg",
    link: "/web-development",
  },
  {
    id: "02",
    title: "Creative Design",
    description:
      "Creating visually compelling designs that captivate and engage your audience.",
    details:
      "Our design solutions are innovative, user-friendly, and tailored to enhance your brand’s visual identity.",
    image: "/agency.jpg",
    link: "/creative-design",
  },
  {
    id: "03",
    title: "Digital Marketing",
    description:
      "Implementing effective digital marketing strategies to increase your online presence.",
    details:
      "We offer comprehensive digital marketing services, including SEO, social media marketing, and PPC campaigns, to drive traffic and boost conversions.",
    image: "/agency.jpg",
    link: "/digital-marketing",
  },
];

const SpecializationSection = () => {
  return (
    <div>
      <div className="w-full flex items-center font-bold text-lg border-b-4 border-black dark:border-white py-4 mb-8">
        <h2>SPECIALIZATION</h2>
      </div>
      <div>
        {specializations.map((specialization) => (
          <div
            key={specialization.id}
            className="grid grid-cols-1 gap-2 md:grid-cols-3 mb-8 border-b border-dark_gray pb-6"
          >
            <div>
              <p className="font-semibold text-gray">{specialization.id}/</p>
              <h2 className="font-bold text-2xl">{specialization.title}</h2>
            </div>
            <div>
              <img
                src={specialization.image}
                alt={specialization.title}
                className="w-full h-auto bg-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-xl">{specialization.description}</h3>
              <p className="font-medium text-sm text-dark_gray dark:text-light_gray py-2">
                {specialization.details}
              </p>
              <div className="flex mt-2">
                <Link href={specialization.link} className="flex hover-container">
                  <span className="font-semibold bg-black text-white dark:bg-white dark:text-black rounded-full px-4 py-2 flex items-center justify-center">
                    EXPLORE MORE
                  </span>
                  <div className="ml-2 flex items-center justify-center h-10 w-10 rounded-full bg-turqoise-gradient arrow-hover">
                    <FaArrowRight className="text-white" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecializationSection;
