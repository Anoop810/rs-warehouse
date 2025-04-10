import React, { useRef, useEffect, useState, lazy, Suspense } from 'react';
import { Container } from 'react-bootstrap';
import beans from '../assets/beans.webp';
import baggrains from '../assets/baggrains.webp';
import legumesarranged from '../assets/legumesarranged.webp';
import biscuits from '../assets/biscuits.webp';
import drinks from '../assets/drinks.webp';

const LazyGoodsCard = lazy(() => import('./GoodsCard')); // Lazy load component

const goods = [
  { id: 1, title: "Grains & Beans", image: beans, description: "Agricultural products" },
  { id: 2, title: "Bulk Grains", image: baggrains, description: "Bulk grain products" },
  { id: 3, title: "Legumes", image: legumesarranged, description: "All kind of grains" },
  { id: 4, title: "Perishable goods", image: biscuits, description: "Perishable goods storage" },
  { id: 5, title: "Packaged Beverages", image: drinks, description: "Water and beverages" }
];

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
            {isVisible && (
              <Suspense fallback={<div>Loading...</div>}>
                {[...goods, ...goods, ...goods].map((item, index) => (
                  <LazyGoodsCard key={index} item={item} />
                ))}
              </Suspense>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default React.memo(StorageGoodsSlider);
