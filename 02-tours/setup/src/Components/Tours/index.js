import React, {useContext} from 'react';

import { TourContext } from '../../App';
import Tour from './Tour';

const Tours = () => {
  const toursKit = useContext(TourContext);
  const tours = toursKit.tours;
    return (
    <section>
      <div className="title">
        <h2>{tours.length > 0 ? "Our tours" : "No tours available"}</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map(tour => <Tour key={tour.id} {...tour} />)}
      </div>
    </section>
  );
};

export default Tours;
