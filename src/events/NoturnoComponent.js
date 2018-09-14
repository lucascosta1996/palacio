import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { I18n, translate, Trans } from 'react-i18next';
import i18n from '../i18n';

class NoturnoComponent extends Component {

  componentDidMount(){
    let description = this.refs.description;
    description.innerHTML = description.innerHTML.replace("Potencial Evolutivo", "<b>Potencial Evolutivo</b>").replace("Noturno", "<i>Noturno</i>");
  }

  render(){
    let lng = this.props.long
    return (
      <div>
        <div className="eventPageTitle">
          <span>Noturno </span>
        </div>
        <section className="eventPage">
          <img src={require(`./images/noturno.jpg`)} />
          <div className="eventDate">
            <h3>{i18n.t('eventDate3.label', {lng})}</h3>
            <h3>{i18n.t('eventDay3.label', {lng})}</h3>
          </div>
            <p ref="description">{i18n.t('event3.label', {lng})}</p>
            <p>{i18n.t('freeEventNoturno.label', {lng})}</p>

              <a className="linkDownload" href="#" target="_blank">RSVP</a>

          </section>


      <span className="backBtn"><Link to="/events">{i18n.t('back.label', {lng})}</Link></span>
    </div>
    )
  }
}

export default NoturnoComponent;
