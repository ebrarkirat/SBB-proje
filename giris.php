<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Giriş Yap</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
</head>
<body class="bg-light">

  <!-- Başlık ve Logo -->
  <div class="container d-flex align-items-center py-4">
    <img src="img/sbb-logo.png" alt="Logo" height="60" class="me-3">
    <div>
      <h1 class="h5 text-primary mb-0">SAKARYA BÜYÜKŞEHİR BELEDİYESİ</h1>
      <small class="text-muted">Bilgi İşlem Daire Başkanlığı</small>
    </div>
  </div>

  <!-- Giriş Formu -->
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-5 bg-white p-4 rounded shadow-sm">

        <h2 class="text-center text-primary mb-4">Giriş Yap</h2>

        <?php
        $hata = "";

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
          $eposta = $_POST["eposta"];
          $sifre = $_POST["sifre"];

          // Örnek kullanıcı 
          $dogruEposta = "admin@sakarya.bel.tr";
          $dogruSifre = "12345";

          if ($eposta === $dogruEposta && $sifre === $dogruSifre) {
            echo '<div class="alert alert-success">Giriş başarılı. Hoş geldiniz!</div>';
          } else {
            $hata = "E-posta veya şifre hatalı!";
          }
        }

        if (!empty($hata)) {
          echo '<div class="alert alert-danger">' . $hata . '</div>';
        }
        ?>

        <form method="POST" action="">
          <div class="mb-3">
            <label for="eposta" class="form-label">E-posta</label>
            <input type="email" class="form-control" id="eposta" name="eposta" required>
          </div>
          <div class="mb-3">
            <label for="sifre" class="form-label">Şifre</label>
            <input type="password" class="form-control" id="sifre" name="sifre" required>
          </div>
          <button type="submit" class="btn btn-primary w-100">Giriş Yap</button>
        </form>

      </div>
    </div>
  </div>

</body>
</html>
