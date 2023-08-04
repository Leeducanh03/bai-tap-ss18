// Bài 1:
// let obj = {
//     "name": "Duc Anh",
//     "age": "20",
//     "address": "Ha Noi",
//     "phone" : "1234567",
// }
// console.log(obj["name"]);
// console.log(obj["age"]);
// console.log(obj["address"]);
// console.log(obj["phone"]);

// Bài 2:
class student {
    constructor(id, name, gender, age, mark) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.mark = mark;
    }
}
let students = [];
let student1 = new student("2", "Nguyen Van B", "nam", 20, 8);
let student2 = new student("3", "Nguyen Van C", "nam", 18, 6);
let student3 = new student("4", "Phung Thanh Phuong", "nữ", 19, 10);

students.push(student1);
students.push(student2);
students.push(student3);

console.log(students);


// Bài 3 - 4:
// Với dữ liệu từ bài 2 hãy tìm ra học sinh có điểm trung bình cao hơn
// và in ra toàn bộ thông tin của học sinh đó

// cách 1:
// class student {
//     ID = 1;
//     name = "nguyen van a";
//     gender = "nam";
//     age = 20;
//     mark = 7;
//     constructor(ID, name, gender, age, mark) {
//         this.ID = ID;
//         this.name = name;
//         this.gender = gender;
//         this.age = age;
//         this.mark = mark;
//     }
// }
// let students = [];
// let student1 = new student(2, "nguyen B", "nu", 19, 6);
// let student2 = new student(3, "nguyen thi C", "nu", 18, 5);
// let student3 = new student(4, "nguyen van D", "nam", 22, 10);
// let student4 = new student(5, "nguyen van D", "nam", 22, 8);
// students.push(student1, student2, student3, student4);
// console.log(students);

// let sum = 0;
// for (const key in students) {
//     sum += students[key].mark
// }
// if (sum / students.length - 1 > 7.5) {
//     console.log("xep loai KHA");
// } else if (sum / students.length - 1 > 5) {
//     console.log("xep loai TB");
// } else {
//     console.log("xep loai YEU");
// }
// console.log(`DTB cua ca lop la ${sum / students.length - 1}`);



// cach 2:
// class student {
//     ID = 1;
//     name = "nguyen van a";
//     gender = "nam";
//     age = 20;
//     mark = 7;
//     constructor(ID, name, gender, age, mark) {
//         this.ID = ID;
//         this.name = name;
//         this.gender = gender;
//         this.age = age;
//         this.mark = mark;
//         this.toString = function () {
//             return `ID: ${ID}, name: '${name}', gender: '${gender}', age: ${age}, mark: ${mark}`
//         }
//     }
// }
// let students = [];
// let student1 = new student(2, "nguyen B", "nu", 19, 6);
// let student2 = new student(3, "nguyen thi C", "nu", 18, 5);
// let student3 = new student(4, "nguyen van D", "nam", 22, 10);
// let student4 = new student(5, "nguyen van D", "nam", 22, 8);
// students.push(student1, student2, student3, student4);
// console.log(students);

// // tìm ra học sinh có điểm trung bình cao nhat
// let index = 0;
// let max = students[0].mark;
// for (i = 0; i < students.length; i++) {
//     if (students[i].mark > max) {
//         max = students[i].mark;
//         index = i;
//     }
// }
// console.log("hoc sinh co dtb cao nhat la: " + students[index]);