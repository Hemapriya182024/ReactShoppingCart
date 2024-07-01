import React from 'react'
import Card from './Card'

const productDetails = [
  { img: 'https://rukminim2.flixcart.com/image/850/1000/l1mh7rk0/dress/t/2/7/xl-f-159-167-knock-knock-studio-original-imagbjf3skhtjafx.jpeg?q=20&crop=false', title: "Red Dress", price: "$80" },
  { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbJG9dxYXSDCJIPrE_KdJEu6-u8a0zFSwk1w&s', title: "Blue Top", price: "$40" },
  { img: 'https://assets.ajio.com/medias/sys_master/root/20230629/XMIr/649d04eda9b42d15c9227da1/-473Wx593H-466125958-black-MODEL.jpg', title: "Black Skirt", price: "$60" },
  { img: 'https://leatherskinshop.com/cdn/shop/articles/Quilted-Green-Leather-Jacket-Outfit-Women_f6186f18-6eef-4005-9832-fefb49a07721.jpg?v=1680522646', title: "Green Jacket", price: "$120" },
  { img: 'https://rukminim2.flixcart.com/image/550/650/kq5iykw0/blouse/w/o/d/32-lfh-rn-lyneth-original-imag485qkfna9wyc.jpeg?q=90&crop=false', title: "White Blouse", price: "$50" },
  { img: 'https://brownliving.in/cdn/shop/products/radiant-yellow-silk-square-scarf-217-15509-ess-ry-0322-womens-scarf-brown-living-876398_600x600_crop_center.jpg?v=1682966745', title: "Yellow Scarf", price: "$25" },
]

// ProductsContainer Component
const Container = ({ setProductCount }) => {
  return (
    <div className="row product-container g-0 d-flex justify-content-center">
      {
        productDetails.map((product, index) => (
          <Card key={index} setProductCount={setProductCount} img={product.img} title={product.title} price={product.price} />
        ))
      }
    </div>
  )
}

export default Container
