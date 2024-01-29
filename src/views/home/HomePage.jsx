import images from "../../utils/images";
import "../../styles/HomePage.scss";
import {
  Title,
  ProductList,
  Preloader,
} from "../../components/common";
import { ProductContext } from "../../context/productContext";
import { useContext } from "react";

import { ToastContainer } from "react-toastify";

const HomePage = () => {
  const { productsLoading, products } = useContext(ProductContext);

  console.log(products);

  return (
    <main className="bg-secondary">
      <section className="sc-banner">
        <div className="banner-item h-100 img-cover">
          <img src={images.banner_1} alt="banner_image" className="img-cover" />
        </div>
      </section>

      <section className="sc-wrapper py-5">
        <Title title={"Our Products"} />
        {productsLoading ? <Preloader /> : <ProductList products={products} />}
      </section>

      <ToastContainer />
    </main>
  );
};

export default HomePage;
