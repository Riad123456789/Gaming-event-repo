

const SingleDetailsCard = ({ Detail }) => {

    const {service_name,image_url,more_description} = Detail



    return (
        <div className="bg-black  border">
            <div className="  shadow-xl p-10 bg-black max-w-6xl mx-auto grid md:grid-cols-2 ">
                <figure><img className="h-52 w-96" src={image_url} alt="Movie" /></figure>


                <div className="card-body ">
                    <h2 className="card-title text-red-500">{service_name}</h2>
                    <p className="text-orange-400">{more_description}</p>
                  
                </div>
            </div>

        </div>
    );
};

export default SingleDetailsCard;