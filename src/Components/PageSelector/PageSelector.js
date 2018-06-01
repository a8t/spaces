import React from 'react';
import styled from 'styled-components';

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
      <PageSelectorButton onClick={props.onSelectPage} data-page={page} key={page}>
        {page}
      </PageSelectorButton>
    );
  });
  return <div>{buttons}</div>;
};

export default PageSelector;
