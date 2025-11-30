import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ListProduct from '../ListProduct'

import {handlePercentDiscount} from '../../../untils/index'
import { useDispatch} from 'react-redux';
import { BASE_URL } from '../../../constants/UserConstant';

function Meat(props) {
    const dispatch = useDispatch()
    const [name, setName] = useState('thịt sạch');
    const [hotSamsung, setHotSamsung] = useState([])

    useEffect(() => {
        async function FetchApi(){
            try {
                const {data} = await axios.get(`${BASE_URL}/products/${name}`)
                setHotSamsung(data)
            } catch (error) {
            }
        }
        FetchApi()
    }, [])

    return (
        <section id="hotsale">
            <div className="hotsale">
                <h2>{name}</h2>
                {
                    hotSamsung ? (<ListProduct HotSaleProducts={handlePercentDiscount(hotSamsung)}></ListProduct>) : ''
                }
            </div>
        </section>

    );
}


export default Meat;