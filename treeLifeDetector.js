const argument = process.argv[2];
const lifeStatus = Number(argument);
if (lifeStatus === 0) {
  console.log('alive');
} else {
  console.log('other');
}
