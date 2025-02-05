let friends = []

function agregarAmigo() {
  
  let input = document.getElementById("amigo")
  let friendSecret = input.value

  if (friendSecret === "") {
    alert("por favor ingrese un nombre valido")
    return
  }

  friends.push(friendSecret)
 

  let listaAmigos = document.getElementById("listaAmigos")
  listaAmigos.innerHTML = "";
  friends.forEach(function(friend){
   let item = document.createElement("li");
   item.textContent = friend 
   listaAmigos.appendChild(item);

  });
  

  input.value = "" 
  input.innerHTML = "";
  
}

function sortearAmigo() {
    
    let number = Math.floor(Math.random() * friends.length);
    let resultado = document.getElementById("resultado")
    resultado.textContent = "El amigo secreto sorteado es " + friends[number]

    
}