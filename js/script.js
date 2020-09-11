//Bai 1:
// let str_input = prompt("Nhập một chuỗi bất kỳ");
// let newstr = "";
// for (i = str_input.length - 1; i >= 0; i--) {
//     newstr += str_input[i];
// }
// console.log(newstr);

//Bai 2:
// let str = prompt("Nhập một chuỗi bất kỳ");
// let newstr = "";
// newstr = str.charAt(0).toUpperCase() + str.slice(1);
// console.log(newstr);

//Bai 3:
// let n = [1, 2, 1, 3, 4, 5, 5, 5, 6, 1, 7, 8];
// let newArr = [];
// newArr = n.filter((a, i) => n.indexOf(a) === i);
// console.log(newArr);

//Bai 4:
// let quanly = [{ ten: "Nguyễn Thị A", tuoi: 20, luong: "10 triệu", chucvu: "nhân viên" }, { ten: "Nguyễn Văn B", tuoi: 25, luong: "12 triệu", chucvu: "nhân viên" }, { ten: "Hồ Văn C", tuoi: 22, luong: "8 triệu", chucvu: "nhân viên" }];
// //Read:
// for (let i = 0; i < quanly.length; i++) {
//     console.log(quanly[i]);
// }
// //Create:
// let newMember = {};
// newMember.ten = prompt("Nhập họ và tên");
// newMember.tuoi = prompt("Nhập tuổi");
// newMember.luong = prompt("Nhập lương");
// newMember.chucvu = prompt("Nhập chức vụ");
// quanly.push(newMember);
// console.log(quanly);
// //Update:
// let i = prompt("Vị trí muốn update");
// quanly[i].ten = prompt("Nhập tên mới");
// quanly[i].tuoi = prompt("Nhập tuổi mới");
// quanly[i].luong = prompt("Nhập lương mới");
// quanly[i].chucvu = prompt("Nhập chức vụ mới");
// console.log(quanly);
// //Delete:
// let i = prompt("Vị trí muốn delete");
// quanly.splice(i);
// console.log(quanly);



