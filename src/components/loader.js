import React from 'react'
import Loading from "./1488.gif";

const loader = () => {
    return (
      <div className='d-flex justify-content-center align-item-center'>
        <img src={Loading} alt="Loading" />
      </div>
    )
  }

export default loader
