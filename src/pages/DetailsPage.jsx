/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from '../component/Navbar';
import Foother from '../component/Foother';
import { useLoaderData, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SingleDetailsCard from '../card/SingleDetailsCard';

const DetailsPage = () => {
    const [details, setDeatails] = useState({});
    const { id } = useParams();
    const Details = useLoaderData();


    useEffect(() => {
        const detailsCard = Details?.find(SingleDetails => SingleDetails.id == id)
        setDeatails(detailsCard);

    }, [])

    console.log(details)
    return (

        <div>
            <Navbar></Navbar>


            <div>
                <SingleDetailsCard Detail={details} key={details.id}></SingleDetailsCard>
            </div>

            <Foother></Foother>
        </div>
    );
};

export default DetailsPage;