document.write(`
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" 		  style="border:1px solid black;width:100%;">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
	<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
	<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div class="carousel-inner" >
    <div class="carousel-item active" data-bs-interval="5000">
      <img src="assets/images/task.png" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Task Automation</h5>
      </div>
    </div>
	
    <div class="carousel-item" data-bs-interval="5000">
      <img src="assets/images/web.png" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Web Application</h5>
      </div>
    </div>
	
    <div class="carousel-item" data-bs-interval="5000">
      <img src="assets/images/mobile.png" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Mobile Development</h5>
      </div>
    </div>
	
	<div class="carousel-item" data-bs-interval="5000">
      <img src="assets/images/dbms.png" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>DataBase Managment</h5>
      </div>
    </div>
	
	<div class="carousel-item" data-bs-interval="5000">
      <img src="assets/images/ml.png" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Machine Learning</h5>
      </div>
    </div>
	
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`
);