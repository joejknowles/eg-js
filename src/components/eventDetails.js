import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createEventSelector } from '../reducers'

export class EventDetails extends Component {
  componentDidMount() {
    const { fetchEventDetails, id } = this.props;
    fetchEventDetails(id);
  }

  render() {
    const props = this.props;
    return (
     <div key={ props.id } className="event-details">
       <img src={ props.image } className="event-image" alt="event" />
       <h3 className="event-title">{ props.title }</h3>
       <p>
         { props.date }, at { props.venue }
       </p>
     </div>
   );
  }
}



const mapStateToProps = (state, { params: { id } }) => (
  createEventSelector(id)
);

export default connect(mapStateToProps)(EventDetails);
