function toggleMode() {
  //Troca o tema da página
  const html = document.documentElement
  html.classList.toggle("light")
  //Troca a foto de perfil
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/images-light.png")
    img.setAttribute(
      "alt",
      "Foto do Gojo Satoru, personagem de um anime, usando óculos escuro e bocejando."
    )
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
    img.setAttribute(
      "alt",
      "Foto do Gojo Satoru, personagem de um anime, usando óculos escuro com fundo azul."
    )
  }
}
