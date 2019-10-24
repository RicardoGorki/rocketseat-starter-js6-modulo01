function pares(x, y) {
  for (let i = x; i <= y; i++) {
    x %= y;

    if (i % 2 === 0) {
      console.log(i);
    }
  }
  console.log("Fim");
}

console.log(pares(32, 321));
