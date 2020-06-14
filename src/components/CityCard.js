import React from 'react'

const CityCard = (props) => (
    <div className="col-4">
        <div className="card bg-light mb-3">
            <div className="card-body">
                <h4 className="card-title">{props.city.name}</h4>
                <p>{props.city.country_name}</p>
                <a href="/#" className="card-text">See restaurants in {props.city.name}</a>
            </div>
        </div>
    </div>
)

export default CityCard