import { useState, useEffect } from 'react';

const Product = (props) => {
  // let rate = 0; //  state del componente!!! 
  const [rate, setRate] = useState(0);  // HOOK!!!
  const [logued, setLogued] = useState(false);

  const rateVideo = () => {
    // rate++  => mas prohibido que PornHub!!!
    setRate(rate + 1)
  }

    // componentDidUpdate
    useEffect(() => {
      console.log('ups!! El componente se ha actaulizado')
    }, [rate])

  return (
    <div className="video-container">
        <div className="video-image">
        <img src={props.thumbnail} alt="Same alt value" />
        </div>
        <div className="video-info">
        <button onClick={props.deleteVideo}>Delete this product</button>
        <h3>{props.title}</h3>
        <span>This product has {rate} stars</span> | <button onClick={rateVideo}>Rate this video</button>
        <p>Price: ARG {props.price}</p>
        <h4>Stock: {props.available_quantity}</h4>
        </div>
    </div>   
  )
}

export default Product;