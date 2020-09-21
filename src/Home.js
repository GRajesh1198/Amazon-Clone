import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?fbclid=IwAR1pcRKRWhYzmMEbDJp4lHkM0sgqr2x2r79lKa5JaBib-2lbhkiINyYmvAU"
          alt=""
        />

        <div className="home__row">
          {/* Product */}

          <Product
            title="HP Chromebook 14-Inch HD Laptop, Intel Celeron N4000, 4 GB RAM, 32 GB eMMC, Chrome (14a-na0020nr, Ceramic White) "
            image="https://images-na.ssl-images-amazon.com/images/I/91XR%2B02AJBL._AC_SL1500_.jpg"
            price={350.0}
            rating={3}
          />
          <Product
            title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
            image="https://images-na.ssl-images-amazon.com/images/I/61JnrafZ7zL._AC_SL1457_.jpg"
            price={376.95}
            rating={3}
          />
          {/* Product */}
        </div>
        <div className="home__row">
          {/* Product */}
          <Product
            title="Nikon D5600 Digital Camera 18-55mm VR Kit (Black)"
            image="https://images-na.ssl-images-amazon.com/images/I/51DE4FICRGL.jpg"
            price={592.95}
            rating={3}
          />
          <Product
            title="Logitech USB Headset H390 with Noise Cancelling Mic"
            image="https://images-na.ssl-images-amazon.com/images/I/71IO46PwSwL._SL1500_.jpg"
            price={44.95}
            rating={3}
          />
          <Product
            title=" Apple iPhone 11 (64GB) - Black )"
            image="https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg"
            price={800.0}
            rating={3}
          />
          {/* Product */}
          {/* Product */}
        </div>
        <div className="home__row">
          {/* Product */}
          <Product
            title='49" Odyssey G9 Gaming Monitor'
            image="https://images-na.ssl-images-amazon.com/images/I/81P7RZ9GEnL._SL1500_.jpg"
            price="1094.98"
            rating={3}
          />
          {/* Product */}
        </div>
      </div>
    </div>
  );
}

export default Home;
