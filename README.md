# Room Homepage - Frontend Mentor Challenge

Ce projet est une solution au [Room Homepage Challenge](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq) sur Frontend Mentor. L'objectif était de créer une page d'accueil en utilisant HTML, CSS et JavaScript avec React, tout en respectant au mieux le design fourni.

## Table des Matières

- [Room Homepage - Frontend Mentor Challenge](#room-homepage---frontend-mentor-challenge)
  - [Table des Matières](#table-des-matières)
  - [Aperçu](#aperçu)
  - [Fonctionnalités](#fonctionnalités)
  - [Technologies Utilisées](#technologies-utilisées)
  - [Utilisation](#utilisation)
  - [Ce Que J'ai Appris](#ce-que-jai-appris)
  - [Défis](#défis)

## Aperçu

Le projet "Room Homepage" est une page d'accueil pour un site de mobilier. Il propose aux utilisateurs une section d'image principale dynamique qui peut être naviguée via des boutons. Les images affichées sont adaptées pour les vues desktop et mobile. Le site est conçu pour être entièrement responsive et fonctionnel sur plusieurs tailles d'écran.

## Fonctionnalités

- **Layout Responsive** : Le design s'adapte à différentes tailles d'écrans, y compris les versions desktop et mobile.
- **Carousel d'Images Dynamique** : Utilisation de `framer-motion` pour des transitions fluides entre les images principales.
- **Navbar pour Mobile et Desktop** : Un menu hamburger apparaît sur mobile avec un bouton de fermeture pour une navigation facile.
- **Transitions Animées** : Utilisation de `framer-motion` pour des animations fluides lors des changements d'images.
- **Boutons de Navigation** : Les utilisateurs peuvent naviguer entre les images du carousel via des boutons de navigation personnalisés.

## Technologies Utilisées

- **React** : Utilisé pour construire l'interface utilisateur.
- **CSS (sans framework)** : Pour le style de l'application.
- **Framer Motion** : Pour gérer les animations et transitions d'images.
- **Vite** : Utilisé pour un bundling rapide lors du développement.

## Utilisation

Une fois le serveur démarré, vous pouvez accéder à l'application via [http://localhost:3000](http://localhost:3000). La page affichera la version desktop si vous avez un écran large, ou la version mobile si vous redimensionnez votre fenêtre ou utilisez un appareil mobile.

## Ce Que J'ai Appris

Ce projet m'a permis de m'améliorer sur plusieurs aspects :

- **Disposition des Images** : J'ai appris à utiliser CSS Grid pour positionner les images de manière plus efficace, ce qui m'a toujours posé problème par le passé.
- **Framer Motion** : J'ai découvert comment créer des animations fluides et réactives pour améliorer l'expérience utilisateur.
- **useRef et Calcul Dynamique de Largeur** : Une des parties dont je suis le plus fier est le calcul que j'ai implémenté pour gérer les boutons de navigation du carousel en utilisant `useRef` afin de calculer dynamiquement la largeur.

## Défis

- **Responsive Design** : Le passage de la version desktop à la version mobile a nécessité une gestion soignée des images et du layout. J'ai utilisé des hooks React pour détecter la taille de l'écran et changer les images en fonction de la largeur de la fenêtre.
