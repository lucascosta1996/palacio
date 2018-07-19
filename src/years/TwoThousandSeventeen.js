import React, { Component } from 'react';
import { I18n, translate, Trans } from 'react-i18next';
import i18n from '../i18n';
import { Link, Route } from "react-router-dom";

class TwoThousandSeventeen extends Component{
  render(){
    let lng = this.props.lng
    return(
      <div>
        <Route path="/exhibitions" render={() => (
      <section className="exhibitionsNames">
        <ul>
        <Link to="/exhibitions/novasespecies">
          <li>Emerson da Silva</li>
          <li><i>Novas Espécies</i></li>
          <li>{i18n.t('dateNE.label', {lng})}</li>
        </Link>
        </ul>
        <ul>
          <li>Andrés Stephanou</li>
          <li><i>Imaterial</i></li>
          <li>{i18n.t('dateImaterial.label', {lng})}</li>
        </ul>
      </section>
    )}
   />
    </div>
    )
  }
}

export default TwoThousandSeventeen;
