import React, { useEffect, useState } from 'react';
import Card from './Card';
import Skeleton from '@material-ui/lab/Skeleton';

const apiUrl = 'https://api.mocklets.com/p68278/e-commerce';

const CardList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const Loading = () => {
    return Array(9)
      .fill()
      .map((item, index) => {
        return (
          <div
            key={index}
            className="m-1 sm:m-auto my-2 sm:my-6 p-4 sm:w-64 bg-white shadow rounded-md"
          >
            <div className="w-48 sm:w-auto">
              <Skeleton variant="rect" width="100%" height="12rem" />
              <div className="flex items-center text-gray-300">
                <Skeleton variant="text" height="0.7rem" width="25%" />
                <span className="ml-1 mr-1">&bull;</span>
                <Skeleton variant="text" height="0.7rem" width="25%" />
              </div>
              <Skeleton variant="text" height="2rem" />
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
      className="m-auto sm:p-0 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-x-4 md:gap-x-8 w-max"
      style={{ width: 'fit-content' }}
    >
      {!isLoading ? <Loading /> : <Listing />}
    </div>
  );
};

export default CardList;
