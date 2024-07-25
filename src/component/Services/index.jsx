function Services() {
  const serviceBox = [
    {
      imgBox: "./images/pro1.svg",
      title: "Product Design",
      description:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    },
    {
        imgBox: "./images/pro2.svg",
        title: "Visual Design",
        description:
          "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      },
      {
        imgBox: "./images/pro3.svg",
        title: "Art Direction",
        description:
          "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      }
  ];
  return (
    <section className="bg[#F3EFEC] py-14 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-[24px]">
          {serviceBox.map((serivces, index) => (
            <div key={index} className="text-center">
              <figure className="mb-[42px]">
                <img className="mx-auto" src={serivces.imgBox} alt="" />
              </figure>
              <h2 className="mb-[12px] text-xl font-semibold">{serivces.title}</h2>
              <p className="text-base">{serivces.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
