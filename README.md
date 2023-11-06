# Petit dÃ© apprend Ã  parler Ã  papa

## Introduction

Pour rappel, nous avons appris que pour communiquer de l'enfant au parent, on utilise une fonction que l'on donne en propriÃ©tÃ© Ã  l'enfant.

## Exercice

### 1. CrÃ©er un composant enfant

On va commencer par crÃ©er un composant `Die` qui affiche un nombre alÃ©atoire entre 1 et 6.
C'est notre composant enfant.

CaractÃ©ristiques du composant `Die` :
state : `value` qui est un nombre alÃ©atoire entre 1 et 6
handler : `roll` qui met Ã  jour la valeur de `value` avec un nombre alÃ©atoire entre 1 et 6 quand on `click` sur le composant

On va ensuite l'afficher dans le composant `App` qui est notre composant parent.

### 2. Communiquer de l'enfant au parent

On va maintenant faire en sorte que le composant `Die` puisse communiquer au composant `App` la valeur de `value` quand sa valeur change.

Pour cela on va crÃ©er une propriÃ©tÃ© `onRoll` dans le composant `Die` qui prend en paramÃ¨tre une nouvelle valeur de dÃ©.
Dans `App`, on devra crÃ©er une fonction `handleRoll` qui prend en paramÃ¨tre la nouvelle valeur de `value` et qui metÃ  jour cette valeur dans `App`.
On passera ensuite cette fonction en propriÃ©tÃ© `onRoll` au composant `Die`.
On afficher ensuite la valeur du dÃ© enfant dans le composant `App`.

### 3. La somme des dÃ©s

Dans le composant `App`, on va crÃ©er un tableau `diceValues` qui contiendra les valeurs de tous les dÃ©s.
On va crÃ©er une fonction `handleRoll` qui prend en paramÃ¨tre la nouvelle valeur d'un dÃ© prÃ©cis et qui met Ã  jour cette valeur dans `App`.
Dans App, on va crÃ©er une donnÃ©es calculÃ©e `sum` qui calcule la somme des dÃ©s.
On va ensuite afficher cette somme dans le composant `App`.

### 4. Communiquer du parent Ã  l'enfant

On va maintenant fournir la valeur initial de `value` au composant `Die` quand il est crÃ©Ã© avec la propriÃ©tÃ© `value` de `Die`.
Ensuite, l'enfant sera libre de mettre Ã  jour sa valeur comme il le souhaite, comme prÃ©cÃ©demment.

