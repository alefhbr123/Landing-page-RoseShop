function scrollToProdutos() {
    document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
  }
  
  // Carrossel de imagens
  let slideIndex = 0;
  showSlides();
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
  
    if (n === undefined) {
      slideIndex++;
    }
    if (n !== undefined) {
      slideIndex = n;
    }
  
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    if (slideIndex < 1) {
      slideIndex = slides.length;
    }
  
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  
    slides[slideIndex - 1].style.display = "block";
  
    // Troca automaticamente a cada 4s se o usuário não clicou
    if (n === undefined) {
      setTimeout(showSlides, 4000);
    }
  }
  