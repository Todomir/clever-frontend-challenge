export default function range(start: number, end: number) {
  const length = end - start + 1;
  if (length <= 0) throw new Error('range length must be greater than 0');
  /*
  	Create an array of certain length and set the elements within it from
    start value to end value.
  */
  return Array.from({ length }, (_, idx) => idx + start);
}