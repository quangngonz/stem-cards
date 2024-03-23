const loadData = (blankData) => {
  let data = blankData;

  for (let i = 0; i < data.length; i++) {
    const person = data[i];
    const { name, rarity, img, occupation } = person;
    const person_local_storage = `${name}_${rarity}_${img}_${occupation}`;

    const storedData = localStorage.getItem(person_local_storage);
    if (storedData) {
      const { name, rarity, img, occupation, collected } =
        JSON.parse(storedData);
      if (
        name === name &&
        rarity === rarity &&
        img === img &&
        occupation === occupation
      ) {
        person.collected = collected;
      }
    } else {
      person.collected = false;
    }

    data[i] = person;
  }
  //   console.log("Data: ", data);
  return data;
};

export default loadData;
