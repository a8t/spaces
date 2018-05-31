import React from 'react';

const SpaceListItem = props => {
  return (
    <div key={props.id}>
      <img className="background" url={props.primary_photo_css_url_small} />
      <div className="price">${props.daily_price}/day</div>
      <div className="info">
        <div className="info__name">{props.name}</div>
        <div className="info__secondary">
          <div className="info__address">{props.address}</div>
          <div className="info__sqft">{props.square_footage} SqFt</div>
        </div>
      </div>
    </div>
  );
};

export default SpaceListItem;
