import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as firebase from "firebase";
import { I18n, translate, Trans } from 'react-i18next';
import i18n from './i18n';

class About extends Component {
  state = {
    email: ""
  }

  onSendEmailAddress(){
    let email = this.state.email;
    firebase.database().ref(`subscribers/` + email.toLowerCase())
    .set({
      email: email
    })
    .then(this.request
    )
    .then((res) => {debugger;})
    .catch(error => {
      debugger;
    })
  }

  render(){
    let lng = this.props.lng
    let email = this.state.email
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
                  <input type="email" 
                         placeholder="email"
                         className="newsletterInput" 
                         onChange={(event) => {this.setState({ email: event.target.value })}} />
                  <span href="#" className="sendEmail" onClick={this.onSendEmailAddress.bind(this)}>Send</span>
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
