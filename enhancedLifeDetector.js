const treeLife = Number(process.argv[2]);
if (treeLife === 0) {
  console.log('alive');
} else if (treeLife === 1) {
  console.log('flowering');
} else if (treeLife === 2) {
  console.log('shedding');
} else {
  console.log('other');
}
