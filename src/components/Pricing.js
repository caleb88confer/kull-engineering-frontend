import { useState } from 'react';

import '../Css/Pricing.css';


function Pricing (props) {

    const [priceData, setPriceData] = useState(4)
 

const pricingData = [
    {
        'serive': 'recording',
        'price': '',
    },
    {
        'service': 'mixing',
        'price': '',
    },
    {
        'service': 'mastering',
        'price': '',
    },
    {
        'service': 'production',
        'price': '',
    },
    {
        'service': 'Test',
        'price': 'lorem ipsom'
    }
]

    return(
        <div className="pricing-tab">
            <div className="selection-tab">
            <h1>pricing</h1>
            <select name="services" id="services">
                <option value="0">Recording</option>
                <option value="1">Mixing</option>
                <option value="2">Mastering</option>
                <option value="3">Production</option>
            </select>
            </div>

            <div className="pricing-info">
                <h1>{pricingData[4].service}</h1>
                <p>{pricingData[4].price}</p>
            </div>
        </div>
    );
}

export default Pricing;