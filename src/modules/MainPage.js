// @ flow
import React, { Component } from 'react';
import axios from 'axios';
import regeneratorRuntime from 'regenerator-runtime';

import Header from '../components/Header';
import CardContainer from '../components/CardContainer';

class MainPage extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      campaignId: [],
      campaignNames: [],
      selectedCampaign: 'All Campaigns',
      cards: [],
      states: ['saved', 'pending', 'active', 'paused', 'expired', 'declined', 'terminated'],

    };
  }

  async componentDidMount() {
    const campaignNamesRequest = await axios.get('http://localhost:3000/campaigns').then(res => res.data.map(data => data.campaignName));
    const campaignIdRequest = await axios.get('http://localhost:3000/campaigns').then(res => res.data.map(data => data.id));
    const cardRequest = await axios.get('http://localhost:3000/cards').then(res => res.data);

    this.setState({
      cards: cardRequest,
      campaignNames: campaignNamesRequest,
      campaignId: campaignIdRequest,
    });
  }

  getAllCampaign = () => {
    axios.get('http://localhost:3000/cards').then(res => {
      this.setState({
        cards: res.data,
      });
    });
  }

  updateCardsData = (data) => {
    this.setState({
      cards: data
    });
  }

  filterByCampaignId = (e) => {
    axios.get(`http://localhost:3000/cards/${e.target.id}`)
      .then(res => {
        this.setState({
          selectedCampaign: e.currentTarget.textContent,
          cards: res.data,
        });
      });
  }

  render() {
    const {
      campaignId,
      campaignNames,
      selectedCampaign,
      cards,
    } = this.state;
    return (
      <div>
        <Header
          id={campaignId}
          campaignName={campaignNames}
          selectedCampaign={selectedCampaign}
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
