# Le projet POC_v3 avec Babylonjs

## Installer Node.js et préparer l'environnement d'exécution

1. Installer Node.js (https://nodejs.org/dist/v12.18.3/node-v12.18.3-x64.msi pour les PC Windows x64)
2. Lancer le terminal de commande Node.js dans le dossier où se trouve *POC_v2*
3. Installer Babylon via la commande **npm install --save babylonjs**
4. Installer les Babylon-GUI (Graphic User Interface) avec la commande **npm install --save babylonjs-gui**
5. Installer le serveur webpack via **npm install --save-dev webpack webpack-cli webpack-dev-server**

## Lancer le projet

1. Lancer le serveur fraîchement installé avec la commande **npx webpack-dev-server**
2. Se rendre sur *localhost:8080* pour visualiser le projet et intéragir avec

## Interaction et but du projet

Ce projet a pour but de mettre en scène une un entrepôt dans lequel sont disposées des étagères et des boîtes.
Les boîtes sont agencées de manière aléatoire, le but étant de pousser l'exploration du framework un peu plus loin que le *POC_v1*.

### Les contrôles

* La caméra : Pour tourner la caméra il suffit de maintenir le click et de bouger la souris.
* Les déplacements : Pour se déplacer, il faut utiliser les flèches du clavier.
