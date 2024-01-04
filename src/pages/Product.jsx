import React, { useContext } from 'react'
import './styles/product.css';
import { useParams } from 'react-router';
import { ShopContext } from '../context/ShopContext'
import BreadCrum from '../components/breadCrum/BreadCrum';
import ProductDisplay from '../components/productDisplay/ProductDisplay';
import DescriptionBox from '../components/descriptionBox/DescriptionBox';
import RelatedProducts from '../components/relatedProducts/RelatedProducts';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} =  useParams();
  const product = all_product.find((e) =>e.id === Number(productId))
  return (
    <div>
      <BreadCrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product