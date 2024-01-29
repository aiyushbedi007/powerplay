import "../../styles/HomePage.scss";
import {
  Title,
  ProductList,
  Preloader,
} from "../../components";
import { ProductContext } from "../../context/productContext";
import { useContext } from "react";

import { ToastContainer } from "react-toastify";

const HomePage = () => {
  const { productsLoading, products } = useContext(ProductContext);

  return (
    <main className="bg-secondary">
      <section className="sc-wrapper py-5">
        <Title title={"Our Products"} />
        {productsLoading ? <Preloader /> : <ProductList products={products} />}
      </section>

      <ToastContainer />
    </main>
  );
};

export default HomePage;
