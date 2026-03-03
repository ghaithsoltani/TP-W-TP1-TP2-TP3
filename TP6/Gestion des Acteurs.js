class Acteur {

    #salaire;
    static salaireBase = 1000;

    constructor(id = null, nom = null, domaine = null, age = null) {
        this.id = id;
        this.nom = nom;
        this.domaine = domaine;
        this._age = age; // privé par convention
        this.#salaire = Acteur.salaireBase;
    }

    // Getter & Setter salaire
    get salaire() {
        return this.#salaire;
    }

    set salaire(valeur) {
        if (valeur >= Acteur.salaireBase) {
            this.#salaire = valeur;
        } else {
            console.log("Salaire invalide ! Minimum 1000 DT");
        }
    }

    afficher() {
        return `ID: ${this.id}, Nom: ${this.nom}, Age: ${this._age}, Domaine: ${this.domaine}, Salaire: ${this.#salaire} DT`;
    }
}

// 1. Acteur générique
const acteur0 = new Acteur();

// 2. Création des acteurs
const acteur1 = new Acteur("09876", "Hend Sabri");
const acteur2 = new Acteur("12510", "Jaafer Gasmi", "Comedie");
const acteur3 = new Acteur("32350", "Dafer Abeddine", "Drama", 40);

// 3. Affichage initial
console.log(acteur1.afficher());
console.log(acteur2.afficher());
console.log(acteur3.afficher());

// 4. Attribuer âge à Jaafer
acteur2._age = 35;

// 5. Compléter infos manquantes
acteur1.domaine = "Cinema";
acteur1._age = 45;

acteur2.domaine = "Comedie";

// 6. Affichage modifié
console.log(acteur1.afficher());
console.log(acteur2.afficher());
console.log(acteur3.afficher());

// 7. Modifier salaire
acteur1.salaire = 1500;
acteur2.salaire = 900; // refusé