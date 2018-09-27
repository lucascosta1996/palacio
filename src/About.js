import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { I18n, translate, Trans } from 'react-i18next';
import i18n from './i18n';

class About extends Component {

  render(){
    let lng = this.props.lng
    return (
            <div>
            <section className="info">
              <span>{i18n.t('about.label', {lng})}</span>
              <aside className="contact">
                <span></span>
                <span>
                  <a href="mailto:info@palacio.xyz">info@palacio.xyz</a>
                </span>
              </aside>
              <aside className="newsletter">
                <span></span>
                <span>
                  <b>Newsletter</b>
                </span>
                <div>
                  <input placeholder="email" className="newsletterInput" />
                  <a href="" className="sendEmail">SEND</a>
                </div>    
              </aside>
              <aside className="signature">
                <span></span>
                <span>Palácio</span>
                <span>{i18n.t('address.label', {lng})}</span>
              </aside>
            </section>
            <span className="backBtn"><Link to="/">{i18n.t('back.label', {lng})}</Link></span>
          </div>
    )
  }

}

export default About;
