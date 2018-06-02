import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PageSelector from '../PageSelector/PageSelector';
import SpaceList from './SpaceList';

const SpaceListPageContainer = styled.div`
  background: #eaecef;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
`;

class SpaceListPage extends Component {
  state = {
    currentPage: 1,
    spaceList: [],
  };

  componentWillMount() {
    this.getPageData(1);
  }

  getPageData = async pageNum => {
    const response = await fetch(`https://thisopenspace.com/lhl-test?page=${pageNum}`);
    const responseObj = await response.json();
    this.setState({
      spaceList: responseObj.data,
      currentPage: pageNum,
    });
  };

  onSelectPage = async e => {
    const pageNum = Number(e.target.dataset.page);
    this.getPageData(pageNum);
  };

  render() {
    const { currentPage, spaceList, maxPages } = this.state;
    return (
      <SpaceListPageContainer>
        <PageSelector onSelectPage={this.onSelectPage} currentPage={currentPage} />
        <SpaceList currentPage={currentPage} spaceList={spaceList} />
        <PageSelector onSelectPage={this.onSelectPage} currentPage={currentPage} />
      </SpaceListPageContainer>
    );
  }
}

export default SpaceListPage;
