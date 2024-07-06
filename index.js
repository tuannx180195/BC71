//Global JS
function domID(id) {
  return document.getElementById(id);
}

function thueBac(x, y, z) {
  var chiuThue = 0;
  chiuThue = Number((x * z) / 100);
  return chiuThue;
}

// Bài 1: QUẢN LÝ TUYỂN SINH

//input
domID("btnKQXT").onclick = function () {
  var diemChuan = domID("diemChuan").value * 1;
  var diemMon1 = domID("diemMon1").value * 1;
  var diemMon2 = domID("diemMon2").value * 1;
  var diemMon3 = domID("diemMon3").value * 1;
  var khuVuc = domID("khuVuc").value;
  var doiTuong = domID("doiTuong").value * 1;

  //output
  var tongDiem = 0;
  var ketQua = "";

  //process
  var diemKV = 0;
  var diemDT = 0;

  //   Lấy điểm khu vực
  if (khuVuc == "A") {
    diemKV = 2;
  } else if (khuVuc === "B") {
    diemKV = 1;
  } else if (khuVuc === "C") {
    diemKV = 0.5;
  }

  //   Lấy điểm đối tượng
  if (doiTuong === 1) {
    diemDT = 2.5;
  } else if (doiTuong === 2) {
    diemDT = 1.5;
  } else if (doiTuong === 3) {
    diemDT = 1;
  }

  //Hàm lấy tổng điểm
  tongDiem = diemMon1 + diemMon2 + diemMon3 + diemKV + diemDT;

  //Hàm lấy kết quả Đậu/Rớt

  if (tongDiem >= diemChuan) {
    ketQua = "ĐẬU";
  } else {
    ketQua = "RỚT";
  }
  domID("ketQuaXT").innerHTML =
    "Tổng điểm: " + tongDiem + " và Kết Quả: " + ketQua;
};

// Bài 1: TÍNH TIỀN ĐIỆN

// input

domID("btnTienDien").onclick = function () {
  // input
  var hoVaTen = domID("hoVaTen").value;
  var soKw = domID("soKw").value;

  // output
  var tienDien = 0;

  // process
  var _50kwDau = Number(500 * soKw);
  var _50kwKe = Number(500 * 50 + 650 * (soKw - 50));
  var _100kwKe = Number(500 * 50 + 650 * 50 + 850 * (soKw - 100));
  var _150kwKe = Number(500 * 50 + 650 * 50 + 850 * 100 + 1100 * (soKw - 200));
  var conLai = Number(
    500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + (soKw - 350)
  );

  // công thức lũy tiến tính số tiền điện
  if (soKw <= 50) {
    tienDien = _50kwDau;
  } else if (soKw > 50 && soKw <= 100) {
    tienDien = _50kwKe;
  } else if (soKw > 100 && soKw <= 200) {
    tienDien = _100kwKe;
  } else if (soKw > 200 && soKw <= 350) {
    tienDien = _150kwKe;
  } else {
    tienDien = conLai;
  }

  domID("tienDien").innerHTML =
    "Ông/bà: " +
    hoVaTen +
    " tiêu thụ: " +
    tienDien.toLocaleString() +
    "VND tiền điện";
};

// Bài 3: TÍNH THUẾ THU NHẬP CÁ NHÂN

domID("btnTinhThue").onclick = function () {
  // input
  var hoTen = domID("hoTen").value;
  var tongThuNhap = domID("tongThuNhap").value * 1;
  var soNPT = domID("soNPT").value * 1;

  // output
  var tienThue = 0;

  // process
  var thuNhapThue = Number(tongThuNhap - 4 - soNPT * 1.6);

  // Công thức lũy tiến tính thuế

  var thueDuoi_60 = Number(thuNhapThue * 0.05);
  var thue60_120 = Number(thueBac(60, 0, 5) + (10 / 100) * (thuNhapThue - 60));
  var thue120_210 = Number(
    thueBac(60, 120, 10) + (15 / 100) * (thuNhapThue - 120)
  );
  var thue210_384 = Number(
    thueBac(120, 210, 15) + (20 / 100) * (thuNhapThue - 210)
  );
  var thue384_624 = Number(
    thueBac(210, 384, 20) + (25 / 100) * (thuNhapThue - 384)
  );
  var thue624_960 = Number(
    thueBac(384, 624, 20) + (30 / 100) * (thuNhapThue - 624)
  );
  var thueTren960 = Number(
    thueBac(624, 960, 30) + (35 / 100) * (thuNhapThue - 960)
  );

  // công thức tính lũy tiến thuế
  if (thuNhapThue <= 60) {
    tienThue = thueDuoi_60;
  } else if (thuNhapThue > 60 && thuNhapThue <= 120) {
    tienThue = thue60_120;
  } else if (thuNhapThue > 120 && thuNhapThue <= 210) {
    tienThue = thue120_210;
  } else if (thuNhapThue > 210 && thuNhapThue <= 384) {
    tienThue = thue210_384;
  } else if (thuNhapThue > 384 && thuNhapThue <= 624) {
    tienThue = thue384_624;
  } else if (thuNhapThue > 624 && thuNhapThue <= 960) {
    tienThue = thue624_960;
  } else if (thuNhapThue > 960) {
    tienThue = thueTren960;
  }
  domID("tienThue").innerHTML =
    "Anh/chị " +
    hoTen +
    "có " +
    tienThue.toLocaleString() +
    "triệu VND tiền thuế TNCN";
};

// Bài 4: TÍNH Tiền Cáp

// lắng nghe sự kiện that đổi của #loaiKH để enable soKetNoi khi chọn loaiKH = "Doanh Nghiệp"

document.getElementById("loaiKH").addEventListener("change", function () {
  var loaiKHValue = this.value;
  var soKetNoiInput = domID("soKetNoi");

  if (loaiKHValue == "Doanh Nghiệp") {
    soKetNoiInput.disabled = false;
  } else {
    soKetNoiInput.disabled = true;
  }
});

// onclick cho Tính Tiền Cáp

domID("btnTinhTienCap").onclick = function () {
  // input
  var maKH = domID("maKH").value;
  var loaiKH = domID("loaiKH").value;
  var soKetNoi = Number(domID("soKetNoi").value);
  var soKenhCaoCap = Number(domID("soKenhCaoCap").value);

  // output
  var tienCap = 0;

  // process
  var hoanDonNhaDan = 4.5;
  var dichVuNhaDan = 20.5;
  var phiKenhNhaDan = 7.5;

  var hoanDonDoanhNghiep = 15;
  var phiKenhDoanhNghiep = 50;
  var donGiaDichVu = 75;
  var dichVuDoanhNghiep = 0;

  if (soKetNoi > 10) {
    dichVuDoanhNghiep = donGiaDichVu * 10 + (soKetNoi - 10) * 5;
  } else {
    dichVuDoanhNghiep = donGiaDichVu * soKetNoi;
  }

  if (loaiKH == "Nhà Dân") {
    tienCap = hoanDonNhaDan + dichVuNhaDan + phiKenhNhaDan * soKenhCaoCap;
  } else {
    tienCap =
      hoanDonDoanhNghiep +
      phiKenhDoanhNghiep * soKenhCaoCap +
      dichVuDoanhNghiep;
  }
  domID("tienCap").innerHTML = tienCap + " $";
};
