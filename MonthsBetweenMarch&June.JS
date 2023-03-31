let day = parseInt(process.argv[2]);
let month = parseInt(process.argv[3]);
let isBetween = false;
if (month === 3 && day >= 20) {
  isBetween = true;
} else if (month > 3 && month < 6) {
  isBetween = true;
} else if (month === 6 && day <= 20) {
  isBetween = true;
}