const CN = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export default CN;
