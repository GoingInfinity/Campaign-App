// @ flow
import React from 'react';

type Props = {
  id: [],
  campaignName: [],
  update: Function,
}

export default class Header extends React.PureComponent<Props> {
  state: {} = {
    currentSelection: 'All Campaigns',
    currentDate: new Date(),
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
        <div className="dropdown-item" id={id[i]} key={i} onClick={this.updateCurrentSelection}>
          {string}
        </div>
      );
    });
  }

  renderCurrentDate = () => {
    const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const { currentDate } = this.state;

    return (
      <div className="text-danger">
        <i className="far fa-calendar" />
        &nbsp;Today,&nbsp;
        {shortMonths[currentDate.getMonth()]}
        &nbsp;
        {currentDate.getDate()}
      </div>
    );
  }

  render() {
    const { currentDate } = this.state;
    console.log(currentDate);
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

          {this.renderCurrentDate()}
        </div>
      </nav>
    );
  }
}
