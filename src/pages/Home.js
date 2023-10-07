import React from 'react'
import './Home.css'
<<<<<<< HEAD

function Home() {
  return (
    <div className="container-fluid" id="homeId">
        <div id="carousel">
      <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/images/homeimg-1.jpg" className="d-block w-100" alt="not found"/>
    </div>
    <div className="carousel-item">
      <img src="/images/homeimg-2.jpg" className="d-block w-100" alt="not found"/>
    </div>
    <div className="carousel-item">
      <img src="/images/homeimg-3.jpg" className="d-block w-100" alt="not found"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
=======
import MainCarousel from '../components/MainCarousel'

function Home() {
  return (
    <div classNameName="container-fluid" id="homeId">
      <MainCarousel />
      <div classNameName="container-fluid" id="homeimg-cont">
        <div classNameName="homeimg">
          <img src="/images/homeimg.png" alt="" />
        </div>
      </div>

      {/* <div classNameName="trending-products">

        <div className="text-center container py-5">
          <h4 className="mt-4 mb-5"><strong>Bestsellers</strong></h4>
          
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4 home-product">
              <div className="card">
                <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light box"
                  data-mdb-ripple-color="light">
                  <img src="/images/vegchicken.png"
                    className="w-50 hover-img" />
                  <img src="/images/vegchicken.png"
                    className="w-50 hover-img" />
                </div>
                <div className="card-body">
                  <a href="" className="text-reset">
                    <h5 className="card-title mb-3">Veg Meat, 200gm</h5>
                  </a>
                  <div><button classNameName="btn btn-primary">Add to Cart</button></div>
                  <h6 className="mb-3">₹700</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 home-product">
              <div className="card">
                <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light box"
                  data-mdb-ripple-color="light">
                  <img src="/images/vegchicken.png"
                    className="w-50 hover-img" />
                  <img src="/images/vegchicken.png"
                    className="w-50 hover-img" />
                </div>
                <div className="card-body">
                  <a href="" className="text-reset">
                    <h5 className="card-title mb-3">Product name</h5>
                  </a>
                  <div><button classNameName="btn btn-primary">Add to Cart</button></div>
                  <h6 className="mb-3">₹700</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 home-product">
              <div className="card">
                <div className="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
                <img src="/images/vegchicken.png"
                    className="w-50 hover-img" />
                <img src="/images/vegchicken.png"
                    className="w-50 hover-img" />
                </div>
                <div className="card-body">
                  <a href="" className="text-reset">
                    <h5 className="card-title mb-3">Product name</h5>
                  </a>
                  <div><button classNameName="btn btn-primary">Add to Cart</button></div>
                  <h6 className="mb-3">
                    <strong className="ms-2 ">₹500</strong>
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4 home-product">
              <div className="card">
                <div className="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
                <img src="/images/vegchicken.png"
                    className="w-50 hover-img" />
                <img src="/images/vegchicken.png"
                    className="w-50 hover-img" />
                </div>
                <div className="card-body">
                  <a href="" className="text-reset">
                    <h5 className="card-title mb-3">Product name</h5>
                  </a>
                  <div><button classNameName="btn btn-primary">Add to Cart</button></div>
                  <h6 className="mb-3">
                    <strong className="ms-2 ">₹500</strong>
                  </h6>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 home-product">
              <div className="card">
                <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light box"
                  data-mdb-ripple-color="light">
                  <img src="/images/vegchicken.png"
                    className="w-50 hover-img" />
                  <img src="/images/vegchicken.png"
                    className="w-50 hover-img" />
                </div>
                <div className="card-body">
                  <a href="" className="text-reset">
                    <h5 className="card-title mb-3">Product name</h5>
                  </a>
                  <div><button classNameName="btn btn-primary">Add to Cart</button></div>
                  <h6 className="mb-3">₹700</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 home-product">
              <div className="card">
                <div className="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
                <img src="/images/vegchicken.png"
                    className="w-50 hover-img" />
                <img src="/images/vegchicken.png"
                    className="w-50 hover-img" />
                </div>
                <div className="card-body">
                  <a href="" className="text-reset">
                    <h5 className="card-title mb-3">Product name</h5>
                  </a>
                  <div><button classNameName="btn btn-primary">Add to Cart</button></div>
                  <h6 className="mb-3">
                    <strong className="ms-2 ">₹500</strong>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div> 

      </div>*/}

      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <img className="card-img-top w-50 mx-auto p-3" src="/images/vegchicken.png" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Veg Chicken, 150gm(Buy2 Get 1 Free)</h5>
                <p className="card-text">Rs.130</p>
                <div className="overlay d-flex align-items-center justify-content-center">
                  <a href="#" className="btn btn-primary mx-2" id="cart">Add to Cart</a>
                  <a href="#" className="btn btn-secondary mx-2" id="cart">View Details</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <img className="card-img-top w-50 mx-auto p-3" src="/images/vegsausage.png" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Plant Based Sausages- Spicy, 200gm</h5>
                <p className="card-text">Rs.299</p>
                <div className="overlay d-flex align-items-center justify-content-center">
                  <a href="#" className="btn btn-primary mx-2" id="cart">Add to Cart</a>
                  <a href="#" className="btn btn-secondary mx-2" id="cart">View Details</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <img className="card-img-top w-50 mx-auto m-5" src="/images/soysauce.png" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Next Yakiniku Soy Sauce (Japanese Style Grilled Meat ) ( Pack of 3) - 150g</h5>
                <p className="card-text">Rs.1,065</p>
                <div className="overlay d-flex align-items-center justify-content-center">
                  <a href="#" className="btn btn-primary mx-2" id="cart">Add to Cart</a>
                  <a href="#" className="btn btn-secondary mx-2" id="cart">View Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <img className="card-img-top w-50 mx-auto p-3" src="/images/vegmeat.png" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Veg Meat, 200gm</h5>
                <p className="card-text">Rs.170</p>
                <div className="overlay d-flex align-items-center justify-content-center">
                  <a href="#" className="btn btn-primary mx-2" id="cart">Add to Cart</a>
                  <a href="#" className="btn btn-secondary mx-2" id="cart">View Details</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <img className="card-img-top w-50 mx-auto m-1 p-4" src="/images/sesamesauce.png" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Next Yakiniku Sesame Sauce (Japanese Style Grilled Meat) ( Pack of 3) - 150g</h5>
                <p className="card-text">Rs.1,065</p>
                <div className="overlay d-flex align-items-center justify-content-center">
                  <a href="#" className="btn btn-primary mx-2" id="cart">Add to Cart</a>
                  <a href="#" className="btn btn-secondary mx-2" id="cart">View Details</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <img className="card-img-top w-50 mx-auto" src="/images/veglollipop.png" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Veg Crispy Lollipop, 200gm</h5>
                <p className="card-text">Rs.330</p>
                <div className="overlay d-flex align-items-center justify-content-center">
                  <a href="#" className="btn btn-primary mx-2" id="cart">Add to Cart</a>
                  <a href="#" className="btn btn-secondary mx-2" id="cart">View Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

>>>>>>> origin/kaushik
    </div>
  )
}

<<<<<<< HEAD
export default Home
=======
export default Home;
>>>>>>> origin/kaushik
