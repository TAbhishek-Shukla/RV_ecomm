import React, { useState } from 'react';
import '../styles/myimage.css'
const MyImage = ({ imgs = [{ url: "" }] }) => {
    const [mainImage, setMainImage] = useState(imgs[0]);
  
    return (
      <section className='image-sect'>
        <div className="grid grid-four-col">
          {imgs.map((curElm, index) => {
            return (
                <img
                  src={curElm.url}
                  alt={curElm.filename}
                  className="box-image--style"
                  key={index}
                  onClick={() => setMainImage(curElm)}
                />
            );
          })}
        </div>
        {/* 2nd column  */}
  
        <div className="main-screen">
          <img src={mainImage.url} alt={mainImage.filename} />
        </div>
      </section>
    );
  };
  

export default MyImage;
