import React, {useState} from 'react';

function Buttons(props) {

  const { links } = props

  // const [likesCount, setLikes] = useState();

  // const addLikes = () => setLikes( likesCount + 1 )

  return (
    <div className="contenedorBotones">
      <button className="btn btn-outline-success btn-block">{links}</button>
      <button className="btn btn-outline-danger btn-block" >Likes: </button>
      <button className="btn btn-outline-primary btn-block" >Wishlist: </button>
    </div>
  );
}

export default Buttons;
