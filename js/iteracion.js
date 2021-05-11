let titulo = "Hola";

let i = 0;

while (i <= 9) {
  let card = `<div class="m-3 card" style="width: 18rem;">
<img src="https://64.media.tumblr.com/927828e2572f8d63a0eb93cdc1de97ea/4dd701c86a49d593-ef/s1280x1920/e2dae7fda3ee4ad6d1e0a47cdc3070ba9d78302e.jpg">
  <h5 class="card-title">Posicion ${i}</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`;

  document.getElementById("contenedor-tarjetas").innerHTML += card;
  i++;
}