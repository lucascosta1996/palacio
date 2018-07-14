import React, { Component } from 'react';
import { I18n, translate, Trans } from 'react-i18next';
import i18n from '../i18n';

class TwoThousandSeventeen extends Component{
  render(){
    let lng = this.props.lng
    return(
      <section className="exhibitionsNames">
        <ul>
          <li>Emerson da Silva</li>
          <li><i>Novas Espécies</i></li>
          <li>{i18n.t('dateNE.label', {lng})}</li>
        </ul>
        <ul>
          <li>Andrés Stephanou</li>
          <li><i>Imaterial</i></li>
          <li>{i18n.t('dateImaterial.label', {lng})}</li>
        </ul>
      </section>
    )
  }
}

export default TwoThousandSeventeen;
