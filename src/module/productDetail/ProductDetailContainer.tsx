import React, { useEffect, useState } from "react";
import ProductDetailScreen from "./ProductDetailScreen";
import { useLocation, useParams } from "react-router-dom";
import { itemList } from "../../utils/data";
import LoadingScreen from "../../layout/LoadingScreen";

const ProductDetailContainer = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const [dataProduct, setDataProduct] = useState<any>(state || []);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  useEffect(() => {
    setIsLoading(true);

    const filterData = itemList?.filter((item: any) => item?.id === Number(id));
    if(filterData) {
      setDataProduct(filterData);
      setIsLoading(false);
    }
    
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen />;
  }
  return <ProductDetailScreen dataProduct={dataProduct} />;
};

export default ProductDetailContainer;
