import React from 'react';
import {Link} from 'react-router-dom';

const CityCard = (props) => (
    <div className="col-4">
        <div className="card bg-light mb-3">
            <div className="card-body">
                <h4 className="card-title">{props.city.name}</h4>
                <p>{props.city.country_name}</p>
                <Link to={`/city/${props.city.id}`} className="card-text">See restaurants in {props.city.name}</Link>
            </div>
        </div>
    </div>
)

export default CityCard