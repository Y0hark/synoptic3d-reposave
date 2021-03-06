# Le projet POC_v1 avec xeogl

## Installer Jetty et configuration de l'environnement

1. Installer Jetty (https://repo1.maven.org/maven2/org/eclipse/jetty/jetty-distribution/9.4.31.v20200723/jetty-distribution-9.4.31.v20200723.zip)
2. Extraire le dossier Jetty et le copier dans le répertoire de votre choix.
3. Se rendre dans */votre_chemin/jetty/webapps/*.
4. Copier-Coller le fichier *xeogl_pocv1.xml* présent dans le dossier *ressources* du répo.
5. Modifier la ligne `<Set name="resourceBase">[...]/synoptic3d\xeogl\POC_v1</Set>` en fonction de l'emplacement où vous avez cloné le répo.

## Lancer le projet

1. Lancer le serveur fraîchement installé en ouvrant une fenêtre PowerShell à la racine du dossier *jetty/*.
2. Lancer le serveur avec la commande *java -jar .\start.jar*
3. Se rendre sur *localhost:8080* puis sélectionner le POC_v1 et lancer le projet sur le serveur.

## Interaction et but du projet

Ce projet a pour but de mettre en scène un objet à visualiser et d'intégrer des contrôles afin de pouvoir se déplacer dans la scène.

### Les contrôles

* La caméra : Pour tourner la caméra il suffit de bouger la souris en maintenant le click gauche.
* Les déplacements : Pour se déplacer, il faut utiliser les flèches du clavier et utiliser la molette de la souris pour zoomer.