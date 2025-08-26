let amigos = [];
    document.getElementById('enviar').onclick = function(){
        let amigo = document.getElementById('nomes').value.trim()
        if(amigo){
            amigos.push(amigo)
           document.getElementById('nomes').value = '';
            document.getElementById('lista').innerHTML = ' ';
            for( let i = 0; i < amigos.length; i++){
                document.getElementById('lista').innerHTML += `<li>${amigos[i]}`
            }
        }
    }
document.getElementById('sortear').onclick =function(){
    let sorteado = amigos[Math.floor(Math.random()* amigos.length)]
    document.getElementById('lista2').innerHTML = `<li> o sorteado é : ${sorteado}</li>`
}