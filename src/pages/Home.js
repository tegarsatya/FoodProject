import React, { Component } from 'react'
import ImageAndWelcome from '../components/ImageAndWelcome';
import CityList from '../components/CityList';
import SearchCity from '../components/SearchCity';


class Home extends Component {
    constructor () {
        super()
        this.state = {
          keyword: ''
        };
      }
      changeKeywordHandler = (event) => {
        this.setState({ keyword: event.target.value });
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
            <CityList title={'Featured Cities'} cities={citiesDummy} />
    
            <SearchCity
              value={this.state.keyword}
              onChange={this.changeKeywordHandler}
            />
    
            <CityList title={'Search Result'} cities={citiesDummy} />
    
          </div>
        </>
      )
    }
  }

export default Home