const getQuoteWrappedStringFromObj = (object) => {
  const userDataArray = Object.values(object);
  return userDataArray.map((data) => `"${data}"`).join(',');
};

export default getQuoteWrappedStringFromObj;
