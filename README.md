# Compte Rendu - Atelier React Livres

## 1. Presentation du projet
Ce projet est une mini application React realisee dans le cadre d'un TP de Developpement Web Avance.
L'objectif est de manipuler les bases de React:
- creation de composants
- passage de donnees via les props
- composition d'interface
- separation claire entre logique et presentation

L'application affiche:
- un message de bienvenue
- une liste de livres sous forme de cartes
- une section categories avec description

## 2. Stack technique
- React `19.2.0`
- React DOM `19.2.0`
- Vite `7.3.1`
- ESLint `9.39.1`

## 3. Architecture de l'application
L'application suit une architecture simple et lisible, basee sur des composants reutilisables.

### 3.1 Point d'entree
- `src/main.jsx`
  - cree la racine React
  - active `React.StrictMode`
  - charge `App` et les styles globaux

### 3.2 Composant principal
- `src/App.jsx`
  - joue le role d'orchestrateur de page
  - instancie les composants enfants
  - injecte les donnees de chaque livre/categorie via props

### 3.3 Composants metier
- `src/components/MessageBienvenue.jsx`
  - affiche le message d'accueil de l'application

- `src/components/BookCard.jsx`
  - composant de presentation d'un livre
  - props: `titre`, `auteur`, `categorie`

- `src/components/CategoryCard.jsx`
  - composant de presentation d'une categorie
  - props: `nom`, `description`

### 3.4 Styles
- `src/index.css`
  - style global (body, container, cards, titres)
- `src/App.css`
  - style template Vite (actuellement non utilise par `App.jsx`)

## 4. Structure des dossiers
```text
atelier-react-livres/
|-- public/
|-- screens/
|   |-- 1.png
|   |-- 2.png
|   |-- 3.png
|   |-- 4.png
|   |-- 5.png
|   |-- 6.png
|   |-- 7.png
|-- src/
|   |-- components/
|   |   |-- BookCard.jsx
|   |   |-- CategoryCard.jsx
|   |   `-- MessageBienvenue.jsx
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- package.json
`-- README.md
```

## 5. Lancement du projet
### Prerequis
- Node.js 18+ recommande
- npm

### Commandes
```bash
npm install
npm run dev
```

Build production:
```bash
npm run build
npm run preview
```

## 6. Points forts de l'architecture
- composants petits et focalises sur une responsabilite
- props explicites et faciles a maintenir
- structure de fichiers claire pour un projet d'initiation
- separation propre entre composants et style global

## 7. Captures d'ecran
### Screen 1
![Screen 1](screens/1.png)

### Screen 2
![Screen 2](screens/2.png)

### Screen 3
![Screen 3](screens/3.png)

### Screen 4
![Screen 4](screens/4.png)

### Screen 5
![Screen 5](screens/5.png)

### Screen 6
![Screen 6](screens/6.png)

### Screen 7
![Screen 7](screens/7.png)

## 8. Conclusion
Ce TP valide les fondamentaux React (composants, props, composition) avec une base de code propre.
La structure actuelle est adaptee pour evoluer vers:
- un stockage dynamique des livres (tableau/JSON/API)
- des filtres par categorie
- des interactions utilisateur (ajout, suppression, recherche)
