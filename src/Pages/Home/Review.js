import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl grid-gap-5">
            <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>

                <div className=" flex itams-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt="" />
                        </div>
                    </div>
                    <div>
                    <h4 className='text-xl'>{review.name}</h4>
                    <p>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;