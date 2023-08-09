/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

 document.getElementById("loginForm1").addEventListener("submit", function(event) {
            event.preventDefault();

            // Obtener los valores del formulario
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            
            // Leer el archivo JSON con los usuarios y contraseñas
            fetch("jsons/usersSucursal.json")
                .then(response => response.json())
                .then(data => {
                    const users = data.user;
                    const userD = users.find(user => user.username === username && user.password === password && user.tipo==="admin");
                    const userU = users.find(user => user.username === username && user.password === password && user.tipo==="usuario");
                    
                    if (userD) {
                     alert("Inicio de sesión exitoso. ¡Bienvenido admin!");
                        window.location.href="SicefaSucursal/menuSu.html";
                        // Aquí puedes redirigir al usuario a otra página o realizar alguna acción posterior al inicio de sesión exitoso.
                    }
                    else if(userU){
                        alert("Inicio de sesión exitoso. ¡Bienvenido usuario!");
                        window.location.href="SicefaSucursal/menuSu.html";
                    }
                    else {
                        alert("Credenciales incorrectas. Inténtalo de nuevo.");
                    }
                })
                .catch(error => {
                    console.error("Error al leer el archivo JSON", error);
                });
        });
        
        
        document.getElementById("loginForm2").addEventListener("submit", function(event) {
            event.preventDefault();

            // Obtener los valores del formulario
            const username1 = document.getElementById("username2").value;
            const password1 = document.getElementById("password2").value;

            // Leer el archivo JSON con los usuarios y contraseñas
            fetch("jsons/usersCentral.json")
                .then(response => response.json())
                .then(data => {
                    const users = data.user;
                    const userD = users.find(user => user.username === username1 && user.password === password1 && user.tipo==="admin");
                    const userUs = users.find(user => user.username === username1 && user.password === password1 && user.tipo==="usuario");
                    
                    if (userD){
                     alert("Inicio de sesión exitoso. ¡Bienvenido admin!");
                        window.location.href="SicefaCentral/menu.html";
                       
                    
                    let nombre=document.getElementById("usu").innerHTML=user.nombre;
                            
                        // Aquí puedes redirigir al usuario a otra página o realizar alguna acción posterior al inicio de sesión exitoso.
                    }
                    else if(userUs){
                        alert("Inicio de sesión exitoso. ¡Bienvenido usuario!");
                        window.location.href="SicefaCentral/menu.html";
                    } else {
                        alert("Credenciales incorrectas. Inténtalo de nuevo.");
                    }
                })
                .catch(error => {
                    console.error("Error al leer el archivo JSON", error);
                });
        });