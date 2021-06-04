// ./src/components/views/movies/components/rating.jsx

// External package dependencies.
import React from 'react';
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

  const getStars = () => {
    const stars = rating.split('.');
    let tempStars = new Array(parseInt(stars[0])).fill('full');
    stars[1] && tempStars.push('half');
    return tempStars;
  }

  const starsList = getStars();

  return (
    <>
      { !starsList ? null
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
