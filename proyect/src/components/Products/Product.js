import React from "react";
import Left from "../../assets/img/icon-feather-arrow-left-circle.svg"
import Right from "../../assets/img/icon-feather-arrow-right-circle.svg"
const Product = () => {
    return(
        <section id="products" className="section products">
        <div className="products__content">
            <div className="products__cards">
                <div>
                    <h3>Sed ut perspiciatis</h3>
                    <h2>Nemo Enim</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam.</p>
                </div>
                <div className="d-none">
                    <h3>Sed ut perspiciatis</h3>
                    <h2>Nemo Enim</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam.</p>
                </div>
                <div className="d-none">
                    <h3>Sed ut perspiciatis</h3>
                    <h2>Nemo Enim</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam.</p>
                </div>
                <div className="products__card-navs">
                    <a href="#about" className="nav-left">
                        <img
                            src={Left} alt=""/></a>
                    <a href="#about" className="nav-right"><img
                            src={Right} alt=""/></a>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Product;