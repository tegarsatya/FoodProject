import React, { Component } from 'react'
import ImageAndWelcome from '../components/ImageAndWelcome';
import CityList from '../components/CityList';
import SearchCity from '../components/SearchCity';
import axios from 'axios';
import { API } from '../config/api';


class Home extends Component {
    constructor () {
        super()
        this.state = {
          keyword: "",
          featuredCities: null,
          citiesResultSearch: null,
          cityKeywordSearch:""
        };
      }
      
      changeKeywordHandler = (event) => {
        this.setState({ keyword: event.target.value });
      };

      searchHandler = () => {
        let keyword = this.state.keyword;
        var url = `${API.zomato.baseUrl}/cities`;
        axios.get(url, {
          headers: {
            'user-key': API.zomato.api_key
          },
          params: {
            q: keyword 
          }
        }).then(({data}) => {
          if(data.status === "success"){
            this.setState({ citiesResultSearch: data.location_suggestions, keyword:"", cityKeywordSearch: keyword })
          }
        }).catch(err => console.log(err));
      };

      getFeaturedCities = ()  => {
        var url = `${API.zomato.baseUrl}/cities`;
        axios.get(url, {
          headers: {
            "user-key": API.zomato.api_key
          },
          params: {
            city_ids: "74,11052,170"
          }
        }).then(({data})=> {
          if(data.status === "success") {
            this.setState( { featuredCities: data.location_suggestions })
          }
        }).catch(err => console.log(err));
      };

      componentDidMount(){
        this.getFeaturedCities();
      }

      
    render() {
        const citiesDummy = [
            {id: 72, name:"jakarta", country_name:"indonesia"},
            {id: 11052, name:"bandung", country_name:"indonesia"},
            {id: 170, name:"bali", country_name:"indonesia"}
          ]
      return (
        <>
          <ImageAndWelcome />
          <div className="container" style={{ marginTop: 30, marginBottom: 30 }}>
            <CityList cities={this.state.featuredCities} title={'Featured Cities'}  />    
    
            <SearchCity
              value={this.state.keyword}
              onChange={this.changeKeywordHandler}
              onClickSearch={this.searchHandler}
            />

            {this.state.cityKeywordSearch !== '' && (
              <CityList title={'Search Result'} cities={this.state.citiesResultSearch}
              showSubtitle={true} subtitle={this.state.cityKeywordSearch} />
            )}
    
          </div>
        </>
      )
    }
  }

export default Home