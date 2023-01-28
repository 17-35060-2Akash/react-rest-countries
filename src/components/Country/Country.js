import React from 'react';
import './Country.css';

const Country = (props) => {
    // console.log(props.country);
    const { area, region, population, name, flags } = props.country;
    // console.log(area, region, population);
    return (
        <div className='country bg-info'>
            {/* <h3>Country Name: {props.name}</h3>
            <img src={props.flag} alt="" />
            <h4>Population: {props.population}</h4>
            <p><small>Area: {props.area}</small></p>
            <p>Region: {props.country.region}</p> */}

            <h3>Country Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <h4>Population: {population}</h4>
            <p><small>Area: {area}</small></p>
            <p>Region: {region}</p>

        </div>
    );
};

export default Country;