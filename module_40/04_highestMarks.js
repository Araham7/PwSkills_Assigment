let marks = [85, 92, 78, 90, 88];
let highestMarks = marks[0];


for (let i = 0; i < marks.length ; i++) {
    highestMarks = ((marks[i]>highestMarks) ? marks[i] : highestMarks);
}

console.log(highestMarks);
