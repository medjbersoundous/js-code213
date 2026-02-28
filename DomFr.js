//  avant de modifier quoi que ce soit dans la page on doit d'abord selectionner les elements html qu'on veut manipuler
//  il existe plusieurs methodes de selection :
//    - getElementById(id)       => selectionne un element par son id
//    - querySelector(selecteur) => selectionne le premier element qui correspond au selecteur css
//    - querySelectorAll(...)    => selectionne tous les elements qui correspondent (retourne une liste)
// ════════════════════════════════════════════════════════════
const title = document.getElementById("mainTitle"); // getElementById("mainTitle") => recherche l'element avec id="mainTitle"
 
// querySelector(".description") => le "." signifie qu'on cherche une classe css
// il va retourner le premier element qui a la classe "description"
const description = document.querySelector(".description"); 

// getElementById("list") => recupere la liste avec id="list"
const listeUl = document.getElementById("list");

// recuperation des boutons pour les utiliser dans les evenements plus bas
const changeBtn = document.getElementById("changeTextBtn");
const addBtn    = document.getElementById("addItemBtn");

// recuperation du formulaire et du champ de saisie
const form  = document.getElementById("myForm");
const input = document.getElementById("nameInput");

// recuperation d'une section 
const section1 = document.getElementById("section1");

// recuperation des elements lies au scroll et au resize
const scrollBox    = document.getElementById("scrollBox");
const scrollOutput = document.getElementById("scrollOutput");
const resizeOutput = document.getElementById("resizeOutput");

//  modification de contenu et de style: 
//  quand l'utilisateur clique sur le bouton changeBtn, on va modifier le contenu, le style et les attributs de certains elements de la page
//  addEventListener("click", function() { ... })
//    => on "ecoute" le clic sur le bouton
//    => des que l'utilisateur clique, le code "la fonction" à l'interieur s'execute

changeBtn.addEventListener("click", function () {

  // textContent => modifie uniquement le texte d'un element, tout HTML insere sera traite comme du texte brut 
  title.textContent = "title changed";

  // innerHTML => modifie le contenu HTML d'un element, ici on insere une balise <strong> qui sera reellement interpretee par le navigateur => le texte apparaîtra en gras
  description.innerHTML = "<strong>description modifiee</strong>";

  // element.style.propriete => modifie le style css directement sur l'element 
  // les proprietes css avec tiret s'ecrivent en camelCas :
      //background-color => backgroundColor
      //font-size => fontSize
  title.style.color = "purple";

  // setAttribute(nom, valeur) => ajoute ou modifie un attribut html sur l'element, ici on ajoute l'attribut : name="soundous" sur le titre
  // on peut creer n'importe quel attribut.
  title.setAttribute("name", "soundous");

  // getAttribute(nom) => lit la valeur d'un attribut existant sur l'element, ici on recupere la valeur de l'attribut "name" qu'on vient d'ajouter
  // resultat dans la console : "soundous"
  console.log(title.getAttribute("name"));

  // classList.add(classe) => ajoute la classe css "highlight" à l'element
  // l'element aura maintenant cette classe en plus de celles qu'il avait dejà "s'il existe"
  title.classList.add("highlight");

  // classList.toggle(classe): 
  // si la classe "active" est absente  => elle sera ajouter
  // si la classe "active" est presente => elle sera supprimer
  title.classList.toggle("active");
});


//  creation des nouveaux elements HTML depuis javascript: 

addBtn.addEventListener("click", function () {

  // document.createElement(tag) => cree un nouvel element html en memoire "ça veut dire que l'element existe mais n'est pas encore visible dans la page"
  // il faut l'inserer dans le dom pour qu'il apparaisse
  const newItem = document.createElement("li");

  // on donne un texte à notre nouvel element
  newItem.textContent = "new item";

  // on lui ajoute une classe css (pour le style ou pour le cibler plus tard)
  newItem.classList.add("box");

  // appendChild(element) => insere l'element comme dernier enfant de listeUl "l'element apparaît à la fin de la liste"
  listeUl.appendChild(newItem);

  // prepend(element) => insere l'element comme premier enfant de listeUl " l'element apparaît au debut de la liste"
  listeUl.prepend(newItem);

  // insertBefore(nouvelElement, elementDeReference) => insere newItem juste avant listeUl.lastElementChild (le dernier element)
  // syntaxe : parent.insertBefore(elementAInserer, elementDeReference)
  listeUl.insertBefore(newItem, listeUl.lastElementChild);
});


// suppression et remplacement d'element

// on selectionne le premier <li> qui existe dans la page
const firstItem = document.querySelector("li");

if (firstItem) {
  // element.remove() => supprime directement l'element du dom
  firstItem.remove();
}

// on cree un nouvel element <li> pour remplacer l'ancien
const newLi = document.createElement("li");
newLi.textContent = "replaced item";

if (listeUl.firstElementChild) {
  // parent.replaceChild(nouvelElement, ancienElement)=> remplace "liste.firstElementChild" (le premier enfant de la liste)
  // par "newLi" (notre nouvel element).
  // Le premier enfant existant est retire et remplace par le nouveau.
  listeUl.replaceChild(newLi, listeUl.firstElementChild);
}


//  les evenements souris se declenchent quand l'utilisateur interagit avec la souris : survol, clic, sortie etc...
//
//  Deux proprietes importantes de l'objet evenement (e) :
//    - e.target => l'element exacte qui a declenche l'evenement (celui sur lequel la souris est reellement)
//    - e.currentTarget => l'element sur lequel addEventListener est attache (pas forcement le meme que target)

// "mouseover" se declenche quand la souris entre dans l'element ou dans l'un de ses enfants 
section1.addEventListener("mouseover", function (e) {

  // e.target : l'element exact survole par la souris
  // si la souris survole un <p> à l'interieur de section1 => e.target sera ce <p>, pas section1.
  console.log("target:", e.target);

  // e.currentTarget : toujours section1, car c'est lui qui a le listener
  console.log("currenttarget:", e.currentTarget);
});


liste.addEventListener("mouseover", function (e) {
  // on verifie que l'element survole a bien la classe "box" avant d'appliquer le style (evite de modifier d'autres elements).
  if (e.target.classList.contains("box")) {
    e.target.style.backgroundColor = "yellow";
  }
});

liste.addEventListener("mouseout", function (e) {
  // "mouseout" se declenche quand la souris quitte l'element, on remet le fond à vide ("") pour revenir au style css de base.
  if (e.target.classList.contains("box")) {
    e.target.style.backgroundColor = "";
  }
});



form.addEventListener("submit", function (e) {

  // e.preventDefault() =>  empeche la page de se recharger lors de la soumission
  // sans cette ligne, la page se rechargerait et on perdrait les donnees
  e.preventDefault();

  // on recupere la valeur saisie dans le champ input
  const valueInput = input.value;

  // trim() => supprime les espaces au debut et à la fin de la chaîne
  // "   " devient "" => evite qu'un utilisateur envoie uniquement des espaces
  if (valueInput.trim() === "") {
    alert("please enter a name");
  } else {
    alert("hello " + valueInput);
  }
});

// evenement "scroll" => se declenche quand l'utilisateur scroll l'interieur de "scrollBox".
// on peut aussi l'attacher à "window" pour detecter le scroll de la page entiere
scrollBox.addEventListener("scroll", function () {
  // on met à jour le texte de scrollOutput pour informer l'utilisateur
  scrollOutput.textContent = "you are scrolling";
});

// evenement "resize" => se declenche chaque fois que l'utilisateur redimensionne la fenetre du navigateur
// attache à "window" car c'est la fenetre entiere qui change de taille
window.addEventListener("resize", function () {
  resizeOutput.textContent = "the size is being changed";
});

// evenement "load" => se declenche quand la page est entierement chargee :
window.addEventListener("load", function () {
  console.log("page loaded");
});