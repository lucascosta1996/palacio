import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { I18n, translate, Trans } from 'react-i18next';
import i18n from '../i18n';

class TerrestreExtra extends Component {

  render(){
    let lng = this.props.lng
    return (
      <Route path="/events/terrestreextra" render={() => (
        <div>
          <div className="eventPageTitle">
            <span>Terrestre (extra)</span>
          </div>
          <section className="eventPage">
            <img src={require(`./images/terrestre.jpg`)} />
            <span className="date">{i18n.t('eventDate2.label', {lng})}</span>
            <p>{i18n.t('event2.label', {lng})}</p>

            <span><a className="linkDownload" href="#" target="_blank">newsletter</a></span>
          </section>


        <span className="backBtn"><Link to="/events">{i18n.t('back.label', {lng})}</Link></span>
      </div>
    )} />
    )
  }

}

export default TerrestreExtra;
