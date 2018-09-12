import React from 'react';
import SearchContainer from '../search/SearchContainer';
import PlacesContainer from '../places/PlacesContainer';
import Constants from '../helpers/Constants';

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        document.title = Constants.PageTitleConstants.HOME;
    }

    //#region React life cycle methods

    //#endregion

    render() {
        return (
            <div>
                <div className="section no-pad-bot" id="index-banner">
                    <div className="container">
                        <br />
                        <br />
                        <h1 className="header center orange-text">Place Finder App</h1>
                        <div className="row center">
                            <h5 className="header col s12 light">Place Finder is the best app for the users, it makes very easy to find HOTELS, ATMS, MEDICALS, RESTAURANTS and more.</h5>
                            <h5 className="header col s12 light">It allows you to save, search and share your favorite places.</h5>
                        </div>
                        <div className="row center">
                            <SearchContainer />
                        </div>
                        <div className="row center">
                            <PlacesContainer />
                        </div>
                        <br />
                        <br />
                    </div>
                </div>
                <div className="container">
                    <div className="section">
                        <div className="row">
                            <div className="col s12 m4">
                                <div className="icon-block">
                                    <h2 className="center light-blue-text"><i className="material-icons">account_balance</i></h2>
                                    <h5 className="center">Find Banks</h5>
                                    <p className="light">Find near by banks. Place Finder is the best app for the users, it makes very easy to find ATMS, MEDICALS, RESTAURANTS and more</p>
                                </div>
                            </div>
                            <div className="col s12 m4">
                                <div className="icon-block">
                                    <h2 className="center light-blue-text"><i className="material-icons"><i className="material-icons">local_gas_station</i></i></h2>
                                    <h5 className="center">Find Gas Station</h5>
                                    <p className="light">Find near by filling stations. Place Finder is the best app for the users, it makes very easy to find ATMS, MEDICALS, RESTAURANTS and more</p>
                                </div>
                            </div>
                            <div className="col s12 m4">
                                <div className="icon-block">
                                    <h2 className="center light-blue-text"><i className="material-icons">hotel</i></h2>
                                    <h5 className="center">Find Hotels</h5>
                                    <p className="light">Find near by hotels. Place Finder is the best app for the users, it makes very easy to find ATMS, MEDICALS, RESTAURANTS and more</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                </div>
            </div>
        )
    }
}

export default HomeComponent;