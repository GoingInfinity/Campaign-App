// @ flow
import React from 'react';

import HeaderDropdown from './HeaderDropdown';

type Props = {
  id: [],
  campaignName: [],
  update: Function,
}

export default class Header extends React.PureComponent<Props> {
  state: {} = {
    currentSelection: 'All Campaigns',
    currentDate: new Date(),
    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  };

  updateCurrentSelection = (e) => {
    const string = e.currentTarget.textContent;
    const { update } = this.props;
    this.setState({
      currentSelection: string,
    });
    update(e);
  }

  renderCurrentDate = () => {
    const { currentDate, shortMonths } = this.state;

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
    const { currentSelection } = this.state;
    const { id, campaignName } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light" key='header'>
        <div className="container px-4">
          <HeaderDropdown
            currentSelection={currentSelection}
            updateCurrentSelection={this.updateCurrentSelection}
            id={id}
            campaignName={campaignName}
          />
          {this.renderCurrentDate()}
        </div>
      </nav>
    );
  }
}
