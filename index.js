let amigos = [];
let amigo=[];document.getElementById(enviar).onclick = function(){
    let amigo = document.getElementById('nomes').value.trim();
    if(amigo){
     amigos.push(amigo)
        for(let i = 0; i <amigos.length; i++){
            document.getElementById('lista').innerHTML = `${(amigos)[i]}`
        }
        }
    }