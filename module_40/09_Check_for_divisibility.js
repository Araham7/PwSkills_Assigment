let arr = [3, 6, 9, 12, 15, 22, 25, 27, 30, 45, 53, 67, 70, 89 ];

for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num % 3 === 0 && num % 2 !== 0) {
        console.log(`number ${num} is divisible by 3 but not by 2.`);
    }
}

