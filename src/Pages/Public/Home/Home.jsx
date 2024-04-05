import React from 'react';

import LogementService from "@/_Services/Logement.services";

const Home = () => {
    return (
        <div>
            <ul>
                {
                    LogementService.GetAllLogement().map((logement) => 
                        console.log(logement)
                    )
                }
            </ul>
        </div>
    );
};

export default Home;