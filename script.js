function entrar() {
  document.getElementById("inicio").classList.add("hidden");
  document.getElementById("personagens").classList.remove("hidden");
}

function mostrar(personagem) {
  document.getElementById("personagens").classList.add("hidden");
  document.getElementById("mensagem").classList.remove("hidden");

  let nome = document.getElementById("nome");
  let fala = document.getElementById("fala");
  let img = document.getElementById("imgPersonagem");

  if (personagem === "nanami") {
    nome.innerText = "Nanami";

    img.src =
      "assets/Jujutsu-Kaisen-Nanami-pode-ganhar-memorial-na-Malasia.webp";

    fala.innerText =
      "Algumas pessoas tornam o mundo menos cansativo de viver. Você parece ser uma delas.";
  }

  if (personagem === "toji") {
    nome.innerText = "Toji";

    img.src = "assets/wp13077136.jpg";

    fala.innerText =
      "Força não é só lutar. Às vezes é simplesmente existir e ainda assim fazer o mundo parecer mais interessante.";
  }

  if (personagem === "itadori") {
    nome.innerText = "Itadori";

    img.src = "assets/download.jpg";

    fala.innerText =
      "Se salvar pessoas é importante, então proteger alguém como você seria algo que vale a pena.";
  }
}

function voltar() {
  document.getElementById("mensagem").classList.add("hidden");
  document.getElementById("personagens").classList.remove("hidden");
}

function surpresa() {
  document.getElementById("mensagem").classList.add("hidden");
  document.getElementById("final").classList.remove("hidden");

  cairCoracoes();
}

function cairCoracoes() {
  setInterval(() => {
    const coracao = document.createElement("div");

    coracao.innerHTML = "❤️";

    coracao.style.position = "fixed";
    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.top = "-10px";
    coracao.style.fontSize = "24px";
    coracao.style.pointerEvents = "none";
    coracao.style.zIndex = "999";

    document.body.appendChild(coracao);

    let pos = 0;

    const animar = setInterval(() => {
      pos += 2;
      coracao.style.top = pos + "px";

      if (pos > window.innerHeight) {
        clearInterval(animar);
        coracao.remove();
      }
    }, 20);
  }, 300);
}
