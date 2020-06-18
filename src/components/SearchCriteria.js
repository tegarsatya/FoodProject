import React from 'react';

const SearchCriteria = props => 
(
    <div className="card bg-light mb-3" style={{marginTop: 20  }}>
        <div className="card-body">
            <p className="card-title">Find Restaurants based on Criteria:</p>
            <table className="table table-hover">
                <tbody> 
                    {props.criteria.map((cri, index) => (
                        <tr key={index} className="table-active">
                            <td width="40%">{cri.criteriaName}</td>
                            <td width="50%">{cri.data.name}</td>
                            <td width="10%">
                                {cri.criteriaName !== "City" && (
                                    <i className="fa fa-times" aria-hidden="true" style={{ color: "red" }} onClick={() => props.removeCriteriaHandler(index)}></i>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pull-right">
                <button className="btn btn-primary" type="button" onClick={props.onClickSearch}>Search</button>
            </div>
        </div>
    </div>
)
export default SearchCriteria





