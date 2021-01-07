# Polyrythmique


## À propos

Cette application a pour but d'aider les rythmiciens et rythmicienne à enregistrer leurs polyrythmies.
Elle propose trois fonctionnalités majeures : la prise de rythme de zéro, la prise de rythme sur fond
musical et un métronome. Les détails de ces fonctionnalités sont spécifiées dans le cahier des charges à la racine du dépôt.

Cette application est développée par plusieurs groupes d'étudiants de Polytech Tours en quatrième année d'informatique. Le commanditaire du projet est Sylvain FABRE.
Mathieu DELALANDRE s'occupe de l'encadremment du projet.

Ce dépôt git contient les parties 1 et 2 du projet, intitulées respectivement "application mobile" et "réseau" développées
à l'aide de la technologie front Angular par le groupe 25 de l'année 2020-2021 composé de Yacine DAHBI et Célie PAUTREL.


## Technologies utilisées

Le développement de l'application se fait à l'aide du framework javascript <a href="https://angular.io">Angular</a>.
Les feuilles de styles sont écrites en <a href="https://sass-lang.com">SASS</a>. La documentation du code est générée par <a href="https://compodoc.app">CompoDoc</a>.


## Organisation

L'établissement du cahier des charges à été fait avec les dix élèves s'occupant de développer les différentes parties du projet lors de l'année 2020-2021. L'organisation s'est faite via <a href="https://drive.google.com/drive/u/0/folders/1AaT02hcMIAUH1brQZjQVty9p-RlhUltc">Google Drive</a> et un serveur discord.

Une fois le cahier des charges établit, nous avons défini le type et la forme des données qui seront passées entre les différentes parties du projet.

Le développement est fait séparément par chaque groupe. Nous possédons un <a href="https://drive.google.com/drive/u/0/folders/1hZ3fyTK6NMRb3P3QUoIZ0C5QQG39dSzV">Google Drive</a>,
un <a href="https://trello.com/b/707qIlIW/polyrythmique">Trello</a> et un serveur discord.


## Documentation

Étant donné que le projet est destiné a être développé par différents groupes d'étudiants sur plusieures années différentes, il est extrêmement important de créer une documentation propre, complète et lisible.

La documentation du code est écrite en anglais, avec traduction française des termes musicaux, et générée avec <a href="https://compodoc.app">CompoDoc</a>. Le reste de la documentation se fait via les fichiers README.

### CompoDoc

Pour générer la documentation exécutez cette commande dans le répertoire du projet Angular :

```
npm run compodoc
```
Ensuite, accédez au site http://127.0.0.1:8080 pour accéder à la documentation.


## Règles de nommage (utilisées pour la totalité du dépôt)
L'application est développée en anglais.
Les fichiers JSON transitant entre les différentes parties du projet seront quant à eux en français, car les groupes s'occupant des bibliothèques polyrythmique et musicale ont préféré travailler avec des données écrites en français.

| Objets concernés | Casse |
| ---------------- | ----- |
| Fichiers<br />Dossiers | `kebab-case` |
| **Typescript :**<br />Variables<br />Fonctions<br />Attributs<br />Méthodes | `camelCase` |
| **SASS :**<br />Variables<br />Mixins<br />Etc. | `kebab-case` |
| Constantes<br />Variables d’environnement<br />Valeurs des enum | `UPPER_SNAKE_CASE` |
| Enum<br />(Classes) | `PascalCase` |

### Traduction des termes musicaux

Sources des traductions : [Web music school](https://web-music-school.fr/traduction-musicale/), [Linguee](https://www.linguee.fr/francais-anglais/traduction/)

Certians des termes employés ne sont pas musicalement corrects, car non utilisés, mais sont utilisé lors de la programmation.

#### Rythmes binaires

Français | Anglais
-------- | -------
triolet de noires                 | quarter note triplet
quatre croches                    | four eight notes
noire                             | quarter note
deux croches                      | two eight notes
croche pointée double             | dotted eight note sixteenth note
double croche double              | sixteenth note eight note sixteenth note
croche deux doubles               | eight note two sixteenth notes
deux doubles croche               | two sixteenth notes eight note
quatre doubles                    | four sixteenth notes
triolet de croches                | eight note triolet
deux doubles                      | two sixteenth notes
soupir                            | quarter note rest
demi soupir                       | height note rest
quart de soupir                   | sixteenth note rest
demi pause                        | half note rest
pause                             | whole note rest


### Rythmes ternaires

Français | Anglais
-------- | -------
noire pointée                     | dotted quarter note
noire                             | quarter note
croche                            | height note
trois croche                      | three eight notes
six doubles                       | six sixteenth notes
deux doubles                      | two sixteenth notes
croche quatre doubles             | eight note four sixteenth notes
quatre doubles croche             | four sixteenth notes eight note
croche deux doubles croche        | eight note two sixteenth notes eight note
sicilienne (croche double croche) | sicilian (eight note sixteenth note eight note)
deux croches deux doubles         | two eight notes two sixteenth notes
deux doubles deux croches         | two sixteenth notes two eight notes
croche pointée trois doubles      | dotted eight note three sixteenth notes
trois doubles croche pointée      | three sixteenth notes dotted eight
deux doubles croche deux doubles  | two sixteenth notes eight note two sixteenth notes
duolet                            | duplet
soupir pointé                     | dotted quarter note rest
demi soupir pointé                | dotted eight note rest
demi soupir                       | eight note rest
quart de soupir                   | sixteenth note rest
demi pause pointée                | dotted half note rest


#### Autres termes

Français | Anglais
-------- | -------
Anacrouse | Anacrusis

Vous trouverez une traduction de noms d'instruments [ici](https://wallstreetenglish.fr/fiches-anglais/vocabulaire/instruments-musique-en-anglais).



## Important
Le fichier `_vars.sass` présent à la racine du git est à déplacer dans le dossier ignoré par git `locamat/nodes_module/sass`
