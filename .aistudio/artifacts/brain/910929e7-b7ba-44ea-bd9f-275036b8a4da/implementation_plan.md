# Intégration du Logo SHIFT & Harmonisation de la Marque

Remplacement des mentions textuelles de marque par le nouveau logo officiel vectoriel/graphique **SHIFT** dans la barre de navigation principale (desktop et mobile) et dans le footer, avec alignement de l'ensemble des textes, témoignages et mentions légales sur la marque SHIFT.

### User Review & Critical Decisions

> [!IMPORTANT]
> Les préférences suivantes ont été confirmées lors de la phase de cadrage :

- **Emplacements du logo** : Affichage prioritaire dans la barre de navigation (header flottant) et dans le footer en bas de page.
- **Taille d'affichage** : Hauteur calibrée entre `28px` et `32px` (`h-7` à `h-8`) sur grand écran et `24px` (`h-6`) sur mobile, assurant une parfaite netteté sans déformer la barre de navigation.
- **Harmonisation de la marque** : Remplacement systématique de "Cosmic Digital Studio" / "Cosmic Digital" par **SHIFT** dans les textes de section (notamment *"À qui s'adresse SHIFT"*), les citations clients et les documents légaux (Politique de Confidentialité, CGU, Mentions Légales).

---

### 1. Overview & Core Concept

- **Ce que fait le composant** : Remplace les placeholders textuels par le logo distinctif SHIFT (`/assets/aistudio/Logo_Principal__1__f096069a.png`), caractérisé par sa typographie stylisée prune/magenta, parfaitement en phase avec les teintes d'accentuation du site (`#46004e` et `#d20090`).
- **Public cible** : Visiteurs de la plateforme e-commerce SHIFT, offrant une identité visuelle immédiate, professionnelle et affirmée.
- **Bénéfice clé** : Cohérence de marque totale entre les éléments graphiques, la navigation et les mentions textuelles.

---

### 2. User Experience & Visual Design

- **Barre de Navigation (Top Bar Contract)** :
  - *Desktop* : Le logo SHIFT prend place à gauche dans la zone de marque (`h-7 md:h-8 w-auto object-contain pl-6 hover:opacity-90 transition-opacity`), respectant le gabarit compact de la barre flottante.
  - *Mobile* : Version logo fluide (`h-6 w-auto pl-3`) remplaçant l'acronyme "CDS", assurant une lisibilité immédiate même sur petits écrans.
- **Footer de Navigation** :
  - Affichage du logo SHIFT dans le bloc de gauche du footer, avec un traitement optique clair (`brightness-0 invert opacity-90` ou intégration naturelle sur fond contrasté) pour garantir un contraste optimal sur fond sombre.
  - Copyright mis à jour : `© 2026 SHIFT. Tous droits réservés.`
- **Titres & Contenus** :
  - Section 3 renommée : `À qui s'adresse SHIFT`.
  - Citations des témoignages actualisées pour citer la marque SHIFT avec authenticité.

---

### 3. Key Product Decisions & Trade-Offs

- **Décision 1 : Intégration de l'asset d'origine haute fidélité**
  - *Approche choisie* : Utiliser directement le fichier `/assets/aistudio/Logo_Principal__1__f096069a.png` fourni par l'utilisateur.
  - *Pourquoi* : Respecte à 100% le logo validé par le client, avec ratio d'aspect préservé (`w-auto object-contain`).
- **Décision 2 : Dimensionnement maîtrisé (28px - 32px)**
  - *Approche choisie* : Limiter la hauteur à `h-7 md:h-8` pour ne pas augmenter l'épaisseur de la barre de navigation fixe.
  - *Pourquoi* : Préserve le Top Bar Contract et la compacité de la navigation flottante sur tous les viewports.
- **Décision 3 : Harmonisation globale du nom textuel**
  - *Approche choisie* : Mettre à jour l'ensemble des mentions éditoriales pour éviter toute dissonance entre le logo affiché (SHIFT) et les textes (Cosmic).

---

### 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                        Assets / Logo Source                            │
│           /public/assets/aistudio/Logo_Principal__1__f096069a.png      │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
               ┌────────────────────┴────────────────────┐
               ▼                                         ▼
┌───────────────────────────────┐         ┌──────────────────────────────┐
│           Navbar              │         │           Footer             │
│  • Desktop Logo (h-7 md:h-8)  │         │  • Logo SHIFT blanc/inversé  │
│  • Mobile Logo (h-6)          │         │  • Mentions copyright SHIFT  │
│  • Alt text "SHIFT"           │         │  • Aria-labels SHIFT socials │
└───────────────────────────────┘         └──────────────────────────────┘
               │                                         │
               └────────────────────┬────────────────────┘
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                   Contenus & Textes Modifiés                           │
│  • src/App.tsx : Section "À qui s'adresse SHIFT", citations clients    │
│  • src/components/LegalModal.tsx : Remplacement Cosmic -> SHIFT        │
└────────────────────────────────────────────────────────────────────────┘
```

- **Fichiers impactés** :
  1. `src/App.tsx` : Remplacement du logo textuel dans `<nav>` par la balise `<img>` du logo SHIFT, et mise à jour des occurrences textuelles dans les sections.
  2. `src/components/Footer.tsx` : Intégration du logo SHIFT et mise à jour des mentions.
  3. `src/components/LegalModal.tsx` : Actualisation des mentions légales et de politique de confidentialité avec le nom SHIFT.
