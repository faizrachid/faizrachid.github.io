document.write(`<nav class="navbar navbar-dark fixed-top" style="background-color:rgba(100,100,120,0.8);">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">My PortFolio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
			My PortFolio
		</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link text-dark active" aria-current="page" href="#home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#technologies">Technologies</a>
          </li>
		  <li class="nav-item">
            <a class="nav-link text-dark" href="#projects">Projects</a>
          </li>
		  <li class="nav-item">
            <a class="nav-link text-dark" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>`);