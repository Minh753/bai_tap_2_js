function tinhDiemTong(diemAnh, diemToan, diemVan) {
    var output = 0;
    output = diemAnh + diemToan + diemVan
    return output
}
function chonKhuVuc(khuVuc) {
    var output = 0;
    if (khuVuc === 'A') {
        output = 2;
    } else if (khuVuc === 'B') {
        output = 1;
    } else if (khuVuc === 'C') {
        output = 0.5;
    }
    return output
}
function chonDoiTuong(doiTuong) {
    var output = 0;
    if (doiTuong === '1') {
        output = 2.5;
    } else if (doiTuong === '2') {
        output = 1.5;
    } else if (doiTuong === '3') {
        output = 1;
    }
    return output
}

function tinhTienDien(soKW) {
    var outputTongTien

    if (soKW <= 50) {
        outputTongTien = soKW * 500
    } else if (soKW >= 50 && soKW <= 100) {
        outputTongTien = 25000 + (soKW - 50) * 650
    } else if (soKW >= 100 && soKW <= 150) {
        outputTongTien = 57500 + (soKW - 100) * 850
    } else if (soKW >= 150 && soKW <= 200) {
        outputTongTien = 100000 + (soKW - 150) * 1100
    } else if (soKW > 200) {
        outputTongTien = 155000 + (soKW - 200) * 1300
    }

    return outputTongTien
}



function tinhThue(thuNhapChiuThue) {
    var outputThue = 0;


    if (thuNhapChiuThue >= 6e+6) {
        outputThue = thuNhapChiuThue * 0.05
    } else if (thuNhapChiuThue >= 6e+6 && thuNhapChiuThue <= 120e+6) {
        outputThue = thuNhapChiuThue * 0.1
    } else if (thuNhapChiuThue >= 120e+6 && thuNhapChiuThue <= 210e+6) {
        outputThue = thuNhapChiuThue * 0.15
    } else if (thuNhapChiuThue >= 210e+6 && thuNhapChiuThue <= 384e+6) {
        outputThue = thuNhapChiuThue * 0.2
    } else if (thuNhapChiuThue >= 384e+6 && thuNhapChiuThue <= 624e+6) {
        outputThue = thuNhapChiuThue * 0.25
    } else if (thuNhapChiuThue >= 624e+6 && thuNhapChiuThue <= 960e+6) {
        outputThue = thuNhapChiuThue * 0.3
    } else if (thuNhapChiuThue >= 960e+6) {
        outputThue = thuNhapChiuThue * 0.35
    }

    return outputThue
}


function tienCapNhaDan(soKenhCaoCap) {
    var output = 0;
    const phiHoaDon = 4.5;
    const phiDichVu = 20.5;
    output = phiHoaDon + phiDichVu + soKenhCaoCap * 7.5;
    return output
}

function tienCapDoanhNghiep(soKenhCaoCap, soKetNoi) {
    var output = 0;
    const phiHoaDon = 15;
    var phiDichVu = 0;
    if (soKetNoi <= 10) {
        phiDichVu = 75;
    } else {
        phiDichVu = 75 + (soKetNoi - 10) * 5;
    }
    output = phiHoaDon + phiDichVu + soKenhCaoCap * 50;
    return output
}