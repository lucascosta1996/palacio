import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { I18n, translate, Trans } from 'react-i18next';
import i18n from './i18n';

class publications extends Component {

  render(){
    let lng = this.props.lng
    return (
            <div>
            <section className="publications">
              <p>{i18n.t('publications.label', {lng})}</p>
              <p><b>{i18n.t('soon.label', {lng})}</b></p>
            </section>
            <span className="backBtn"><Link to="/">{i18n.t('back.label', {lng})}</Link></span>
          </div>
    )
  }

}

export default publications;
