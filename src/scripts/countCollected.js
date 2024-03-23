const countCollected = (collected) => {
  let count = 0;
  const total = collected.length;

  for (let i = 0; i < collected.length; i++) {
    if (collected[i].collected) {
      count++;
    }
  }

  //   console.log("Collected: ", count);
  //   console.log("Total: ", total);

  return [count, total];
};

export default countCollected;
