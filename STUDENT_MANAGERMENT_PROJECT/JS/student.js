function emailValid(email) {
  return /^([A-Za-z0-9_\-\.])+\@([gmail|GMAIL])+\.(com)$/.test(email);
}

function save() {
  let fullName = document.getElementById("fullname").value; // id="fullname".value lấy giá trị.
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;
  let gender = "";

  if (document.getElementById("male").checked) {
    gender = document.getElementById("male").value;
  } else if ((gender = document.getElementById("female").checked)) {
    gender = document.getElementById("female").value;
  }

  // Validate form cho full_name
  if (_.isEmpty(fullName)) {
    document.getElementById("fullname-error").innerHTML =
      "Vui lòng nhập họ và tên";
    // .trim() loại bỏ những khoảng trắng
  } else if (fullName.trim().length <= 2) {
    document.getElementById("fullname-error").innerHTML =
      "Vui lòng nhập họ và tên _";
  } else if (fullName.trim().length > 50) {
    document.getElementById("fullname-error").innerHTML =
      "Vui lòng nhập họ và tên _";
  } else {
    document.getElementById("fullname-error").innerHTML = "";
  }
}

// Validate form cho mail
if (_.isEmpty(email)) {
  document.getElementById("mail-error").innerHTML = "Vui lòng nhập lại mail!";
} else if (!emailValid(email)) {
  document.getElementById("mail-error").innerHTML =
    "Không đúng định dạng mail!";
}
