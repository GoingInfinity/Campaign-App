// @ flow
import React, { Component } from 'react';
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from 'regenerator-runtime';

import Header from '../components/Header';
import CardContainer from '../components/CardContainer';

class MainPage extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      campaignId: [],
      campaignNames: [],
      cards: [],
    };
  }

  async componentDidMount() {
    const baseUrl = 'http://localhost:3000';
    const campaignNamesRequest = await axios.get(`${baseUrl}/campaigns`).then(res => res.data.map(data => data.campaignName));
    const campaignIdRequest = await axios.get(`${baseUrl}/campaigns`).then(res => res.data.map(data => data.id));
    const cardRequest = await axios.get(`${baseUrl}/cards`).then(res => res.data);

    this.setState({
      cards: cardRequest,
      campaignNames: campaignNamesRequest,
      campaignId: campaignIdRequest,
    });
  }

  // To be sent as props to dropdown component
  updateCardsData = (data: Object) => {
    this.setState({
      cards: data,
    });
  }

  filterByCampaignId = (e) => {
    axios.get(`http://localhost:3000/cards/${e.target.id}`)
      .then(res => {
        this.setState({
          cards: res.data,
        });
      });
  }

  render() {
    const {
      campaignId,
      campaignNames,
      cards,
    } = this.state;
    return (
      <div>
        <Header
          id={campaignId}
          campaignName={campaignNames}
          update={this.filterByCampaignId}
        />
        <CardContainer
          cards={cards}
          update={this.updateCardsData}
        />
      </div>
    );
  }
}

export default MainPage;
