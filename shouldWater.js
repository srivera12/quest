const treeLife = Number(process.argv[2]);
const treeDryness = Number(process.argv[3]);
if (treeLife === 0 && treeDryness > 10) {
  console.log('WATER');
}
