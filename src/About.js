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
              <span className="aboutDescription">{i18n.t('about.label', {lng})}</span>
              <aside className="contact">
                <span>
                  <a href="mailto:info@palacio.xyz">info@palacio.xyz</a>
                </span>
              </aside>
              <aside className="newsletter">
                <span>
                  <b>Newsletter</b>
                </span>
                <div>
                  <input type="email" placeholder="email" className="newsletterInput" />
                  <a href="" className="sendEmail">Send</a>
                </div>    
              </aside>
              <aside className="signature">
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
