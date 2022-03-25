var textQ1 = "";
var textQ2 = "";
var textQ3 = "";
var textQ4 = "";
var textAns = "";

function bootStrap() {
  var nomeJog = document.getElementById("nameUser").value;
  var elementoUm = document.getElementById("questOne");

  textQ1 =
    "<label>Qual área da programação você deseja seguir, " +
    nomeJog +
    "?</label><br><select id='ansOne'><option value='1'>Front-end</option><option value='2'>Back-end</option></select><button onclick='respUm()' id='submitOne'>Escolher</button>";
  elementoUm.innerHTML = textQ1;
}

function respUm() {
  var elementoDois = document.getElementById("questTwo");
  var escolhaUm = document.getElementById("ansOne").value;

  if (escolhaUm == 1) {
    textQ2 =
      "<label>Nesse caso, você deseja aprender React ou Vue?</label><br><select id='ansTwo'><option value='1'>React</option><option value='2'>Vue</option></select><button onclick='respDois()' id='submitTwo'>Escolher</button>";
    elementoDois.innerHTML = textQ2;
  } else {
    textQ2 =
      "<label>Nesse caso, você deseja aprender C# ou Java?</label><br><select id='ansTwo'><option value='1'>C#</option><option value='2'>Java</option></select><button onclick='respDois()' id='submitTwo'>Escolher</button>";
    elementoDois.innerHTML = textQ2;
  }
}

function respDois() {
  var elementoTres = document.getElementById("questThree");

  textQ3 =
    "<label>E você vai se especializar em uma área, ou vai se desenvolver até atingir o nível de Fullstack?</label><br><select id='ansThree'><option value='1'>Vou me especializar</option><option value='2'>Vou me tornar Fullstack</option></select><button onclick='respTres()' id='submitThree'>Escolher</button>";
  elementoTres.innerHTML = textQ3;
}

function respTres() {
  var elementoQuatro = document.getElementById("questFour");
  var escolhaTres = document.getElementById("ansThree").value;

  if (escolhaTres == 1) {
    textQ4 =
      "<p>Espero que você se torne um expert famoso da sua área!</p><br><p>E me diga, quais são as tecnologias nas quais você gostaria de se especializar?</p><br><button onclick='tecnologias()' id='tecs'>Tecnologias</button>";
    elementoQuatro.innerHTML = textQ4;
  } else {
    textQ4 =
      "<p>Tenho certeza que você logo se tornará um grande Fullstack! Um verdadeiro canivete suiço!</p><br><p>E me diga, quais são as tecnologias nas quais você gostaria de se especializar?</p><br><button onclick='tecnologias()' id='tecs'>Tecnologias</button>";
    elementoQuatro.innerHTML = textQ4;
  }
}

function tecnologias() {
  var elementoFinal = document.getElementById("finalAns");
  var entradasTec = window.prompt("Adicionar nova tecnologia!");

  if (entradasTec != null && entradasTec != "") {
    var novaEntradaTec = window.prompt(
      "Essa é uma ótima escolha! Tenho certeza que você vai se sair bem! Gostaria de adicionar outra?"
    );

    while (novaEntradaTec != null && novaEntradaTec != "") {
      novaEntradaTec = window.prompt(
        novaEntradaTec +
          " também é uma excelente escolha! Vais arrasar! Gostaria de adicionar outra?"
      );
    }
  } else {
    textAns =
      "<p>Muito bem! Espero que você tenha muito sucesso e muita felicidade na sua caminhada!!!</p>";
    elementoFinal.innerHTML = textAns;
  }
  textAns =
    "<p>Muito bem! Espero que você tenha muito sucesso e muita felicidade na sua caminhada!!!</p>";
  elementoFinal.innerHTML = textAns;
}