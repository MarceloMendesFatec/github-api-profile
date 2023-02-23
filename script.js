function search() {
    var userName = document.getElementById("inputName").value;

    var url = `https://api.github.com/users/${userName}`;

    $.getJSON(url, (user) => {
      setDataUser(user);
      clearError();

    }).fail( () => {
       setDataUser({});
        showError();
    });
}




function showError(){
    document.getElementById("error").innerHTML = "<div class='alert alert-danger' 'role=alert'> Nao Encontrado ! </div>";

};

function clearError(){
    document.getElementById("error").innerHTML = "";
};


function setDataUser(user){ 
    document.getElementById("name").innerHTML = user.name || "";
    document.getElementById("company").innerHTML = user.company || "";
    document.getElementById("html_url").innerHTML = user.html_url || "";
    document.getElementById("avatar_url").innerHTML = user.avatar_url ? 
                                                   ` <img  src=${user.avatar_url} class= "shadow rounded " 
                                                    width="200px" height="200px"> ` : "";
};