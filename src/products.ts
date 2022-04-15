export interface Products {
  name: string;
  price: number;
}
const productsArray: Products[] = [
  { name: "strawberries", price: 4 },
  { name: "apples", price: 5 },
  { name: "bananas", price: 2 },
  { name: "avocados", price: 3 },
];

export function calcAverageProductPrice(products: Products[]) {
  let sum = 0;
  if (products.length === 0) {
    return 0;
  }
  for (let i = 0; i < products.length; i++) {
    sum += products[i].price;
  }
  return sum / products.length;
}

console.log(calcAverageProductPrice(productsArray));
