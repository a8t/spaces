import React, { Component } from 'react';
import styled from 'styled-components';
import SpaceListItem from './SpaceListItem';

const ResultList = styled.div`
  width: 100%;
  background: #eaecef;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

class SpaceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultList: [
        {
          id: 2,
          name: 'Large Mezzanine Room And Reception Area',
          address: '425 Carrall Street, Vancouver, BC, Canada',
          hourly_price: 55,
          daily_price: 440,
          square_footage: 500,
          capacity: 35,
          views_count: 1382,
          primary_photo_css_url_small:
            'https://cdn-prod.thisopenspace.com/photos/files/000/000/008/small/IMG_2354.jpg?1504465945',
        },
        {
          id: 3,
          name: 'Heritage Loft Photography Studio',
          address: '55 East Cordova Street, Vancouver, BC, Canada',
          hourly_price: 75,
          daily_price: 600,
          square_footage: 1260,
          capacity: 12,
          views_count: 3769,
          primary_photo_css_url_small:
            'https://cdn-prod.thisopenspace.com/photos/files/000/046/676/small/IMG_5849.jpg?1524196850',
        },
        {
          id: 9,
          name: 'Rustic Gallery And Pop Up',
          address: '2186 Dundas St W, Toronto, Ontario M6R 1X3, Canada',
          hourly_price: 50,
          daily_price: 400,
          square_footage: 400,
          capacity: 40,
          views_count: 3600,
          primary_photo_css_url_small:
            'https://cdn-prod.thisopenspace.com/photos/files/000/034/570/small/2.jpg?1508779302',
        },
        {
          id: 11,
          name: 'Pop Up Store And Gallery',
          address: '1247 Dundas Street West, Toronto, ON M6J 1X6, Canada',
          hourly_price: 175,
          daily_price: 600,
          square_footage: 850,
          capacity: 40,
          views_count: 2778,
          primary_photo_css_url_small:
            'https://cdn-prod.thisopenspace.com/photos/files/000/000/098/small/562874_461325353986158_1489550701_n.jpg?1504466060',
        },
        {
          id: 13,
          name: 'Victorian Event Space With Full Kitchen ',
          address: '1400 Queen Street East, Toronto, ON M4L1C9, Canada',
          hourly_price: 70,
          daily_price: 395,
          square_footage: 700,
          capacity: 45,
          views_count: 2182,
          primary_photo_css_url_small:
            'https://cdn-prod.thisopenspace.com/photos/files/000/048/905/small/South_side_of_VandenBerg_House.jpg?1527010765',
        },
        {
          id: 14,
          name: 'Large Multi Use Studio & Cultural Hub',
          address: '360 Geary Ave, Toronto, ON, Canada',
          hourly_price: 70,
          daily_price: 1095,
          square_footage: 3500,
          capacity: 250,
          views_count: 3802,
          primary_photo_css_url_small:
            'https://cdn-prod.thisopenspace.com/photos/files/000/021/670/small/360Geary31.jpg?1504494641',
        },
        {
          id: 23,
          name: 'Gorgeous Industrial Venue With Skylights',
          address: '26 Bridge St, Brooklyn, New York, NY, United States',
          hourly_price: null,
          daily_price: 8000,
          square_footage: 8000,
          capacity: 375,
          views_count: 1553,
          primary_photo_css_url_small:
            'https://cdn-prod.thisopenspace.com/photos/files/000/000/182/small/26B.EMRG.jpg?1504466150',
        },
        {
          id: 24,
          name: 'Loft Room Yoga Studio ',
          address: "43 Jeffrey's Neck Road, Ipswich, MA 01938, United States",
          hourly_price: 20,
          daily_price: 150,
          square_footage: 800,
          capacity: 18,
          views_count: 233,
          primary_photo_css_url_small:
            'https://cdn-prod.thisopenspace.com/photos/files/000/000/178/small/YogaRoom1.jpg?1504466145',
        },
        {
          id: 25,
          name: 'White Painted Brick Warehouse Venue',
          address: '11 Sanborn Ct, Somerville, MA 02143, USA',
          hourly_price: 200,
          daily_price: 1500,
          square_footage: 2000,
          capacity: 150,
          views_count: 911,
          primary_photo_css_url_small:
            'https://cdn-prod.thisopenspace.com/photos/files/000/018/594/small/bostonbohobridephotography36.jpg?1504489399',
        },
        {
          id: 26,
          name: 'Modern West Coast Pop Up Retail Store',
          address: '1014 Meares Street, Victoria, BC, Canada',
          hourly_price: null,
          daily_price: 300,
          square_footage: 450,
          capacity: 50,
          views_count: 372,
          primary_photo_css_url_small:
            'https://cdn-prod.thisopenspace.com/photos/files/000/000/192/small/10550087_1551717428382994_7968083788601429559_o.jpg?1504466162',
        },
      ],
    };
  }
  componentWillMount() {
    // this.getPageData();
  }

  getPageData = async pageNum => {
    const response = await fetch(`https://thisopenspace.com/lhl-test?page=${pageNum}`);
    const responseObj = await response.json();
    const resultList = await responseObj.data;
    this.setState({
      resultList: resultList,
    });
  };
  render() {
    const { resultList } = this.state;
    return <ResultList>{resultList.map(each => SpaceListItem(each))}</ResultList>;
  }
}

export default SpaceList;
