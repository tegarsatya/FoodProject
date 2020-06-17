import React from 'react';

const Searchkeyword = props => (
    <>
        <h5>Keyword</h5>
            <div className="card">
                <div className="card-body">
                    <div className="form-row">
                        <div className="col-10">
                            <input className="form-control" type="text" placeholder="Type Keyword: 1.e Restaurant's nae, location"
                                value={props.keyword}
                                onChange={props.changeKeywordHandler}/>
                        </div>

                        <div className="col">
                            <button onClick={props.onClickAddToCriteria} className="btn btn-primary" type="button">
                                Add To Criteria
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    </>
)

export default Searchkeyword;