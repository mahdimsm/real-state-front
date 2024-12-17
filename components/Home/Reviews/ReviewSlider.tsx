'use client'

import { userReviewData } from '@/data/data';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewCard from './ReviewCard';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  





const ReviewSlider = () => {
    return (
        <Carousel arrows={true} autoPlay={true} autoPlaySpeed={5000} infinite responsive={responsive}>
            {userReviewData.map((user)=>{
              return <div key={user.id}>
                <ReviewCard user={user}></ReviewCard>
              </div>
            })}
        </Carousel>
      )
}

export default ReviewSlider
