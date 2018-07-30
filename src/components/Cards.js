// @ flow
import React from 'react';

import CardDropdown from './CardDropdown';

type Props = {
  title: string,
  image: string,
  price: any,
  revenue: any,
  subscribers: any,
  view: any,
  status: string,
  update: Function,
}

export default class Cards extends React.PureComponent<Props> {
  props: Props

  renderStatusIcon = (status): string => {
    let statusIcon;

    if (status === 'saved' || status === 'pending' || status === 'paused') {
      statusIcon = (
        <div className="border bg-warning border-white rounded-circle position-relative " style={{ width: '12px', height: '12px', bottom: '-3px' }} />
      );
    } else if (status === 'active') {
      statusIcon = (
        <div className="border bg-success border-white rounded-circle position-relative " style={{ width: '12px', height: '12px', bottom: '-3px' }} />
      );
    } else
    if (status === 'declined' || status === 'terminated') {
      statusIcon = (
        <div className="border bg-danger border-white rounded-circle position-relative " style={{ width: '12px', height: '12px', bottom: '-3px' }} />
      );
    } else {
      statusIcon = <div className="border bg-secondary border-white rounded-circle position-relative " style={{ width: '12px', height: '12px', bottom: '-3px' }} />;
    }

    return statusIcon;
  }

  render() {
    const {
      title,
      image,
      price,
      revenue,
      subscribers,
      view,
      status,
      update,
    } = this.props;

    return (
      <div className="shadow p-3 mb-5 bg-white rounded">
        <div className="card mb-5 rounded position-relative" style={{ width: '15rem' }}>
          <CardDropdown status={status} title={title} update={update} />
          {/* <i className="fas fa-spinner fa-spin fa-5x mt-3 position-absolute"
          style={{marginLeft: '90px', color: 'white', zIndex: '2'}}></i> */}
          <img className="card-img-top" src={image} alt='No Data File' />
          <div className="card-body">
            <h5 className="card-title">
              {title}
            </h5>
          </div>

          <div className="card-body d-flex justify-content-between text-secondary" style={{ fontSize: '12px' }}>
            <p className="card-text">
              {price.amount}
              &nbsp;
              {price.currency}
              &nbsp;
              / Month
            </p>
            <div className="d-flex flex-row">
              <p className="card-text position-relative">
                {status}
              </p>
              {this.renderStatusIcon(status)}
            </div>
          </div>

          <div className="card-footer text-muted d-flex justify-content-around">
            <i className="fas fa-database fa-sm">
              &nbsp;
              {revenue}
            </i>
            <i className="fas fa-users sm">
              &nbsp;
              {subscribers}
            </i>
            <i className="fas fa-eye sm">
              &nbsp;
              {view}
            </i>
          </div>
        </div>
      </div>
    );
  }
}
