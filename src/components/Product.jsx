
import PropTypes from "prop-types";

const Product = ({name, imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640", price}) => {
 
  return (
      <div>
      <h2>{name}</h2>
    <img src={imgUrl} alt={name} width="640" />
          <p>Price: {price} credits</p>
      </div>
  )
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
};

export default Product;