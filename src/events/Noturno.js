import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { I18n, translate, Trans } from 'react-i18next';
import i18n from '../i18n';
import NoturnoComponent from './NoturnoComponent';

class Noturno extends Component {

  render(){
    let lng = this.props.lng
    return (
      <Route path="/events/noturno" component={NoturnoComponent} />
    )
  }

}

export default Noturno;
