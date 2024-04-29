// get a random integer
export const getRandomInt = (min,max) => {
  const answer = Math.floor( ( Math.random() * (max-min) ) + min );
  return answer;
}