//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

    function login(user, pass){
        var user=document.getElementById('user').value;
        var pass=document.getElementById('pass').value;

        if(user.trim()==="" || pass.trim()===""){ //Checkea si los campos están en blanco o tienen algún dato
            alert("Debe rellenar los datos para continuar");
        }else{
            localStorage.setItem("usuario", user.trim()); //Guarda el usuario
            localStorage.setItem("contraseña", pass.trim()); //Guarda la contraseña
            location.href="home.html"; //Redirecciona la página a la referenciada
        }
    }

    document.getElementById('user').innerHTML=localStorage.getItem("usuario");//Trae al usuario guardado en el Login


document.addEventListener("DOMContentLoaded", function(e){});