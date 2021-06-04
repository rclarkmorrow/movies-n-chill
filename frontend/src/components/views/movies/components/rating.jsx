// ./src/components/views/movies/components/rating.jsx

// External package dependencies.
import React, { useEffect, useState } from 'react';
import { Star, StarHalf } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

// Local imports.

const useStyles = makeStyles({
    root: {
      color: '#FFFFFF',
    },
  });

const Rating = (props) => {
  const classes = useStyles();
  const { rating } = props;
  const [ isLoading, setIsLoading ] = useState(true);
  const [ starsList, setStarsList ] = useState([]);

  useEffect(() => {
    console.log(`rating: ${rating}`)
    const stars = rating.split('.');
    let tempStars = new Array(parseInt(stars[0])).fill('full');
    console.log(`temp: ${tempStars}`)
    stars[1] && tempStars.push('half');
    console.log(`rating after: ${rating} length: ${tempStars.length}`)
    setStarsList(...starsList, tempStars);
    console.log(starsList)
    setIsLoading(false);
  }, []);

  return (
    <>
      { isLoading ? null
      : <>
          {starsList.map((star, index) => (
            star==='full' ?
              <Star key={index} fontSize="small" className={classes.root}/>
            : star==='half' ?
                <StarHalf key={index} fontSize="small" className={classes.root} />
            : null
          ))}
        </>
      }
    </>
  );
};

export default Rating;
