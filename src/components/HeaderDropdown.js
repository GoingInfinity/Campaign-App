// @ flow
import React from 'react';
import axios from 'axios';
import classNames from 'classnames';

type Props = {
  currentSelection: Function,
  updateCurrentSelection: Function,
  id: [],
  campaignName: [],
}

export default class HeaderDropdown extends React.PureComponent<Props, {}> {

  renderCampaignsList = () => {
    const { id, campaignName, updateCurrentSelection } = this.props;
    return campaignName.map((string, i) => {
      return (
        <div className="dropdown-item" id={id[i]} key={i} onClick={updateCurrentSelection}>
          {string}
        </div>
      );
    });
  }

  render() {
    const { currentSelection, updateCurrentSelection } = this.props;
    return (
      <div className="dropdown">
        <button className="btn btn-light dropdown-toggle border" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          { currentSelection }
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div className="dropdown-item" onClick={updateCurrentSelection} >All Campaigns</div>
          {this.renderCampaignsList()}
        </div>
      </div>
    );
  }
}
