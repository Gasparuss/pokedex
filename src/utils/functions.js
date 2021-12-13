export const getIDStringfromID = (id) => {
  if (id >= 10 && id < 100) return `0${id}`;
  if (id >= 100) return `${id}`;
  return `00${id}`;
};

export const getImageSourcefromID = (id) => {
  return `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${getIDStringfromID(
    id
  )}.png`;
};

export const toFirstCharUppercase = (name) =>
  name.charAt(0).toUpperCase() + name.slice(1);
