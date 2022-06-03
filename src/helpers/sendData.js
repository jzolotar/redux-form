export const sendData = async (data) => {
  const url = 'https://frosty-wood-6558.getsandbox.com:443/dishes';
  const newData = prepareData(data);
  try {
    let res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newData),
    });

    let resJSON = await res.json();
    console.log(res);

    //handle 400 error
    if (!res.ok) {
      return { errors: resJSON };
    }
    return resJSON;
  } catch (error) {
    console.log(error);
  }
};

const prepareData = (values) => {
  if (values.type === 'pizza') {
    const { name, preparation_time, type, no_of_slices, diameter } = values;
    const data = {
      name,
      preparation_time,
      type,
      no_of_slices: Number(no_of_slices),
      diameter: Number(diameter),
    };
    return data;
  }
  if (values.type === 'soup') {
    const { name, preparation_time, type, spiciness_scale } = values;
    const data = {
      name,
      preparation_time,
      type,
      spiciness_scale: Number(spiciness_scale),
    };
    return data;
  }
  if (values.type === 'sandwich') {
    const { name, preparation_time, type, slices_of_bread } = values;
    const data = {
      name,
      preparation_time,
      type,
      slices_of_bread: Number(slices_of_bread),
    };
    return data;
  }
};
