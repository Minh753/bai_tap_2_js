//Bài 1:Tính điểm và xét kết quả
// b1:khai báo input toàn cục
// var diemVan = 0;
// var diemToan = 0;
// var diemAnh = 0;
// var khuVuc = 0;
// var doiTuong = 0;
// // output tổng điểm và kết quả :string
// var tongDiem = 0;

// document.getElementById('khu-vuc').onclick = function () {
//     khuVuc = document.getElementById('khu-vuc').id;
//     if (value == A) {
//         khuVuc = 2
//     } else if (value == B) {
//         khuVuc = 1
//     } else if (value == C) {
//         khuVuc == 0.5
//     }
// }
// document.getElementById('doi-tuong').onclick = function () {
//     khuVuc = document.getElementById('doi-tuong').id;
//     if (value == 1) {
//         doiTuong = 2.5
//     } else if (value == 2) {
//         doiTuong = 1.5
//     } else if (value == 3) {
//         doiTuong = 1
//     }
// }
document.getElementById('btnTinhDiem').onclick = function () {
    var diemVan = +document.getElementById('diemVan').value;
    var diemToan = +document.getElementById('diemToan').value;
    var diemAnh = +document.getElementById('diemAnh').value;
    var khuVuc = +document.getElementById('khu-vuc').value;
    var doiTuong = +document.getElementById('doi-tượng').value;
    var tongDiem = 0;
    var stringHTML = '';
    //output
    tongDiem = tinhDiemTong(diemAnh, diemToan, diemVan)
    if (tongDiem >= 25) {
        stringHTML += tongDiem + 'Bạn đã đậu'
    } else {
        stringHTML += tongDiem + 'Bạn đã rớt'
    }

    document.getElementById('ketQua').innerHTML = stringHTML
}

// bài 2 : tính tiền điện
document.getElementById('btn-tinh-tien-dien').onclick = function () {
    var soKW = +document.getElementById('soKW').value;
    var hoTen = document.getElementById('hoTen').value;
    var stringHTML = '';

    ketQuaDien = tinhTienDien(soKW)

    stringHTML = hoTen + ketQuaDien

    document.getElementById('ket-Qua-Dien').innerHTML = stringHTML


}

// bài 3: tính thuế
document.getElementById('btn-tinh-thue').onclick = function () {
    var hoTenThue = document.getElementById('ho-ten').value;
    var tongThuNhap = +document.getElementById('tong-thu-nhap').value;
    var nguoiPhuThuoc = +document.getElementById('nguoi-phu-thuoc').value;
    var thuNhapChiuThue = 0;
    thuNhapChiuThue = tongThuNhap - 4000000 - (nguoiPhuThuoc * 1600000)




    tienThue = tinhThue(thuNhapChiuThue)

    document.getElementById('res-3').innerHTML = hoTenThue + tienThue
}
