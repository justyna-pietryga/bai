// boki trójkąta
let a = 4;
let b = 5;
let c = 7;

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let calculateTriangleArea = (a, b, c) => {
    let p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
};

console.log(`Pole trójkąta o bokach: ${a}, ${b}, ${c}, wynosi ${calculateTriangleArea(a, b, c)}`);