function fillHeroe(){

};

function fillNavbar(){

};

function fillFooter(){
    const footer = document.getElementById("footer");
    footer.classList.add("text-center");
    footer.classList.add("mt-4");

 footer.innerHTML = `<div class="footer-links">
 <a href="#"><i class="fa fa-facebook-official" style="font-size:36px"></i></a>
 <a href="#"><i class="fa fa-instagram" style="font-size:36px"></i></a>
 <a href="#"><i class="fa fa-twitter-square" style="font-size:36px"></i></a>
 </div>
 <p>Copyright © 2025 Theo Francis. All rights reserved.</p>`; 
};


document.addEventListener('DOMContentLoaded', () => {    
    fillHeroe();
    fillNavbar();
    fillFooter();
  });