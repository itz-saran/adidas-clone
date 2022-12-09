import React, { useRef } from "react";

import "./ProductImage.scss";

const ProductImage = ({ image }) => {
  const srcset = `${image.w320}, ${image.w420}, ${image.w600}, ${image.w640}, ${image.w840}`;
  const imgRef = useRef();
  const contentRef = useRef();
  const viewRef = useRef();

  let clickedPos = {};

  const getDistanceFromCenter = () => {
    const { left, width, top, height } =
      viewRef.current.getBoundingClientRect();
    const cX = left + width / 2;
    const cY = top + height / 2;
    const dX = cX - (clickedPos.x + left);
    const dY = cY - (clickedPos.y + top);
    return { dX: dX * 1.5, dY: dY * 1.5 };
  };

  const zoom = (e) => {
    contentRef.current.classList.toggle("on-zoom");
    const isZoomed = contentRef.current.classList.contains("on-zoom");
    if (isZoomed) {
      imgRef.current.srcset = image.w2000;
      clickedPos = getCursor(e);
      const { dX, dY } = getDistanceFromCenter();
      console.log({ dX: dX * 1.5, dY: dY * 1.5 });
      contentRef.current.style.cssText = `scale:2.5;translate:${dX}px ${dY}px`;
      window.addEventListener("mousemove", moveImage);
    } else {
      zoomOut();
    }
  };

  const zoomOut = () => {
    contentRef.current.classList.remove("on-zoom");
    const isZoomed = contentRef.current.classList.contains("on-zoom");
    if (!isZoomed) {
      contentRef.current.style.cssText = `scale:1; transform:translate(0px, 0px)`;
      imgRef.current.srcset = srcset;
      window.removeEventListener("mousemove", moveImage);
    }
  };

  const moveImage = (e) => {
    const { x, y } = getCursor(e);
    const { dX, dY } = getDistanceFromCenter();
    contentRef.current.style.cssText = `scale:2.5; translate:${
      dX + clickedPos.x - x
    }px ${dY + clickedPos.y - y}px`;
  };

  const getCursor = (e) => {
    let bounds = viewRef.current.getBoundingClientRect();
    let x = e.pageX - bounds.left;
    let y = e.pageY - bounds.top;
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  };

  return (
    <div className="product-image" onClick={zoom}>
      <div className="view-container" onMouseLeave={zoomOut}>
        <div className="desktop-zoom" ref={viewRef}>
          <div className="zoom-content" ref={contentRef}>
            <img
              src={image.src}
              sizes="(max-width: 320px) 320px, (max-width: 420px) 420px, (max-width: 600px) 600px, (max-width: 640px) 640px, (max-width: 840px) 840px"
              srcSet={srcset}
              alt=""
              ref={imgRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
