import React, { Component } from 'react'
import ImageAndWelcome from '../components/ImageAndWelcome';
import CityList from '../components/CityList';
import SearchCity from '../components/SearchCity';
import axios from 'axios';


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
        var url = "https://developers.zomato.com/api/v2.1/cities";
        axios.get(url, {
          headers: {
            'user-key': 'a4c52223f6cb58d5449401e22542dff0'
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
        var url = "https://developers.zomato.com/api/v2.1/cities"
        axios.get(url, {
          headers: {
            "user-key": 'a4c52223f6cb58d5449401e22542dff0'
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
    
            <CityList title={'Search Result'} cities={this.state.citiesResultSearch}
            showSubtitle={true} subtitle={this.state.cityKeywordSearch} />
          </div>
        </>
      )
    }
  }

export default Home