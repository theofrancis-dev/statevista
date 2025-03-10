function fillHero(){
  let heroElement = document.getElementById("section-hero");
  if (heroElement){   
    heroElement.classList.add('hero');
    heroElement.classList.add('mb4');

    heroElement.innerHTML = `<div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >        
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="./img/hero_img_port.jpg"
              alt="Rhode Island Port at sunset."
            />
            <div class="carousel-caption d-done d-md-block">
              <h1 class="hero_h1 lobster-regular">Welcome to the State of Rhode Island</h1>
              <h2 class="hero_h2">The Ocean State</h2>
            </div>
          </div>

          <div class="carousel-item">
            <img
              src="./img/hero_img_lighthouse.jpg"
              alt="United States • Newport • Rhode Island • Castle Hill Light"
            />
            <div class="carousel-caption d-done d-md-block">
              <h1 class="hero_h1 lobster-regular">Welcome to the State of Rhode Island</h1>
              <h2 class="hero_h2">Little Rhody</h2>
            </div>
          </div>

          <div class="carousel-item">
            <img
              src="./img/hero_img_skyline.jpg"
              alt="Providence, Rhode Isalnd, Skyline"
            />
            <div class="carousel-caption d-done d-md-block">
              <h1 class="hero_h1 lobster-regular">Welcome to the State of Rhode Island</h1>
              <h2 class="hero_h2">Plantation State</h2>
            </div>
          </div>
        </div>

        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>`;
  } else{
    return false;
  }

};

function fillHeader(){
  headerElement = document.querySelector('header');   
  if (headerElement!=null) {
    headerElement.innerHTML= `  <div class="state-logo">
        <img
          src="https://www.dropbox.com/scl/fi/1tt2gn3j4eteadupfihva/ri_state_seal.jpg?rlkey=6e774g583elkpmrzryzu6nnl9&st=o0f32yjh&raw=1"
          alt="state seal"
          width="110px"
          height="auto"
        />
        <span id="lbl_state_name">Rhode Island State</span>
      </div>
      <nav class="navbar navbar-expand-lg navbar-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar">
          <ul class="navbar-nav">
            <li  class="nav-item">
            <a id="nav-index" class="nav-link" href="./index.html">Home</a></li>
            <li class="nav-item dropdown">
              <a
                id="nav-cityvista"
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Cities</a
              >
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="./cityvista.html#providence">Providence</a>
                <a class="dropdown-item" href="./cityvista.html#newport">Newport</a>
                <a class="dropdown-item" href="./cityvista.html#warwick">Warwick</a>
              </div>
            </li>
            <li  class="nav-item">
            <a id="nav-about" class="nav-link" href="./about.html">About</a></li>
            <li class="nav-item"><a id="nav-contact" class="nav-link" href="./contact.html">Contact</a></li>
          </ul>
        </div>
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </nav>`;
  } else {
    console.error("No header element found in the document.")
  }
};

function fillFooter(){
    const footer = document.getElementById("footer");

    if (footer!=null){
      footer.classList.add("text-center");
      footer.classList.add("mt-4");
      footer.innerHTML = `<div class="footer-links">
      <a href="#"><i class="fa fa-facebook-official" style="font-size:36px"></i></a>
      <a href="#"><i class="fa fa-instagram" style="font-size:36px"></i></a>
      <a href="#"><i class="fa fa-twitter-square" style="font-size:36px"></i></a>
      </div>
      <p>Copyright © 2025 Theo Francis. All rights reserved.</p>`; 
    }
    
};

/**This function will highlihgt the current nav menu */
function setActivePage(){
  let full_url = window.location.href;
  let pageName = full_url.substring(full_url.lastIndexOf('/')+1); 
  //remove extension
  nav_id = 'nav-' + pageName.split('.')[0];
  const navElement = document.getElementById(nav_id);

  if (navElement != null) {
   navElement.classList.add('active');
  }
  
}

document.addEventListener('DOMContentLoaded', () => {    
    fillHero();
    fillHeader();
    fillFooter();
    setActivePage();
  });