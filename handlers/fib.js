'use strict';

exports.handler = async (event) => {
  let { number } = JSON.parse(event.body);

  return {
    statusCode: 200,
    body: JSON.stringify({
      sequence: calcFibSeq(number),
    })
  };
};

function calcFibSeq(n) {
  if (n === undefined) { return []; }

  const sequence = [];

  let a = 0, b = 1, c;

  for (let i = 1; i <= n; i++) {
    sequence.push(a);
    c = a + b;
    a = b;
    b = c;
  }

  return sequence;
};