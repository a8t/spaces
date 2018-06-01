import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageSelectorButton = styled.button`
  font-size: 2em;
  margin: 5px;
  background: #44c7f3 !important;
  cursor: pointer;
  width: 40px;
  color: white;
`;

const MAX_PAGES = 4;

const PageSelector = props => {
  const buttons = [...Array(MAX_PAGES)].map((each, index) => {
    const page = index + 1;
    return (
      <Link to={`/spaces/${page}`} key={page}>
        <PageSelectorButton onClick={props.onSelectPage} data-page={page}>
          {page}
        </PageSelectorButton>
      </Link>
    );
  });
  return <div>{buttons}</div>;
};

export default PageSelector;
