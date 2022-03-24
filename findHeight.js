const ratio = '16:9';
const width = 900;
const findHeight = (ratio = '', width = 1) => {
   const [w, h] = ratio
   .split(':')
   .map(Number);
   const height = (width * h) / w;
   return Math.round(height);
};
console.log(findHeight(ratio, width));