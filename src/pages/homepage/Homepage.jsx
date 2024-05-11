import React, { useEffect } from 'react';
import { testApi } from '../../components/Api';

const Homepage = () => {

    // Print hello ! whrn page is automaticaly load
    useEffect(() => {
        console.log("Hello!!!")

        //trigger TestApi
        testApi().then((res) => {
            console.log(res)
        })

    })


    return (
        <div>
            Home Page
        </div>

    )
}
export default Homepage;