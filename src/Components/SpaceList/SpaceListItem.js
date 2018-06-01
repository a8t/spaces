import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  font-family: 'Inconsolata', Calibri, Roboto, sans-serif;
  margin: 10px;
  text-align: left;
  position: relative;
  background: white;
  max-width: 400px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
`;

const BackgroundImg = styled.img`
  width: 100%;
`;

const INFO_HEIGHT = '100px';

const PriceCard = styled.div`
  position: absolute;
  left: 30px;
  bottom: ${INFO_HEIGHT};
  background: white;
  padding: 10px;
  border-radius: 3px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
`;

const PriceNumber = styled.span`
  font-size: 1.5em;
`;

const Info = styled.div`
  height: ${INFO_HEIGHT};
  padding: 10px 20px;
`;

const SecondaryInfo = styled.div`
  color: #444;
`;

const SpaceListItem = props => {
  return (
    <Card key={props.id}>
      <BackgroundImg
        className="background"
        src={props.primary_photo_css_url_small}
        alt={props.name}
      />
      <PriceCard>
        <PriceNumber>${props.daily_price}</PriceNumber> / day
      </PriceCard>
      <Info>
        <h4 className="info__name">{props.name}</h4>
        <SecondaryInfo>
          <span className="info__address">{props.address.split(',')[0]}</span>
          <span> • </span>
          <span className="info__sqft">{props.square_footage} SqFt</span>
        </SecondaryInfo>
      </Info>
    </Card>
  );
};

export default SpaceListItem;
