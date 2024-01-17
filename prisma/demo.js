const parentObject = {
  someProperty: "someValue",
  nestedObject: {
    flatPlotNo: "45",
    area: "asdas",
    city: "Aurangabad",
    state: "Maharashtra",
    pincode: "431009",
  },
};

// Using spread operator to create a new object with a shallow copy of the nested object
const newParentObject = {
  ...parentObject,
  ...parentObject.nestedObject,
};

console.log(newParentObject);
