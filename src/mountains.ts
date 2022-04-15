interface Mountain {
  name: string;
  height: number;
}
const array: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];
export function findNameOfTallestMountain(mountains: Mountain[]) {
  let maxHeight = 0;
  let tallestMountain = "";
  mountains.forEach((mountain) => {
    if (mountain.height > maxHeight) {
      maxHeight = mountain.height;
      tallestMountain = mountain.name;
    }
  });
  return tallestMountain;
}
console.log(findNameOfTallestMountain(array));
