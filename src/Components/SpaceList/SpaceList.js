import React from 'react';
import styled from 'styled-components';
import SpaceListItem from './SpaceListItem';

const SpaceListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const SpaceList = props => {
  return (
    <SpaceListContainer>{props.spaceList.map(each => SpaceListItem(each))}</SpaceListContainer>
  );
};

export default SpaceList;
