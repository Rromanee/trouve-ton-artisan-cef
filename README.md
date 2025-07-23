# 🛠️ Trouve Ton Artisan – CEF

Une application web développée avec Angular permettant aux particuliers de trouver facilement un artisan et de le contacter via un formulaire sécurisé.

## ✨ Fonctionnalités

- 🔍 Recherche d'artisans par localisation, nom et spécialité
- 📧 Système de contact sécurisé avec envoi d'e-mails
- 🎨 Interface utilisateur moderne et responsive
- 📱 Compatible mobile, tablette et desktop

## 🛠️ Technologies Utilisées

**Frontend :**
- Angular 17+
- HTML5, JS, Sass, Bootstrap

**Backend :**
- Node.js
- Express.js
- Nodemailer (pour l'envoi d'e-mails)

**Outils de développement :**
- MailDev (test d'e-mails en local)
- Angular CLI

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** ≥ 18.x - [Télécharger](https://nodejs.org/)
- **npm** ≥ 9.x (inclus avec Node.js)
- **Angular CLI** ≥ 17.x
- **Git** - [Télécharger](https://git-scm.com/)

Vérifiez vos versions :
```bash
node --version
npm --version
ng version
```

## 🚀 Installation

### 1. Cloner le projet

```bash
git clone https://github.com/Rromanee/trouve-ton-artisan-cef.git
cd trouve-ton-artisan-cef
```

### 2. Configuration du Backend

```bash
# Naviguer vers le dossier backend
cd src/app/backend

# Installer les dépendances
npm install
```

### 3. Configuration du Frontend

```bash
# Revenir à la racine du projet
cd ../../../

# Installer les dépendances Angular
npm install
```

## 🏃‍♂️ Lancement de l'application

### Étape 1 : Démarrer MailDev (pour les tests d'e-mails)

```bash
# Installation globale de MailDev
npm install -g maildev

# Lancement de MailDev
maildev
```

📧 **Interface MailDev** : http://localhost:1080

### Étape 2 : Lancer le Backend

```bash
# Dans un nouveau terminal
cd src/app/backend
npm run dev
```

🔧 **API Backend** : http://localhost:3000

### Étape 3 : Lancer le Frontend

```bash
# Dans un nouveau terminal (racine du projet)
ng serve
```

🌐 **Application Frontend** : http://localhost:4200

## Application en ligne

Vous trouverez l'application hébergé sur un serveur 'alwaysData' à l'adresse suivante : https://trouveton-artisan.alwaysdata.net/


## 📚 Ressources Additionnelles

- [Documentation Angular](https://angular.dev/)
- [Angular CLI Reference](https://angular.dev/tools/cli)
- [Node.js Documentation](https://nodejs.org/docs/)
- [Express.js Guide](https://expressjs.com/)