import React from 'react'
import RatingLabel from './RatingLabel'

const RestaurantProfile = (props) => (
  <div className="card">
    <div className="card-header">
      <div className="row">
        <div className="col">

          {
            props.restaurant ? (
              <>
                <h4 className="text-success" style={{ fontWeight: 800 }}>{props.restaurant.name}</h4>
                <h6 style={{ fontWeight: 600 }}>{props.restaurant.location.locality}</h6>
                <h6 className="text-muted">{props.restaurant.location.address}</h6>
              </>
            ) : (
                <p>Loading...</p>
              )
          }

        </div>
      </div>
    </div>
    <div className="card-body">
      {
        props.restaurant ? (
          <div className="row">
            <div className="col-6">
              <img class="img-responsive" src={props.restaurant.featured_image} alt="" style={{ borderRadius: 5, width: 500 }} ></img>
            </div>
            <div className="col-6">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Rating</td>
                    <td>
                      <RatingLabel
                        labelColor={props.restaurant.user_rating.rating_color}
                        text={`${props.restaurant.user_rating.aggregate_rating} (${props.restaurant.user_rating.rating_text})`}
                      />
                      <h6>{props.restaurant.user_rating.votes} Votes</h6>
                    </td>
                  </tr>
                  <tr>
                    <td>Cuisines</td>
                    <td>
                      {props.restaurant.cuisines}
                    </td>
                  </tr>
                  <tr>
                    <td>Cost for two</td>
                    <td>
                      {props.restaurant.currency + ' ' + props.restaurant.average_cost_for_two}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
            <p>Loading...</p>
          )
      }


    </div>
  </div>
)

export default RestaurantProfile