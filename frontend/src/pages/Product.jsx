import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
import WhatsAppButton from '../components/WhatsaApp';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size,setSize] = useState('');

  const fetchProductsData = async () => {
    products.forEach((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return;
      }
    });
  };

  useEffect(() => {
    fetchProductsData();
  }, [productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Main Container */}
      <div className="flex flex-col sm:flex-row gap-12">
        {/* Image Section */}
        <div className="flex-1 flex flex-col sm:flex-row gap-4">
          {/* Thumbnail List */}
          <div className="flex sm:flex-col gap-2 sm:w-[20%]">

            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                alt={`thumb-${index}`}
                className="w-[24%] sm:w-full sm:h-auto cursor-pointer object-cover flex-shrink-0 border rounded hover:opacity-80"
                onClick={() => setImage(item)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="Main product" className="w-full h-auto object-contain rounded" />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={assets.star_icon} className="w-3.5" />
            ))}
            <img src={assets.star_dull_icon} className="w-3.5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency} {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          <div className='flex flex-col gap-2 my-8'>
              <p>Select Size</p>
              <div className='flex gap-2'>
                {productData.sizes.map((item,index)=>(
                  <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''} `} key={index}>{item}</button>
                ))}
              </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>• 100% Original product.</p>
            <p>• Cash on delivery is available on this product</p>
            <p>• Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      {/* Description And Reviews */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.</p>
        </div>
      </div>

      {/* ---------- Show Related Products ----------- */}
        <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>


    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
