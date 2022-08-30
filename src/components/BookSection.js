const BookSection = ({ heading, title, subtitle }) => {
  return (
    <header className="flex flex-col md:flex md:flex-row md:items-center md:space-x-10 w-full">
      <div className="flex flex-1 justify-between items-center">
        <div className="">
          <h1 className="uppercase text-gray-6 font-medium font-monty text-sm md:text-xs tracking-widest">
            {heading}
          </h1>
          <h3
            className={`${
              subtitle ? "mb-1" : "mb-4"
            } text-dark-1 text-3xl font-bold leading-snug lg:leading-snug whitespace-pre-wrap`}>
            {title}
          </h3>
          {subtitle && <p className="mb-2 text-lg font-light">{subtitle}</p>}
        </div>
      </div>
    </header>
  );
};

export default BookSection;
