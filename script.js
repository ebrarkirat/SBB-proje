document.addEventListener("DOMContentLoaded", function () {
  const kartlar = document.querySelectorAll(".mudurluk-kart");
  const mudurKutu = document.getElementById("mudur-kutu");
  const mudurAd = document.getElementById("mudur-ad");
  const mudurUnvan = document.getElementById("mudur-unvan");
  const mudurResim = document.getElementById("mudur-resim");

  let aktifKart = null;

  kartlar.forEach(function (kart) {
    kart.addEventListener("click", function () {
      if (aktifKart === kart) {
        mudurKutu.classList.add("d-none");
        aktifKart = null;
        return;
      }

      const mudur = kart.getAttribute("data-mudur");
      const unvan = kart.getAttribute("data-unvan");
      const img = kart.getAttribute("data-img");

      mudurAd.textContent = mudur;
      mudurUnvan.textContent = unvan;
      mudurResim.src = img;

      mudurKutu.classList.remove("d-none");
      mudurKutu.scrollIntoView({ behavior: "smooth" });

      aktifKart = kart;
    });
  });
});
// İletişim formu doğrulama
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("iletisimForm");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const successMsg = document.getElementById("basariMesaji");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    // İsim kontrolü
    if (name.value.trim() === "") {
      name.classList.add("is-invalid");
      isValid = false;
    } else {
      name.classList.remove("is-invalid");
    }

    // E-posta kontrolü
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      email.classList.add("is-invalid");
      isValid = false;
    } else {
      email.classList.remove("is-invalid");
    }

    // Mesaj kontrolü
    if (message.value.trim() === "") {
      message.classList.add("is-invalid");
      isValid = false;
    } else {
      message.classList.remove("is-invalid");
    }

    // Başarı mesajı
    if (isValid) {
      successMsg.classList.remove("d-none");
      form.reset();
    } else {
      successMsg.classList.add("d-none");
    }
  });
});
