const details = [
    {
        title: "Our Commitment",
        description:
            "We support startups and big companies with innovative digital solutions.",
    },
    {
        title: "Best Solutions",
        description:
            "We excel in finding the best solutions tailored to your business needs.",
    },
    {
        title: "Achieve Goals",
        description:
            "From ideation to execution, we help you achieve your business goals.",
    },
];

const SupportSection = () => {
    return (
        <section className="pb-16">
            <div className="w-full flex items-center font-bold text-lg border-b-4 border-black dark:border-white py-4 mb-8">
                <h2>OUR SUPPORT</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {details.map((detail) => (
                    <div className="bg-transparent shadow-md rounded-lg p-4 text-center border-2 border-turqoise hover:border-black dark:hover:border-white bg-transparent transition duration-500">  
                        <h3 className="text-xl font-bold pb-4 mb-2 border-b-2">{detail.title}</h3>
                        <p className="font-semibold">{detail.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SupportSection;
