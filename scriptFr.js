"use strict"; // active le mode strict : aide à détecter les erreurs courantes comme l'utilisation de variables non déclarées

// 'var' est l'ancienne façon de déclarer des variables
var old = "avoid me";

// 'let' est pour les variables dont la valeur peut changer (modifiable)
let jhghcg = 0;

// 'const' est pour les variables qui ne doivent jamais être réassignées (immuable)
// idéal pour les valeurs fixes comme les constantes mathématiques
const PI = 3.14159;

// mettre à jour une variable 'let', c'est autorisé
jhghcg = jhghcg + 1;

// =====================================================================

let str = "soundous";  // string  => du texte, toujours écrit entre guillemets
let num = 42;           // number  => les entiers et les décimaux utilisent le même type en js
let bool = true;        // boolean => seulement deux valeurs possibles : true ou false
let empty = null;       // null    => intentionnellement vide / aucune valeur
let undef;              // undefined => déclarée mais pas encore assignée
undef = "defined";      // maintenant elle a une valeur donc elle n'est plus undefined

// =====================================================================

let age = 20;

// une façon d'écrire un if/else sur une seule ligne :
// condition ? valeurSiVrai : valeurSiFaux
let go = age > 20 ? "You can go" : "You cannot go";
// age vaut 20, pas strictement supérieur à 20, donc go = "You cannot go"
console.log(go); // résultat : "You cannot go"

// =====================================================================

let hasID = true;

// && (et) => les deux côtés doivent être vrais pour retourner true
console.log(age > 18 && hasID); // true && true => true

// || (ou) => au moins un côté doit être vrai pour retourner true
console.log(age > 18 || false); // true || false => true

// !  (non) => inverse la valeur booléenne
console.log(!hasID); // !true => false

// =====================================================================

let numbers = [1, 2, 3, 4, 15, 20, 14];

// .filter() : garde uniquement les éléments qui respectent une condition (retourne un nouveau tableau)
// ici on garde seulement les nombres supérieurs à 10
let even = numbers.filter((num) => num > 10);
console.log(even); // résultat : [15, 20, 14]

// .sort() : trie en place (modifie le tableau original)
// (a, b) => a - b signifie trier par ordre croissant (du plus petit au plus grand)
// si le résultat est négatif, a vient en premier. si positif, b vient en premier.
numbers.sort((a, b) => a - b);
console.log(numbers); // résultat : [1, 2, 3, 4, 14, 15, 20]

// .reduce() : combine tous les éléments en une seule valeur
// il prend un callback(accumulateur, valeurCourante) et une valeur de départ (0 ici)
// à chaque itération, on ajoute le nombre courant au total
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // résultat : 59 (1+2+3+4+14+15+20)

// .reduce() peut aussi fonctionner sur des chaînes de caractères
// ici on commence avec " " (un espace) et on concatène chaque lettre
let letters = ["H", "i", "!"];
let word = letters.reduce((rslt, letter) => rslt + letter, " ");
console.log(word); // résultat : " Hi!"

// Array.from() : crée un tableau à partir de n'importe quel "itérable" (comme une chaîne)
// chaque caractère devient un élément
let letters1 = Array.from("soundous");
console.log(letters1); // résultat : ['s','o','u','n','d','o','u','s']

let numbers2 = [5, 10, 15, 20];

// .find() : retourne uniquement le premier élément qui correspond à la condition
// s'arrête dès qu'il trouve une correspondance
let result = numbers2.find((num) => num > 10);
console.log(result); // résultat : 15

// .findIndex() : même idée mais retourne l'index (la position) au lieu de la valeur
let index = numbers2.findIndex((num) => num > 10);
console.log(index); // résultat : 2 (15 est à la position 2)

// =====================================================================

let names = ["adem", "sara", "ali"];

// .includes() est sensible à la casse ! "Adem" ≠ "adem"
console.log(names.includes("Adem")); // résultat : false

let nom = "soundous";

// deux façons de concaténer des chaînes :
let hey = "hello" + nom;         // ancienne façon avec +
let hey2 = `hello ${nom}`;       // façon moderne avec les template literals
console.log(hey2, hey);          // résultat : "hello soundous" "hellosoundous"
// vérifier si le pseudo est déjà pris avant d'autoriser un utilisateur
if (names.includes(nom)) {
    console.log("change your name, this name is already used");
} else {
    console.log("welcome " + nom); // résultat : "welcome soundous"
}

// =====================================================================

// ici on crée une file d'attente (queue), une structure de données qui fonctionne comme une file :
// premier entré premier sorti (fifo), le premier élément ajouté est le premier à être retiré.

class Queue {
  constructor() {
    // 'this.items' est le tableau interne qui stocke les éléments de la file
    this.items = [];
  }

  // enqueue => ajoute un élément à la fin de la file
  enqueue(element) {
    this.items.push(element);
  }

  // dequeue => retire et retourne l'élément en tête de file
  dequeue() {
    return this.items.shift(); // .shift() supprime le premier élément
  }

  // peek => regarde l'élément en tête sans le supprimer
  peek() {
    return this.items[0];
  }

  // isEmpty => retourne true s'il n'y a aucun élément dans la file
  isEmpty() {
    return this.items.length === 0;
  }
}

// =====================================================================

// dans un tableau classique, le dernier entré est le premier sorti (lifo)
let arr = [];
arr.push(1);          // [1]
console.log(arr);     // résultat : [1]
arr.push(2);          // [1, 2]
console.log(arr);     // résultat : [1, 2]
arr.push(3);          // [1, 2, 3]
console.log(arr);     // résultat : [1, 2, 3]
arr.pop();            // supprime 3 (le dernier élément)
console.log(arr);     // résultat : [1, 2]

// =====================================================================

// dans une file (queue), le premier entré est le premier sorti (fifo)
let newarray = new Queue();       // crée une nouvelle instance de queue
console.log(newarray.items);      // résultat : [] (vide au départ)

newarray.enqueue(10);             // file : [10]
newarray.enqueue(20);             // file : [10, 20]
newarray.enqueue(30);             // file : [10, 20, 30]
console.log(newarray.items);      // résultat : [10, 20, 30]

// remarque : dequeue() ignore tout argument qu'on lui passe !
// l'argument 20 ici n'a aucun effet, il retire toujours le premier élément
newarray.dequeue(20);             // retire 10 (le premier élément), pas 20
newarray.dequeue();               // retire le premier élément qui est maintenant 20
console.log(newarray.items);      // résultat : [30]

console.log(newarray.peek());     // résultat : 30 (tête de la file)
console.log(newarray.items);      // résultat : [30] (peek ne supprime rien)

// functions part 

function bubbleSort(arr) {
  // la première boucle contrôle combien de passages complets on effectue
  // si le tableau contient n éléments, on peut avoir besoin de jusqu'à n passages pour garantir que tout est trié
  for (let i = 0; i < arr.length; i++) {
    // la deuxième boucle compare les éléments deux par deux, on compare arr[j] avec arr[j + 1], c'est pourquoi on s'arrête à arr.length - 1
    for (let j = 0; j < arr.length - 1; j++) {
      // si le nombre de gauche est plus grand que celui de droite, ils sont dans le mauvais ordre => on les échange
      if (arr[j] > arr[j + 1]) {
        // étape 1 : stocker temporairement la valeur de gauche
        let temp = arr[j];
        // étape 2 : déplacer la plus petite valeur vers la gauche
        arr[j] = arr[j + 1];
        // étape 3 : mettre la plus grande valeur à droite
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}
console.log(bubbleSort([3, 5, 1, 0, 2]));

function selectionSort(arr) {
  // on avance position par position, à chaque position i on essaie de placer le plus petit élément correct
  for (let i = 0; i < arr.length; i++) {
    // on suppose que l'index actuel contient la plus petite valeur
    let min = i;

    // chercher une valeur plus petite dans le reste du tableau
    for (let j = i + 1; j < arr.length; j++) {
      // si on trouve un nombre plus petit, on met à jour l'index min
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    // après la recherche, on sait maintenant où se trouve la plus petite valeur
    // on l'échange avec la position i
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }

  return arr;
}

console.log(selectionSort([5, 3, 8, 4]));

function insertionSort(arr) {
  // on commence à l'index 1 car on considère que l'index 0 est déjà trié
  for (let i = 1; i < arr.length; i++) {
    // l'élément que l'on veut insérer
    let key = arr[i];

    // comparer avec les éléments précédents
    let j = i - 1;

    // tant qu'on n'est pas au début et que l'élément précédent est plus grand que key
    while (j >= 0 && arr[j] > key) {
      // décaler l'élément d'une position vers la droite
      arr[j + 1] = arr[j];
      // se déplacer vers la gauche
      j--;
    }
    // insérer key à la bonne position
    arr[j + 1] = key;
  }

  return arr;
}

console.log(insertionSort([5, 3, 8, 4]));

function linearSearch(arr, target) {
  // commencer depuis le début
  for (let i = 0; i < arr.length; i++) {
    // comparer chaque élément avec la valeur recherchée
    if (arr[i] === target) {
      // si trouvé, retourner l'index
      return i;
    }
  }

  // si on arrive ici, la valeur n'existe pas dans le tableau
  return -1;
}

console.log(linearSearch([10, 20, 30], 20));

function binarySearch(arr, target) {
  // la recherche binaire fonctionne uniquement sur des tableaux triés, elle divise la zone de recherche en deux à chaque étape
  let left = 0; // index de début
  let right = arr.length - 1; // index de fin

  while (left <= right) {
    // trouver la position du milieu
    let mid = Math.floor((left + right) / 2);

    // si le milieu est égal à la valeur recherchée
    if (arr[mid] === target) {
      return mid;
    }

    // si la valeur du milieu est plus petite que la cible => ignorer la moitié gauche
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      // sinon ignorer la moitié droite
      right = mid - 1;
    }
  }

  return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5], 4));

// suite de fibonacci : 0, 1, 1, 2, 3, 5, 8, 13...
// chaque nombre est la somme des deux nombres précédents
function fibonacci(n) {

  // cas de base (condition d'arrêt) sans cela la récursion ne s'arrête jamais
  if (n <= 1) return n;

  // cas récursif : on divise le problème en sous problèmes plus petits
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6));