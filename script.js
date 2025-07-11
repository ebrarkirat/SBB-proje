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

