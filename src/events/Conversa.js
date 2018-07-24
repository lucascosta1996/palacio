import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { I18n, translate, Trans } from 'react-i18next';
import i18n from '../i18n';

class Conversa extends Component {

  render(){
    let lng = this.props.lng
    return (
      <Route path="/events/conversa" render={() => (
        <div>
          <div className="eventPageTitle">
            <span>Conversa guiada com Lucas Alves Costa</span>
          </div>
          <section className="eventPage">
            <img src={require(`./images/conversaguiada.png`)} />
            <span className="date">{i18n.t('eventDate1.label', {lng})}</span>
            <p>{i18n.t('event1.label', {lng})}</p>

            <span><a className="linkDownload" href="#" target="_blank">newsletter</a></span>
          </section>


        <span className="backBtn"><Link to="/events">{i18n.t('back.label', {lng})}</Link></span>
      </div>
    )} />
    )
  }

}

export default Conversa;
