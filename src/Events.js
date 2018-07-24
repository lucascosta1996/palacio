import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { I18n, translate, Trans } from 'react-i18next';
import i18n from './i18n';
import Conversa from './events/Conversa';
import TerrestreExtra from './events/TerrestreExtra';
import Noturno from './events/Noturno';

class Events extends Component {

  render(){
    let lng = this.props.lng
    return (
            <div>
              <Route exact path="/events" render={() => (
                <div>
                <section className="events">
                  <ul>
                    <li><b>{i18n.t('eventDate1.label', {lng})}</b> <Link to="/events/conversa">Conversa guiada com Lucas Alves Costa</Link></li>
                  </ul>
                  <ul>
                    <li><b>{i18n.t('eventDate2.label', {lng})}</b> <Link to="/events/terrestreextra">Terrestre</Link></li>
                  </ul>
                  <ul className="bckgChange">
                    <li><b>{i18n.t('eventDate3.label', {lng})}</b> <Link to="/events/noturno">Noturno</Link></li>
                  </ul>
                </section>
                <span className="backBtn">
                  <Link to="/">{i18n.t('back.label', {lng})}</Link>
                </span>
              </div>
              )} />
            <Route path="/events/conversa" component={Conversa} lng={lng} />
            <Route path="/events/terrestreextra" component={TerrestreExtra} lng={lng} />
            <Route path="/events/noturno" component={Noturno} lng={lng} />
          </div>
    )
  }

}

export default Events;
