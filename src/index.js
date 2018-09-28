module.exports = function solveEquation(equation) {
  // your implementation
  let nameList = equation.split(' * x^2 ');
    let a = nameList[0];
  let nameList2 = nameList[1].split(' * x ');
  let ArrTemp = nameList2[0].split(' ');
    let b = ArrTemp[1];
      if(ArrTemp[0] ==  '-')
      {b = -b;}
  let ArrTemp2 = nameList2[1].split(' ');
    let c = ArrTemp2[1];
      if(ArrTemp2[0] ==  '-')
      {c = -c;}
  let D = b*b-4*a*c;
  let x1 = Math.round((-b-Math.sqrt(D))/(2*a));
  let x2 = Math.round((-b+Math.sqrt(D))/(2*a));
  let arr = [x1, x2];
  function compareNumeric(a, b) {
    return a-b;}
  arr.sort(compareNumeric);
  return arr;
  }
