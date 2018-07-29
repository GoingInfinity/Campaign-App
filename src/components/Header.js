// @ flow
import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';

type Props = {
  id: [],
  campaignName: [],
  selectedCampaign: string,
  update: Function,
}

export default class Header extends React.PureComponent<Props> {
  state: {} = {
    currentSelection: 'All Campaigns',
  };

  updateCurrentSelection = (e) => {
    const string = e.currentTarget.textContent;
    const { update } = this.props;
    this.setState({
      currentSelection: string,
    });
    update(e);
  }

  renderCampaignsList = () => {
    const { id, campaignName } = this.props;
    return campaignName.map((string, i) => {
      return (
        <div className="dropdown-item" id={id[i]} onClick={this.updateCurrentSelection}>
          {string}
          {/* jsx-a11y/no-static-element-interaction */}
        </div>
      );
    });
  }

  render() {
    const { currentSelection } = this.state;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light" key='header'>
        <div className="container">
          <div className="dropdown">
            <button className="btn btn-light dropdown-toggle border" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              { currentSelection }
            </button>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <div className="dropdown-item" onClick={this.updateCurrentSelection} >All Campaigns</div>
              {this.renderCampaignsList()}
            </div>

          </div>
        </div>
      </nav>
    );
  }
}
