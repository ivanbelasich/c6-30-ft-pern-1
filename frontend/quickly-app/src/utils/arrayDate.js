export const arrayDate = (from, to) => {
  let newArr = [];
  for (let i = from; i < to; i++) {
    newArr.push(`${i}:00`, `${i}:30`);
  }
  return newArr;
};
