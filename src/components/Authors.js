const Authors = ({ authors }) => {
  return authors ? (
    authors?.map((author, i) => (
      <p key={i} className="text-sm font-light">
        {author}
      </p>
    ))
  ) : (
    <p className="text-sm text-red-500">No Authors Listed</p>
  );
};

export default Authors;
