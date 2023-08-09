function handleSubmit() {
  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let phoneNumber = document.getElementById("input-phonenumber").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("input-message").value;

  if (
    name == "" ||
    email === "" ||
    phoneNumber === "" ||
    subject === "" ||
    message === ""
  ) {
    return alert("Form harus terisi semua");
  }

  let emailReceiver = "rizkyfauzi132@gmail.com";

  let a = document.createElement("a");
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo, nama saya ${name}, ${message}, silahkan hubungi saya pada nomor ${phoneNumber}`;
  a.click();

  let data = {
    name,
    email,
    phoneNumber,
    subject,
    message,
  };

  console.log(data);
}
