import React, {useContext} from 'react';

import { TourContext } from '../../App';
import Tour from './Tour';

const Tours = () => {
  const tours = useContext(TourContext);
    return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map(tour => <Tour key={tour.id} {...tour} />)}
      </div>
    </section>
  );
};

export default Tours;
