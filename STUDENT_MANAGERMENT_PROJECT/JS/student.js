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
    fullName = "";
    document.getElementById("fullname-error").innerHTML =
      "Vui lòng nhập họ và tên";
    // .trim() loại bỏ những khoảng trắng
  } else if (fullName.trim().length <= 2) {
    fullName = "";
    document.getElementById("fullname-error").innerHTML =
      "Vui lòng không nhỏ hơn 2";
  } else if (fullName.trim().length > 50) {
    fullName = "";
    document.getElementById("fullname-error").innerHTML =
      "Vui lòng không lớn hơn 50";
  } else {
    document.getElementById("fullname-error").innerHTML = "";
  }

  // Validate form cho mail
  if (_.isEmpty(email)) {
    email = "";
    document.getElementById("mail-error").innerHTML = "Vui lòng nhập lại mail!";
  } else if (!emailValid(email)) {
    email = "";
    document.getElementById("mail-error").innerHTML =
      "Không đúng định dạng mail!";
  } else {
    document.getElementById("mail-error").innerHTML = "";
  }

  //Validate form cho phoneNumber
  if (_.isEmpty(phone)) {
    phone = "";
    document.getElementById("phone-error").innerHTML =
      "Vui lòng nhập lại phone";
  } else if (phone.trim().length > 10 || phone.trim().length < 10) {
    phone = "";
    document.getElementById("phone-error").innerHTML = "Sai định dạng";
  } else {
    document.getElementById("phone-error").innerHTML = "";
  }

  //validate form cho address
  if (_.isEmpty(address)) {
    address = "";
    document.getElementById("address-error").innerHTML =
      "Vui lòng nhập lại address";
  } else {
    document.getElementById("address-error").innerHTML = "";
  }

  //validate form cho gender
  if (_.isEmpty(gender)) {
    gender = "";
    document.getElementById("gender-error").innerHTML =
      "Vui lòng chọn giới tính haha";
  } else {
    document.getElementById("gender-error").innerHTML = "";
  }

  if (fullName && email && phone && address && gender) {
    let students = localStorage.getItem("a")
      ? JSON.parse(localStorage.getItem("a"))
      : [];
    // lưu vào trong danh sách sinh viên.
    //them 1 đối tượng vào mảng students
    students.push({
      fullname: fullName,
      email: email,
      phone: phone,
      address: address,
      gender: gender,
    });

    //gán list student vào a
    //localStorage.setItem('key', 'value')
    localStorage.setItem("a", JSON.stringify(students));
    this.renderListStudent();
  }
}

function renderListStudent() {
  let students = localStorage.getItem("a")
    ? JSON.parse(localStorage.getItem("a"))
    : [];
  if (students.length === 0) {
    document.getElementById("list-student").style.display = "none";
    return false;
  }

  document.getElementById("list-student").style.display = "block";

  let tableContent = `<tr>
    <td>#</td>
    <td>Họ và Tên</td>
    <td>Email</td>
    <td>Điện Thoại</td>
    <td>Địa chỉ</td>
    <td>Giới tính</td>
    <td>Action</td>
  </tr> `;

  students.forEach((student, index) => {
    index++;
    let checkGender = parseInt(student.gender) === 1 ? "nam" : " nữ";

    tableContent += `<tr>
    <td>${index}</td>
    <td>${student.fullname}</td>
    <td>${student.email}</td>
    <td>${student.phone}</td>
    <td>${student.address}</td>
    <td>${checkGender}</td>
    <td>
    <a href='#'> Edit</a> | <a href='#'> Delete</a>
    </td>
  </tr>`;
  });

  document.getElementById("list-students").innerHTML = tableContent;
}
