// Billet.js (simple)

document.getElementById("btnCalc").onclick = function () {
  const depart = document.getElementById("depart").value;
  const dest = document.getElementById("destination").value;
  const date = document.getElementById("dateDepart").value;

  // If date empty => error message under <hr>
  if (date === "") {
    document.getElementById("msg").textContent ="Erreur : Veuillez choisir la date de votre départ!!";
    document.getElementById("prix").value = "";
    return;
  } else {
    document.getElementById("msg").textContent = "";
  }

  // Price table (Adult)
  let p = 0;
  if (depart === "Tunisie" && dest === "France") 
    p = 300;
  if (depart === "Tunisie" && dest === "Italie") 
    p = 200;
  if (depart === "Maroc" && dest === "France") 
    p = 400;
  if (depart === "Maroc" && dest === "Italie") 
    p = 500;

  // Numbers
  const a = Number(document.getElementById("adulte").value) || 0;
  const e = Number(document.getElementById("enfants").value) || 0;
  const b = Number(document.getElementById("bebes").value) || 0;

  // Total: child 50%, baby 30%
  const total = a * p + e * (0.5 * p) + b * (0.3 * p);

  document.getElementById("prix").value = Math.round(total);
};
