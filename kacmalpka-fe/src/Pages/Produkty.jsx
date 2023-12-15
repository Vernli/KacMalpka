import { useLoaderData } from "react-router";

import ProductContainer from "../Components/Products/ProductContainer"

const Produkty = () => {
  const products = useLoaderData();
  return (
    <ProductContainer products={products}/>
  );
};

export const productLoader = async (request) => {
    // Kategoria produktu wyciagnieta ze strony ktora wysyla request do bazy danych
    const url = request.request.url;
    const category = url.split('/').pop();
    const res = await fetch(`http://localhost:3000/${category}`);
  
    if (!res.ok) {
      throw Error(`Nie można pobrać danych`);
    }
  
    return res.json();
  };

export default Produkty;
