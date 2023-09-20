//Bài 1:Tính điểm và xét kết quả

document.getElementById('btnTinhDiem').onclick = function () {
    // input
    var diemChuan = +document.getElementById('diemChuan').value;
    var diemVan = +document.getElementById('diemVan').value;
    var diemToan = +document.getElementById('diemToan').value;
    var diemAnh = +document.getElementById('diemAnh').value;
    var khuVuc = document.getElementById('khuVuc').value;
    var doiTuong = document.getElementById('doiTuong').value;
    var tongDiem = 0;
    // output
    var ketQuaDiem = '';
    //process
    tongDiem = tinhDiemTong(diemAnh, diemToan, diemVan) + chonKhuVuc(khuVuc) + chonDoiTuong(doiTuong)
    if (diemAnh === 0 || diemToan === 0 || diemVan === 0) {
        ketQuaDiem = 'Bạn đã rớt do có môn điểm 0'
    } else if (tongDiem >= diemChuan) {
        ketQuaDiem = 'Điểm của ban: ' + tongDiem + ';' + 'Bạn đã đậu'
    } else {
        ketQuaDiem = 'Điểm của bạn: ' + tongDiem + ';' + 'Bạn đã rơt'
    }


    document.getElementById('ketQua').innerHTML = ketQuaDiem
}

// bài 2 : tính tiền điện
document.getElementById('btn-tinh-tien-dien').onclick = function () {
    var soKW = +document.getElementById('soKW').value;
    var hoTen = document.getElementById('hoTen').value;
    var stringHTML = '';

    ketQuaDien = tinhTienDien(soKW)

    stringHTML = ketQuaDien

    document.getElementById('ket-Qua-Dien').innerHTML = 'Họ tên: ' + hoTen + ';' + new Intl.NumberFormat('vn-VN').format(stringHTML)


}

// bài 3: tính thuế
document.getElementById('btn-tinh-thue').onclick = function () {
    var hoTenThue = document.getElementById('ho-ten').value;
    var tongThuNhap = +document.getElementById('tong-thu-nhap').value;
    var nguoiPhuThuoc = +document.getElementById('nguoi-phu-thuoc').value;
    var thuNhapChiuThue = 0;
    thuNhapChiuThue = tongThuNhap - 4000000 - (nguoiPhuThuoc * 1600000)
    tienThue = tinhThue(thuNhapChiuThue)
    document.getElementById('res-3').innerHTML = 'Họ tên: ' + hoTenThue + ';' + 'Tiền thuê phải nộp' + new Intl.NumberFormat('vn-VN').format(tienThue)
}
// bài 4: tính tiền cáp

function anHien() {
    var loaiKhach = +document.getElementById('loaiKhachHang').value
    var tagInput = document.getElementById('soKetNoi');
    if (loaiKhach === 2) {
        tagInput.style.display = 'block';
    } else if (loaiKhach === 1 || loaiKhach === 0) {
        tagInput.style.display = 'none';
    }
}

document.getElementById('tinhTienCap').onclick = function () {
    var loaiKhachHang = document.getElementById('loaiKhachHang').value;
    var maKhachHang = document.getElementById('maKhacHang').value;
    var soKenhCaoCap = +document.getElementById('soKenhCaoCap').value;
    var soKetNoi = +document.getElementById('soKetNoi').value;
    var tienCap = 0
    // output
    var ketQuaCap = 0
    // process
    if (loaiKhachHang === '1') {
        tienCap = tienCapNhaDan(soKenhCaoCap)
    } else if (loaiKhachHang === '2') {
        tienCap = tienCapDoanhNghiep(soKenhCaoCap, soKetNoi)
    }
    ketQuaCap = 'Mã khách hàng: ' + maKhachHang + ';' + 'Tiền cáp là: ' + tienCap + '$'
    // in ra giao diện
    document.getElementById('ketQuaCap').innerHTML = ketQuaCap
}