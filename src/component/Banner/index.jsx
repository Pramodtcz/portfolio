

function Banner( {title, heading, paragraph, image} ) {
  return (
    <div className="flex flex-wrap sm:flex-wrap justify-between">
      <div className="flex-auto">
        <h2 className="text-light text-[20px] font-semibold">
          {title}
        </h2>
        <h1 className="text-[68px] font-semibold my-5">{heading}</h1>
        <p>
          {paragraph}
        </p>
        <button className="py-4 px-12 bg-dark text-white mt-[48px]">
          Contact
        </button>
      </div>

      <div>
        <figure>
          <img src={image} alt="" />
        </figure>
      </div>
    </div>
  );
}

export default Banner;
