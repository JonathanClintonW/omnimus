import React from "react";

const WebDevelopment = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-4">
      <section className="flex items-start justify-start">
        <div className="flex flex-col max-w-lg">
          <h1 className="font-bold text-4xl">WEB DEVELOPMENT & DESIGN</h1>
          <p className="font-semibold">
            We provide cutting-edge web development and design solutions to help
            you achieve your business goals and elevate your online presence. Transforming Businesses With Innovative Digital Solutions. Our team leverages the latest technologies to create customized digital strategies that drive growth and enhance user engagement.
          </p>
        </div>
      </section>

      <div className="text-black flex gap-4">
        <div className="flex flex-col w-80 shadow-xl">
          <h2 className="font-bold text-xl text-center p-2 border-b-2">AI-Powered Automation</h2>
          <p className="text-justify p-2">
            Leverage the power of AI to automate your systems and assist users
            effectively. Our AI solutions integrate seamlessly into your web
            applications, providing intelligent automation and personalized
            assistance.
          </p>
        </div>
        <div className="flex flex-col w-80 shadow-xl">
          <h2 className="font-bold text-xl text-center p-2 border-b-2">Responsive Design</h2>
          <p className="text-justify p-2">
            Our responsive designs ensure that your website looks great and
            functions flawlessly on all devices.
          </p>
        </div>
        <div className="flex flex-col w-80 shadow-xl">
          <h2 className="font-bold text-xl text-center p-2 border-b-2">Custom Web Applications</h2>
          <p className="text-justify p-2">
            Our team specializes in creating custom web applications tailored to
            your unique business needs. From concept to deployment, we deliver
            solutions that drive efficiency and innovation.
          </p>
        </div>
      </div>
    </main>
  );
};

export default WebDevelopment;
