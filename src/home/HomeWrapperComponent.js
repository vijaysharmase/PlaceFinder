import React from 'react';
import HomeComponent from './HomeComponent';
import Constants from '../helpers/Constants';

const HomeWrapperComponent = ({ triggeringItem, routeProps, routing, dispatch }) => {
    let item = triggeringItem;
    let content = <div></div>;

    if (isUserAuthorized && item.shouldRender && item.itemID === Constants.PageIDConstants.HOME) {
        let properties = {
            key: item.itemID,
            triggeringItem: item,
            routeProps: routeProps,
            dispatch: dispatch,
            routing: routing
        };
        content = <HomeComponent {...properties} />;
    }

    return (
        <div id='contentComponent' className={'content-container page-' + triggeringItem.className}>
            {content}
        </div>
    );
};


HomeWrapperComponent.propTypes = {
    triggeringItem: React.PropTypes.object.isRequired
}

export default HomeWrapperComponent;
