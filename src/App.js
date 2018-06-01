import React, { Component } from 'react';
import styled from 'styled-components';
import PageSelector from './Components/PageSelector/PageSelector';
import SpaceList from './Components/SpaceList/SpaceList';

const AppContainer = styled.div`
  background: #eaecef;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
`;
class App extends Component {
  state = {
    currentPage: 0,
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
    });
  };

  onSelectPage = async e => {
    const page = Number(e.target.dataset.page);
    const response = await fetch(`https://thisopenspace.com/lhl-test?page=${page}`);
    const responseObj = await response.json();
    this.setState({
      spaceList: responseObj.data,
      currentPage: page,
    });
  };

  render() {
    const { currentPage, spaceList, maxPages } = this.state;
    return (
      <AppContainer>
        <PageSelector onSelectPage={this.onSelectPage} currentPage={currentPage} />
        <SpaceList currentPage={currentPage} spaceList={spaceList} />
        <PageSelector onSelectPage={this.onSelectPage} currentPage={currentPage} />
      </AppContainer>
    );
  }
}

export default App;
