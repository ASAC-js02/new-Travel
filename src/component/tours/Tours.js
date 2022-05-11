

import Tour from '../tours/tour/Tour';
import {Link } from 'react-router-dom';

function Tours(props) {
    return (
        <>
            {props.data.map((m, index) => {
          const { id, name, image } = m;
          return (
            <Link to={`/m/${id}`}>
              <Tour name={name} image={image} key={index} />
            </Link>
          )
        }
        )}
        </>
    );
}

export default Tours;