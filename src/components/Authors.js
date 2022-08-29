const Authors = ({ authors }) => {
  return authors ? (
    authors?.map((author, i) => (
      <p key={i} className="text-sm sm:text-base font-light">
        {author}
      </p>
    ))
  ) : (
    <p className="text-sm sm:text-base text-red-500">No Authors Listed</p>
  );
};

export default Authors;
