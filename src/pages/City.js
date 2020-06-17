import React, {Component} from "react";
import axios  from 'axios';
import {API} from '../config/api';

class City extends Component{
    constructor() {
        super()
        this.state = {
            city:null,
        }
    }

    getCityData = city_id => {
        let url = `${API.zomato.baseUrl}/cities`;
        axios.get(url, {
            headers: {
                "user-key" : API.zomato.api_key
            },
            params: {
                city_ids: `${city_id}`
            }
        })
        .then(({data}) => {
            let city = data.location_suggestions[0];
            this.setState({ city })
        })
        .catch(err => console.log(err))
    };

    componentDidMount() {
        let {city_id} = this.props.match.params;
        console.log(this.props.match);
        this.getCityData(city_id);
    }
    render() {
        return(
        <div className="container-fluid" style={{ marginTop: 30, marginBottom: 30 }}>
            {this.state.city && (
                <div className="row">
                    <div className="col">
                        <h4 className="text-success">Restaurant ini { this.state.city.name }, {""} { this.state.city.country_name } </h4>
                    </div>
                </div>
            )}
        </div>
                
        );
    }
}

export default City;