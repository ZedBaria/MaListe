function showSpoiler(id)
    {
    var boite = document.getElementById("case");
    if (boite.style.display == "none") //si l'element est caché
        boite.style.display = "block"; //on l'affiche
    if(id == 'Description')
    { 
        boite.innerHTML="Ayant obtenu mon BTS SNIR et étant inscrit à l'école EPSI la Défense, je suis en recherche d'alternance en tant que développeur (Système et Web). <br><br>Je me présente Mehdi PICHARD, agé de 20 ans, passionné par l'informatique grâce à mon père qui pratique Arduino. Depuis je m'intéresse à tout ce qui tourne autour du développement informatique.<br><br> J'ai réalisé différents projets en Arduino tous très passionnants, qui m'ont permis de développer mes capacités à travailler en équipe.</p>";
    }
    if(id == 'Formations')
    {
        boite.innerHTML="<span class='gras'>Etudiant en Bachelor 3ème année</span><br>Octobre 2020<br>Entrée à l'école EPSI<br><br><span class='gras'>Formation en programmation WEB</span><br>Suivie sur le site Udemy proposant différents enseignements :<br>Programmation WEB : HTML/CSS/PHP/SQL/JAVASCRIPT<br><br><span class='gras'>Etudiant en BTS SNIR</span><br>Septembre 2018/Juillet 2020<br><br><span class='gras'>Baccalauréat STI2D AC</span><br>Juin 2018";
    }
    if(id == 'Expériences')
    {
        boite.innerHTML="<span class='gras'>Technicien Sharepoint (Stage) à Sogitec (filiale DASSAULT AVIATION)</span><br>20 MAI 2019 - 28 JUIN 2019<br><br>Stage en 1re année de BTS en gestion de base de données à l’aide de l’outil SharePoint<br><br><span class='gras'>Observation de Maintenance informatique</span><br>FEVRIER 2015<br><br>Stage d'observation dans le magasin STCEvente d'appareil d'informatique en tout genre";
    }
    if(id == 'Compétences')
    {
        boite.innerHTML="<span class='gras'>Maîtrise du Système Office</span><br><br><span class='gras'>Langages informatique :</span><br>C, C++<br>HTML, CSS, PHP, JavaScript<br>JAVA<br>LINUX<br><br><span class='gras'>Arduino : Codage et câblage</span>";
    }
    if(id == 'Projets')
    {
        boite.innerHTML="Réalisation d’un site Web dédié à STAR WARS(HTML,CSS,PHP).<br><br><div class='image'><img src='fondstarwars.PNG' width='700' height='400'></img></div><br>Réalisation d’une sonnette de porte, avec matériel Arduino grâce à une connexion radio.<br><br>Réalisation d’un module permettant la manipulation d’un Robot (Hercule 2000) à l’aide d’un joystick codé en Java.<div class='image'><img src='robot.png' width='400' height='700'></img></div>";
    }
    if(id == 'Contact')
    {
        boite.innerHTML="<span class='gras'>Numéro :</span> 07 84 27 94 42 <br><br> <span class='gras'>Email :</span> picharmehdi@gmail.com <br><br> <span class='gras'>Adresse : </span>36 rue Villebois Mareuil 92230, Gennevilliers <br><br> <span class='gras'>Linkedin :<a target='_blank' href='https://www.linkedin.com/in/mehdi-pichard/'> Allez-y </a></span>";
    }

}
