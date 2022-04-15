import { Products } from "./products";
interface InventoryItem {
  product: Products;
  quantity: number;
}
const inventory: InventoryItem[] = [
  { product: { name: "motor", price: 10.0 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 },
];

export function calcInventoryValue(obj: InventoryItem[]) {
  let sum = 0;
  if (obj.length === 0) {
    return 0;
  }
  for (let i = 0; i < obj.length; i++) {
    sum += obj[i].product.price * obj[i].quantity;
  }
  return sum;
}
console.log(calcInventoryValue(inventory));
