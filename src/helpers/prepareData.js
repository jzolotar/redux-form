export const prepareData = (values) => {
  if (values.dishType === 'pizza') {
    const { dishName, prepTime, dishType, pizzaSlice, diameter } = values;
    const data = {
      dishName,
      prepTime,
      dishType,
      pizzaSlice,
      diameter,
    };
    return data;
  }
  if (values.dishType === 'soup') {
    const { dishName, prepTime, dishType, spicinessScale } = values;
    const data = {
      dishName,
      prepTime,
      dishType,
      spicinessScale,
    };
    return data;
  }
  if (values.dishType === 'sandwich') {
    const { dishName, prepTime, dishType, sandiwchNumOFslices } = values;
    const data = {
      dishName,
      prepTime,
      dishType,
      sandiwchNumOFslices,
    };
    return data;
  }
};
