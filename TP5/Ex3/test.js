const verif = () => {
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (email === "" || message === "") {
        alert("Veuillez remplir tous les champs !");
        return false; 
    }

    return true;
};

const reset = () => {
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    return false; 
}
