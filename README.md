# phredd-lotr
Angular Lotr battle game

Jeux de bataille de figurine inspiré sur Seigneur des Anneaux
2 equipes en hotseat

bug :
* apres deplacement d'une unité, sa case de depart reste inaccessible aux autres unités.
* apres avoir tué un ennemy, l'unité reste selectionné
* la porté des armes ne fonctionne pas toujours

optimisation :
* fnComputeTeam : simlifier les calculs pour ne pas avoir a tout recalculer lors d'une blessure ou d'un kill
* ameliorer la structure de la map

todo :
* gestion de compte user
* save/load game
* genererr map
* disposition manuelle des troupes sur la map
* IA pour jeu en solo contre l'ordinateur
