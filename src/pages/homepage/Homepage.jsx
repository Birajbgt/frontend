import React, { useEffect } from 'react';
import { testApi } from '../../components/Api';

const Homepage = () => {
    
    // get user from local storage
    const user = JSON.parse(localStorage.getItem('user'))

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