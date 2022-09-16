import React, { useEffect, useState } from 'react';
import Card from './Card';
import Skeleton from '@material-ui/lab/Skeleton';

const apiUrl = 'https://api.mocklets.com/p68278/sneakr';
// const apiUrl = 'products.json';

const CardList = ({ img, type, material, name, price, id }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const Loading = () => {
    return Array(9)
      .fill()
      .map((item, index) => {
        return (
          <div
            key={index}
            className="p-4 m-1 my-2 bg-white rounded-md shadow md:my-4 sm:w-64"
          >
            <div className="w-48 sm:w-auto">
              <Skeleton variant="rect" width="100%" height="12rem" />
              <div className="flex items-center text-gray-300">
                <Skeleton variant="text" height="0.7rem" width="35%" />
              </div>
              <Skeleton variant="text" height="2rem" />
              <Skeleton variant="text" height="1.5rem" width="45%" />
            </div>
          </div>
        );
      });
  };
  const getProducts = async () => {
    const response = await fetch(apiUrl);
    const products = await response.json();
    setProducts(products);
    setLoading(true);
  };
  const Listing = () => {
    return products.map((prod) => {
      return <Card key={prod.id} {...prod} />;
    });
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div
      className="grid grid-cols-2 m-auto sm:p-0 md:grid-cols-3 xl:grid-cols-4 sm:gap-x-4 md:gap-x-8 w-max"
      style={{ width: 'fit-content' }}
    >
      {!isLoading ? <Loading /> : <Listing />}
    </div>
  );
};

export default CardList;
