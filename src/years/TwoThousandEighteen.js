import React, { Component } from 'react';
import { I18n, translate, Trans } from 'react-i18next';
import i18n from '../i18n';

class TwoThousandEighteen extends Component{
  render(){
    let lng = this.props.lng
    return(
      <section className="exhibitionsNames">
        <ul>
          <li>Emerson da Silva</li>
          <li><i>Terrestre</i></li>
          <li>{i18n.t('dateTerrestre.label', {lng})}</li>
        </ul>
        <ul>
          <li>Andrés Stephanou</li>
          <li><i>Potencial Evolutivo</i></li>
          <li>{i18n.t('datePE.label', {lng})}</li>
        </ul>
      </section>
    )
  }
}

export default TwoThousandEighteen;
