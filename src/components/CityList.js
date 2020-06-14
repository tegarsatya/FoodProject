import React from 'react'
import CityCard from './CityCard'


const CityList = (props) => (
<div className="container" style={{ marginTop:30, marginBottom:30 }}>
    <div className="row">
      <div className="col-12">
        <h3>{props.title}</h3>
      </div>
    </div>
    <div className="row">
    {props.cities.map(city =>
         <CityCard key={city.id} city={city} />
     )}
    </div>
  </div>
)

export default CityList