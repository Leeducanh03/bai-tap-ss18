// Bài 1:
// let stores = [
//     { id: 1, name: "Milk", count: 100 },
//     { id: 2, name: "Yakult", count: 100 },
//     { id: 3, name: "Butter", count: 100 }
// ];
// let carts = [];
// function find(index) {
//     let check = false;
//     for (let i = 0; i < carts.length; i++) {
//         if (carts[i].id == index) {
//             check = true;
//             return index - 1;
//         }
//     }
//     if (check == false) {
//         console.log("Không tồn tại");
//         return -1;
//     }
// }

// Bài 2:
// Tạo một class Dog có những thuộc tính:
// Tên và tốc độ di chuyển
// Có khả năng thực hiện sủa
// Có khả năng bắt được mèo nếu tốc độ của chó lớn hơn
// Tạo class Cat có những thuộc tính sau:
// Tên và tốc dộ di chuyển
// class dog {
//     constructor(name, speed1) {
//         this.name = name;
//         this.speed1 = speed1;
//     }
//     move = () => {
//         console.log("gâu");
//     }
//     batMeo = (value) => {
//         if (this.speed1 > value.speed2) {
//             console.log("co kha nang bat duoc meo");
//         } else {
//             console.log("khong bat duoc");
//         }
//     }
// }
// class cat {
//     constructor(name, speed2) {
//         this.name = name;
//         this.speed2 = speed2;
//     }
//     move = () => {
//         console.log("meo");
//     }

// }
// let meo = new cat("meo", 40)
// let cho = new dog("cho", 60)
// cho.batMeo(meo)

// Bài 3:
// Tạo một đối tượng User chứa thông tin người dùng bao gồm: tên, email, địa chỉ, điện thoại.
// Tạo class Admin kế thừa từ class User.
// Thêm thuộc tính “role” vào 2 đối tượng Admin(value = 1) và User(value = 0)
// Tạo danh sách người dùng(dạng mảng) và thêm vào 3 user, 1 admin
// Xóa người dùng thông qua tên của họ(không xóa được admin)
// Sửa thông tin người dùng thông qua id(không sửa được thông tin admin)
// Thêm 1 nick admin vào mảng danh sách người dùng.
// Sau đó tìm kiếm toàn bộ thông tin các tài khoản là admin và in ra
// class User {
//     constructor(id, name, email, Address, phone) {
//         this.id = id;
//         this.name = name;
//         this.email = email;
//         this.Address = Address;
//         this.phone = phone;
//         this.role = 0;
//     }
// }
// class Admin extends User {
//     constructor(id, name, email, Address, phone) {
//         super(id, name, email, Address, phone)
//         this.role = 1;
//     }
// }
// //Tạo danh sách người dùng (dạng mảng) và thêm vào 3 user, 1 admin
// let danhSach = [];
// let User1 = new User(1, "A", "leA@gmail.com", "hanoi", 111);
// let User2 = new User(2, "B", "leB@gmail.com", "hcm", 222);
// let User3 = new User(3, "C", "leC@gmail.com", "danang", 333);
// let Admin1 = new Admin(4, "D", "leD@gmail.com", "cantho", 444);
// let Admin2 = new Admin(5, "E", "leE@gmail.com", "hue", 555);
// danhSach.push(User1, User2, User3, Admin1, Admin2);
// console.log(danhSach);

// //Xóa người dùng thông qua tên của họ (không xóa được admin)
// let tencanxoa = prompt("nhap ten can xoa");
// let flag = false;
// for (i = 0; i < danhSach.length; i++) {
//     if (danhSach[i].name == tencanxoa && danhSach[i].role != 1) {
//         flag = true;
//         danhSach.splice(i, 1)
//     }
// }
// if (!flag) {
//     console.log("khong xoa duoc");
// }
// console.log(danhSach);

// // Sửa thông tin người dùng thông qua id (không sửa được thông tin admin)
// let n = +prompt("nhap id can sua: ")
// for (i = 0; i < danhSach.length; i++) {
//     if (danhSach[i].id == n && danhSach[i].role !== 1) {
//         danhSach[i].name = prompt("nhap ten moi");
//         danhSach[i].email = prompt("nhap email moi");
//         danhSach[i].Address = prompt("nhap Address moi");
//         danhSach[i].phone = prompt("nhap phone moi");
//     }
// }

// //Thêm 1 nick admin vào mảng danh sách người dùng. Sau đó tìm kiếm toàn bộ thông tin các tài khoản là admin và in ra
// for (let i = 0; i < danhSach.length; i++) {
//     if (danhSach[i].role == 1) {
//         console.log(danhSach[i]);
//     }
// }


// Bài 4:
let id = 1;
class Course {
    constructor(name, complete) {
        this.id = id++;
        this.name = name;
        this.complete = complete;
    }
}
let course1 = new Course("HTML", "false");
let course2 = new Course("CSS", "false");
let course3 = new Course("Basic Of Javascript", "false");
let course4 = new Course("Node Package Manager (npm)", "false");
let course5 = new Course("Git", "false");
let list = [];
list.push(course1);
list.push(course2);
list.push(course3);
list.push(course4);
list.push(course5);

// Bài 5:

let action = prompt("Nhập vào hành động C/R/U/D và E để kết thúc").toLocaleLowerCase();
while (true) {

    // C – Cho người dùng nhập vào tên sản phẩm muốn mua.
    // Nếu có thêm chúng vào carts khi đó count trong stores của sản phẩn đó giảm đi 1
    if (action == "c") {
        let newId = carts.length + 1;
        let product = prompt("Nhập vào sản phẩm bạn muốn mua");
        let index = stores.findIndex((value) => {
            return product == value.name;
        });
        if (index >= 0) {
            let indexOfCart = carts.findIndex(value => value.name == product)
            if (indexOfCart >= 0) {
                carts[indexOfCart].count += 1;

            } else {
                carts.push({ id: newId, name: product, count: 1 });
            }
            console.log(carts)
            stores[index].count--;
            console.log(stores);
        } else {
            console.log("Cửa hàng không bán sản phẩm này");
        }
        // R – In ra toàn bộ các sản phẩm trong stores và carts
    } else if (action == "r") {
        console.log(stores);
        console.log(carts);
        // U – Hỏi người dùng vị trí update trong carts.
        // Nếu tồn tại cho người dùng nhập vào số lượng muốn thay đổi và khi đó
        // count trong stores cũng cập nhật theo.Update xong in lại stores và carts
    } else if (action == "u") {
        let indexUpdate = +prompt("Nhập vị trí bạn muốn update trong carts");
        let indexUp = find(Number(indexUpdate));
        if (indexUp >= 0) {
            console.log("==> ", indexUp);
            carts[indexUp].count = +prompt("Nhập số lượng bạn muốn thay đổi");
            let indexStores = stores.findIndex(value => value.name == carts[indexUp].name);
            stores[indexStores].count = 100 - carts[indexUp].count;
            console.log(carts);
            console.log(stores);
        }
        // D – Hỏi người dùng vị trị của sản phẩm muốn xóa trong carts.Tiến hành xóa và in ra lại
    } else if (action == "d") {
        let indexDelete = +prompt("Nhập vị trí bạn muốn xóa trong carts");
        let indexDel = find(Number(indexDelete));
        carts.splice(indexDel, 1);
        console.log(carts);

        // E – Biến chương trình thành vòng lặp vĩnh cứu và khi người
        // dùng nhập vào E thì sẽ thoát khỏi chương trình và thông báo “Cảm ơn bạn đã đến với Rikkei Stores”
    } else if (action == "e") {
        alert("Cảm ơn bạn đã đến với Rikkei Academy")
        break;
    }
    else { }
    action = prompt("Nhập vào hành động C/R/U/D và E để kết thúc").toLocaleLowerCase();
}