export const shelves = [
  { id: 1234, slug: "currentlyReading", heading: "Currently Reading" },
  { id: 2345, slug: "wantToRead", heading: "Want To Read" },
  { id: 3456, slug: "read", heading: "Read" },
];

export const findShelfIndex = (item) => {
  switch (item.shelf) {
    case "currentlyReading":
      return 0
    case "wantToRead":
      return 1
    case "read": 
      return 2
    default:
      return null
  }
}
