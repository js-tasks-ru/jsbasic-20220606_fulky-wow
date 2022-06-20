function getMinMax(str) {
  const res = str.split(' ')
    .map(string => +string);
  const num = [];
  for (let key of res) {
    if (!Number.isNaN(key)) {
      num.push(key)
    }
  }
  const minNum = Math.min(...num);
  const maxNum = Math.max(...num);
  return {
    min: minNum,
    max: maxNum,
  };
}
