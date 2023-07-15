const proximo = () => {
  document.querySelector(".container_for_mobile").style.display = "block";
  document.querySelector(".container_img").style.display = "none";
};

document.getElementById("proximo").addEventListener("click", function () {
  let btn = document.getElementById("proximo");
  btn.innerHTML = "Loading...";
  proximo();
});

document
  .getElementById("input_name")
  .addEventListener("keyup", function (event) {
    document.getElementById("name_card").innerText =
      document.getElementById("input_name").value;
  });

document
  .getElementById("number_card_input")
  .addEventListener("keyup", function (event) {
    document.getElementById("number_card").innerText =
      document.getElementById("number_card_input").value;
    numero_cartao = document.getElementById("number_card_input").value;
    let bandeira_cartao = "Desconhecida";

    // Verifique o primeiro dígito do número do cartão para determinar a bandeira
    if (numero_cartao.startsWith("4")) {
      bandeira_cartao = "Visa";
      console.log(bandeira_cartao);
    } else if (numero_cartao.startsWith("5")) {
      bandeira_cartao = "MasterCard";
      console.log(bandeira_cartao);
    } else if (numero_cartao.startsWith("3")) {
      bandeira_cartao = "American Express";
      console.log(bandeira_cartao);
    } // Adicione mais condições conforme necessário...
  });

document
  .getElementById("date_input")
  .addEventListener("keyup", function (event) {
    document.getElementById("date_input_card").innerText =
      document.getElementById("date_input").value;
  });
