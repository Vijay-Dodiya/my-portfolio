export const getImageUrl = (path) => {
  console.log("called when i wanted to call");
  return new URL(`/assets/${path}`, import.meta.url).href;
};
