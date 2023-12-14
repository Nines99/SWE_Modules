const date = new Date();
const currentDate = new Date();
 
const year = date.getFullYear();
const month = date.getMonth(); // Note: Months are 0-indexed (0 for January, 11 for December)
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

console.log(currentDate);
console.log(`Year: ${year}`);
console.log(`Month: ${month + 1}`); // Adding 1 to convert to 1-indexed month
console.log(`Day: ${day}`);
console.log(`Time: ${hours}:${minutes}:${seconds}`);

const options = { timeZone: 'Pacific/Auckland' };
const aucklandTime = date.toLocaleString('en-US', options);
console.log(`Auckland Time: ${aucklandTime}`);

options.timeZone = 'Europe/London';
const londonTime = date.toLocaleString('en-US', options);
console.log(`London Time: ${londonTime}`);

options.timeZone = 'Asia/Tokyo';
const tokyoTime = date.toLocaleString('en-US', options);
console.log(`Tokyo Time: ${tokyoTime}`);