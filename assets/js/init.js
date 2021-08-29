function crearDivRecuerdo(imagen,contenido,titulo1,titulo2,delay){
    let div1 = document.createElement("div");
    div1.classList.add("swiper-slide");

    let div2 = document.createElement("div");
    div2.classList.add("testimonial-item");
    div2.setAttribute("data-aos","fade-up");
    div2.setAttribute("data-aos-delay",delay);

    let p = document.createElement("p");
    let i1 = document.createElement("i");
    i1.classList.add("bx");
    i1.classList.add("bxs-quote-alt-left");
    i1.classList.add("quote-icon-left");
    let i2 = document.createElement("i");
    i2.classList.add("bx");
    i2.classList.add("bxs-quote-alt-right");
    i2.classList.add("quote-icon-right");
    var text1 = document.createTextNode(contenido);

    let img = document.createElement("img");
    img.setAttribute("src",imagen);
    img.classList.add("testimonial-img");

    let h3 = document.createElement("h3");
    var text2 = document.createTextNode(titulo1);

    let h4 = document.createElement("h4");
    var text3 = document.createTextNode(titulo2);

    p.appendChild(i1);
    p.appendChild(text1);
    p.appendChild(i2);

    h3.appendChild(text2);
    h4.appendChild(text3);

    div2.appendChild(p);
    div2.appendChild(img);
    div2.appendChild(h3);
    div2.appendChild(h4);

    div1.appendChild(div2);

    document.querySelector("#recuerdos .swiper-wrapper").appendChild(div1);
  }

  function crearDivPoema(titulo,contenido){
    let div1 = document.createElement("div");
    div1.classList.add("col-lg-4");
    div1.classList.add("col-md-6");
    div1.classList.add("icon-box");
    div1.setAttribute("data-aos","fade-up");

    let div2 = document.createElement("div");
    div2.classList.add("icon");

    let i1 = document.createElement("i");
    i1.classList.add("bi");
    i1.classList.add("bi-briefcase");

    let h4 = document.createElement("h4");
    h4.classList.add("title");

    let p = document.createElement("p");
    p.classList.add("description");

    div2.appendChild(i1);

    for(var i=0; i< titulo.length; i++){
      h4.appendChild(document.createTextNode(titulo[i]));
      h4.appendChild(document.createElement("br"));
    }
    
    for(var i=1; i< contenido.length; i++){
      p.appendChild(document.createTextNode(contenido[i]));
      p.appendChild(document.createElement("br"));
    }

    div1.appendChild(div2);
    div1.appendChild(h4);
    div1.appendChild(p);
    document.querySelector("#liricas .poema-container").appendChild(div1);
  }

  function crearDivFoto(imagen, filter, title){
    let div1 = document.createElement("div");
    div1.classList.add("col-lg-4");
    div1.classList.add("col-md-6");
    div1.classList.add("portfolio-item");
    div1.classList.add("filter-" + filter);
    
    let div2 = document.createElement("div");
    div2.classList.add("portfolio-wrap");

    let img = document.createElement("img");
    img.setAttribute("src",imagen);
    img.classList.add("img-fluid");
    
    let div3 = document.createElement("div");
    div3.classList.add("portfolio-links");

    let a1 = document.createElement("a");
    a1.setAttribute("href",imagen);
    a1.setAttribute("data-gallery","portfolioGallery");
    a1.classList.add("portfolio-lightbox");
    a1.setAttribute("title",title);

    let i1 = document.createElement("i");
    i1.classList.add("bx");
    i1.classList.add("bx-plus");

    let a2 = document.createElement("a");
    a2.setAttribute("href","portfolio-details.html");
    a2.setAttribute("title","More Details");

    let i2 = document.createElement("i");
    i2.classList.add("bx");
    i2.classList.add("bx-link");

    a1.appendChild(i1);
    a2.appendChild(i2);
    div3.appendChild(a1);
    div3.appendChild(a2);

    div2.appendChild(img);
    div2.appendChild(div3);
    div1.appendChild(div2);
    document.querySelector("#fotos .portfolio-container").appendChild(div1);  
    
    const portfolioLightbox = GLightbox({
      selector: '.portfolio-lightbox'
    });
    
  }

  function insertarFotos(){
    var rPath = "assets/img/fotos/foto";
    var n = document.querySelector(".portfolio-container").getAttribute("value");
    for(var i=1; i<=n; i++){
      crearDivFoto(rPath + i + ".jpg", "jime", "Jime " + i);
    }
  }

  function insertarPoemas(){
    var rPath = "assets/docs/poemas/poema";
    var n = document.querySelector(".poema-container").getAttribute("value");
    
    for(var i =1; i<=n;i++){
      var xhttp = new XMLHttpRequest();
      var path = rPath + i + ".txt"
      xhttp.open("GET",path,true);
      xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
          var contenido = this.responseText;
          var arrayContenido = contenido.split("-");
          var tituloPoema = arrayContenido[0].split("\n");
          var contenidoPoema = arrayContenido[1].split("\n");
          crearDivPoema(tituloPoema,contenidoPoema);
        }
    }
    xhttp.send();
    }
    
  }

  function insertarRecuerdos(){

  }

  function modalFilters(){
    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
  }

  function loadFilters(){
    var n = document.querySelector("#portfolio-flters").getAttribute("value");
    
    var xhttp = new XMLHttpRequest();
    var path = "assets/docs/filters.txt";
    xhttp.open("GET",path,true);
    xhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        var contenido = this.responseText;
        var arrayContenido = contenido.split("\n");
      }
    for(var i=0; i<n;i++){
      let li = document.createElement("li");
      li.setAttribute("data-filter",".filter-" + arrayContenido[i]);
      li.appendChild(arrayContenido[i]);
      document.querySelector("#portfolio-flters").appendChild(li);
    }
  }

  function init(){
    loadFilters();
    insertarFotos();
    insertarPoemas();
    insertarRecuerdos();
    crearDivRecuerdo("assets/img/jime.png","Contenido del recuerdo","PibuBear","Dibujito","100");
    modalFilters();
  }
  
  window.onload = init;