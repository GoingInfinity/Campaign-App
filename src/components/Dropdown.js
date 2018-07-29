// @ flow
import React from 'react';
import axios from 'axios';

type Props = {
  status: string,
  title: string,
}

export default class Dropdown extends React.PureComponent<Props, {}> {
  state: {} = {
    state: {
      saved: ['pending'],
      pending: ['active', 'decline'],
      active: ['paused', 'expired', 'terminated'],
      paused: ['active', 'terminated'],
      expired: ['saved'],
      declined: ['saved'],
      terminated: ['saved'],
    }
  }

  props: Prop;

  updateCampaignStatus = (e) => {
    const { update } = this.props;

    const { title, status } = this.props;
    axios.post(`/${title}/${e.currentTarget.textContent}`).then(res => {
      update(res);
    }).catch(err => {
      console.log('axios error', err)
    })
  }

  renderFilterButtons = () => {
    const { state } = this.state;
    const { status } = this.props;

    return state[status].map((data, i) => {
      return (
        <div>
          <button className="dropdown-item" type="button" key={i} onClick={this.updateCampaignStatus}>
            {data}
          </button>
        </div>
      );
    });
  }

  render() {
    // console.log(this.props.saved,'saved')
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
