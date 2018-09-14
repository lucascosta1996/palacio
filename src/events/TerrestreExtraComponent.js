import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { I18n, translate, Trans } from 'react-i18next';
import i18n from '../i18n';

class TerrestreExtraComponent extends Component {

  componentDidMount(){
    let description = this.refs.description;
    description.innerHTML = description.innerHTML.replace("Terrestre", "<b>Terrestre</b>").replace("Adaptação reversa", "<i>Adaptação reversa</i>");

  }

  render(){
    let lng = this.props.long
    return (
      <div>
        <div className="eventPageTitle">
          <span>Terrestre (extra)</span>
        </div>
        <section className="eventPage">
          <img src={require(`./images/terrestre.jpg`)} />
          <div className="eventDate">
            <h3>{i18n.t('eventDate2.label', {lng})}</h3>
            <h3>{i18n.t('eventDay2.label', {lng})}</h3>
          </div>
            <p ref="description">{i18n.t('event2.label', {lng})}</p>
            <p>{i18n.t('freeEvent.label', {lng})}</p>

              <a className="linkDownload" href="#" target="_blank">RSVP</a>

          </section>


      <span className="backBtn"><Link to="/events">{i18n.t('back.label', {lng})}</Link></span>
    </div>
    )
  }
}

export default TerrestreExtraComponent;
