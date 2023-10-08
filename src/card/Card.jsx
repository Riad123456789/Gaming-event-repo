import React from 'react';

const Card = ({ survic }) => {

    const { image_url, service_name,description,price } = survic

    return (
        <div>
            <div className=" w-72 h-96 mx-auto bg-slate-800 shadow-xl hover:bg-teal-300">
                <figure><img className='h-50' src={image_url} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white font-bold">{service_name}</h2>
                    <p className='text-red-800'>{description}</p>
                    <div className="card-actions items-center justify-end">
                        <p className='text-orange-600'>price: {price}</p>
                        <button className="btn btn-outline btn-sm  hover: text-amber-500 ">more details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;