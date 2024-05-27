import React, { useEffect, useState } from 'react'
import axios from "axios"
import { BASE_URL } from '../constants/baseUrl';

const Countr = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`${BASE_URL}`).then(function (response) {
            setData(response.data)
        });
    }, [])



    return (
        <div>
            <div className='grid grid-cols-4 gap-4 mt-[20px]'>
                {data.map((country) => (
                    <div className='shadow-2xl  rounded-[5px] w-[335px] h-[400px] ' key={country.cca3}>
                        <div className='w-[95%] h-[95%] mx-auto mt-[2px]'>
                            <img src={country.flags.png} alt={country.flags.alt} className='w-[100%] h-[180px]' />
                            <div className='mt-[15px]'>
                                <h3 className='text-[#828282] font-semibold text-[18px]'>{country.name.common}</h3>
                                <p className='text-[#828282] font-medium'>Population:{country.population}</p>
                                <p className='text-[#828282] font-medium'>Region:{country.region}</p>
                                <p className='text-[#828282] font-medium'>Capital:{country.capital ? country.capital[0] : "N/A"}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Countr
