import React, { Component } from 'react';
import { I18n, translate, Trans } from 'react-i18next';
import i18n from '../i18n';
import { Link, Route } from "react-router-dom";

class TwoThousandEighteen extends Component{
  render(){
    let lng = this.props.lng
    return(
      <div>
      <Route path="/exhibitions" render={() => (
        <section className="exhibitionsNames">
          <ul>
            <a href="">
            <li>Lucas Alves Costa</li>
            <li></li>
            <li>{i18n.t('dateTesting.label', {lng})}</li>
            </a>
          </ul>
          <ul>
          <Link to="/exhibitions/terrestre">
            <li>Emerson da Silva</li>
            <li>Terrestre</li>
            <li>{i18n.t('dateTerrestre.label', {lng})}</li>
          </Link>
          </ul>
          <ul>
            <Link to="/exhibitions/potencialevolutivo">
            <li>Andrés Stephanou</li>
            <li>Potencial Evolutivo</li>
            <li>{i18n.t('datePE.label', {lng})}</li>
            </Link>
          </ul>

        </section>
      )}
    />
  </div>
    )
  }
}

export default TwoThousandEighteen;
