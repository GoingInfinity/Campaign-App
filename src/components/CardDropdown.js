// @ flow
import React from 'react';
import axios from 'axios';
import classNames from 'classnames';

type Props = {
  status: string,
  title: string,
  update: Function,
}

export default class CardDropdown extends React.PureComponent<Props, {}> {
  state: {} = {
    state: {
      saved: ['pending'],
      pending: ['active', 'decline'],
      active: ['paused', 'expired', 'terminated'],
      paused: ['active'],
      expired: ['saved'],
      declined: ['saved'],
      terminated: ['saved'],
    },
  }

  updateCampaignStatus = (e) => {
    const { update, title } = this.props;

    axios.post(`/${title}/${e.currentTarget.textContent}`).then(res => {
      update(res);
    }).catch(err => {
      // eslint-disable-next-line no-console
      console.log('axios error', err);
    });
  }

  renderFilterButtons = () => {
    const { state } = this.state;
    const { status } = this.props;

    return state[status].map((data, i) => {
      const buttonColor = classNames('dropdown-item', {
        'text-danger': i !== 0,
      });

      return (
        <div key={i}>
          <button className={buttonColor} type="button" onClick={this.updateCampaignStatus}>
            {data}
          </button>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="dropdown position-absolute mx-auto" style={{ right: '0' }}>
        <button className="btn-transparent btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
        <div className="dropdown-menu" aria-labelledby="dropdownMenu1" style={{}}>
          {this.renderFilterButtons()}
        </div>
      </div>
    );
  }
}
