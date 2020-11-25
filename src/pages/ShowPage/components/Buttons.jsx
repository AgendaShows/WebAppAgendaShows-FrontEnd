import React, { useState } from 'react';

function Buttons(props) {

  const { links, value } = props

  const [likesCount, setLikes] = useState( value );
  const [wishlistCount, setWishlist] = useState( value );

  const addLikes = () => setLikes( likesCount + 1 )
  const addToWishlist = () => setWishlist( wishlistCount + 1 )

  return (
    <div className="contenedorBotones">
      <button className="btn btn-outline-success btn-block link-button"><a href={links}> Entradas </a></button>
      <button className="btn btn-outline-danger btn-block" onClick={ addLikes }>Likes: { likesCount } </button>
      <button className="btn btn-outline-warning btn-block" onClick={ addToWishlist }>Wishlist: { wishlistCount } </button>
    </div>
  );
}

export default Buttons;