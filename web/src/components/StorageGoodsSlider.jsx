import React, { useRef, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import beans from '../assets/beans.webp';
import baggrains from '../assets/baggrains.webp';
import legumesarranged from '../assets/legumesarranged.webp';
import biscuits from '../assets/biscuits.webp';
import drinks from '../assets/drinks.webp';

const goods = [
  { id: 1, title: "Grains & Beans", image: beans, description: "Agricultural products" },
  { id: 2, title: "Bulk Grains", image: baggrains, description: "Bulk grain products" },
  { id: 3, title: "Legumes", image: legumesarranged, description: "All kind of grains" },
  { id: 4, title: "Perishable goods", image: biscuits, description: "Perishable goods storage" },
  { id: 5, title: "Packaged Beverages", image: drinks, description: "water and beverages" }
];

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
            height: window.innerWidth <= 576 ? '180px' : '250px',
            objectFit: 'cover',
            maxWidth: '100%'
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

const StorageGoodsSlider = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Common Goods We Store</h2>
          <div className="divider bg-primary mx-auto mb-4" style={{ height: '4px', width: '70px' }}></div>
          <p className="lead text-muted">
            Secure and specialized storage solutions for various types of goods
          </p>
        </div>

        <div className="slider-container">
          <div className="slider-track" ref={sliderRef}>
            {[...goods, ...goods, ...goods].map((item, index) => (
              <GoodsCard key={index} item={item} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default React.memo(StorageGoodsSlider);
