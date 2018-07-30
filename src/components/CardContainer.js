// @ flow
import React from 'react';
import Cards from './Cards';

type Props = {
  cards: [],
  update: any,
}

export default class CardContainer extends React.PureComponent<Props> {
  renderCards = () => {
    const { cards, update } = this.props;
    let cardData;

    if (cards.constructor === Array) {
      cardData = cards;
    } else cardData = cards.data;

    return cardData.map((data, i) => {
      return (
        <div key={i}>
          <Cards
            title={data.cardTitle}
            image={data.primaryMediaUrl}
            price={data.listOfPlans[0].price}
            revenue={data.totalRevenue}
            subscribers={data.subscribers}
            view={data.views}
            status={data.currentWorkflow}
            update={update}
          />
        </div>
      );
    });
  }

  renderPage = () => {
    const { cards } = this.props;
    if (cards.length === 0) {
      return (
        <div>
          No Data
        </div>
      );
    }
    return this.renderCards();
  }

  render() {
    return (
      <div className="container pt-5 d-flex flex-wrap justify-content-around">
        {this.renderPage()}
      </div>
    );
  }
}
