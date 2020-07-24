<!DOCTYPE HTML>
<html lang="fr">

<head>
  <script>
  function sabre(){
    var sabre = new Audio();
    sabre.src= "SON/sabre.mp3";
    sabre.play();
  }
  </script>
  <link rel="icon" type="image/png" href="IMAGES/Page_Acceuil/dark_vador.png" />
  <link rel="stylesheet" type="text/css" href="FONCTION_PHP/Pied_de_page.css" />
  <link rel="stylesheet" type="text/css" href="CSS/page_d'acceuil.css">
  <link rel="stylesheet" type="text/css" href="CSS/menu.css">
  <meta charset="utf-8">
  
  <title>STAR WARS</title>
</head>

<body>

    <h1 class="titre" onclick="gene()">STAR WARS</h1>

  <nav>
      <ul>

        <li><a target="blank" href="SITE/film1.php" onclick="sabre()">1er film</a></li>
        <li><a target="blank" href="SITE/film2.php" onclick="sabre()">2ème film</a></li>
        <li><a target="blank" href="SITE/film3.php" onclick="sabre()">3ème film</a></li>
        <li><a target="blank" href="SITE/film4.php" onclick="sabre()">4ème film</a></li>
        <li><a target="blank" href="SITE/film5.php" onclick="sabre()">5ème film</a></li>
        <li><a target="blank" href="SITE/film6.php" onclick="sabre()">6ème film</a></li>
        <li><a target="blank" href="SITE/film7.php" onclick="sabre()">7ème film</a></li>
        <li><a target="blank" href="SITE/film8.php" onclick="sabre()">8ème film</a></li>
        <li><a target="blank" href="SITE/film9.php" onclick="sabre()">9ème film</a></li>
        <li><a target="blank" href="SITE/avis.php" onclick="sabre()">Avis</a></li>
        <li><a target="blank" href="SITE/creation.php" onclick="sabre()">Création</a></li>
        <li><a target="blank" href="SITE/musique.php" onclick="sabre()">Musique</a></li>
          
      </ul>
  </nav>
  <table>
  <tr>
  <td>
            <img src="IMAGES/GIFPUB.gif"  class="gif" alt="ma pub" />
  </td>
  </tr>
  <tr>
      <td class="ecarttd"><a href="SITE/copyright.php"><span class="ecarttd">Copyright</span></a></td>
    </td>
    </tr>
    <tr>
    <td class="ecarttd">© Disney tous droits réservés.</td>
    </tr>
    </table>        
</body>

</html>