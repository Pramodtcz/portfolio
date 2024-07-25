import { useState } from "react";
import Modal from "../Modal";
function Portfolio() {
  const portfolioBox = [
    {
      portfolioImage: "./images/p1.jpg",
      title: "Project title 1",
      description: "UI, Art drection",
    },
    {
      portfolioImage: "./images/p2.jpg",
      title: "Project titl 2e",
      description: "UI, Art drection",
    },
    {
      portfolioImage: "./images/p3.jpg",
      title: "Project title 3",
      description: "UI, Art drection",
    },
    {
        portfolioImage: "./images/p4.jpg",
        title: "Project title 3",
        description: "UI, Art drection",
    },
    {
        portfolioImage: "./images/p5.jpg",
        title: "Project title 3",
        description: "UI, Art drection",
    },
    {
        portfolioImage: "./images/p6.jpg",
        title: "Project title 3",
        description: "UI, Art drection",
    }
  ];

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <section className="py-14 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-[24px]">
            {portfolioBox.map((portfolio, index) => (
              <div key={index} onClick={()=>(<Modal img={portfolio.portfolioImage} isOpen={isOpen} />)}>
                <figure className="mb-[24px]">
                  <img src={portfolio.portfolioImage} alt="" />
                </figure>
                <h3 className="mb-[10px]">{portfolio.title}</h3>
                <p>{portfolio.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
