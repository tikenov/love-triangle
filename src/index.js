// /**
//  * @param preferences - an array of integers. Indices of people, whom they love
//  * @returns number of love triangles
//  */

module.exports = function getLoveTrianglesCount(p = []) {
  p.unshift(0);
  let ans = 0;
  for (let i = 1; i <= p.length; i++) if (i == p[p[p[i]]]) ans++;
  return Math.floor(ans / 3);
};
