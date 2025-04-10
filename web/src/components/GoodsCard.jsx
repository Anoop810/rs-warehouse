import React from "react";

const GoodsCard = React.memo(({ item }) => (
  <div className="slider-item">
    <div className="goods-card h-100">
      <div className="position-relative overflow-hidden rounded shadow-sm h-100">
        <img
          loading="lazy"
          src={item.image}
          alt={item.title}
          className="img-fluid w-100"
          style={{
            height: window.innerWidth <= 576 ? "180px" : "250px",
            objectFit: "cover",
            maxWidth: "100%",
          }}
        />
        <div className="position-absolute bottom-0 start-0 end-0 p-2 p-sm-3 bg-dark bg-opacity-75 text-white">
          <h5 className="mb-1 fs-6">{item.title}</h5>
          <p className="mb-0 small d-none d-sm-block">{item.description}</p>
        </div>
      </div>
    </div>
  </div>
));

export default GoodsCard;
