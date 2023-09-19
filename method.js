function tinhDiemTong(diemAnh, diemToan, diemVan, khuVuc, doiTuong) {
    var output = 0;
    output = diemAnh + diemToan + diemVan + khuVuc + doiTuong

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