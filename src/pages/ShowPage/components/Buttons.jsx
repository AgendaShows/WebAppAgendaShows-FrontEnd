import React, {useState} from 'react';

function Buttons(props) {

  const { links } = props

  const [likesCount, setLikes] = useState();

  const addLikes = () => setLikes( likesCount + 1 )

  return (
    <div className="contenedorBotones">
      <button className="btn btn-outline-success btn-block">{links}</button>
      <button className="btn btn-outline-danger btn-block" onClick={addLikes} >Likes: {likesCount.likes} </button>
      <button className="btn btn-outline-primary btn-block" onClick={addLikes} >Wishlist: {likesCount.likes} </button>
    </div>
  );
}

export default Buttons;
