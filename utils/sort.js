export const sortByDate = (a, b) => {
  return new Date(b.publishedAt) - new Date(a.publishedAt);
};
