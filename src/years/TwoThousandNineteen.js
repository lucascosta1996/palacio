import React, { Component } from 'react';
import { I18n, translate, Trans } from 'react-i18next';
import i18n from '../i18n';
import { Link, Route } from "react-router-dom";

class TwoThousandNineteen extends Component{
  render(){
    let lng = this.props.lng
    return(
      <div>
      <Route path="/exhibitions" render={() => (
        <section className="exhibitionsNames big__exhibitionsNames">
          <ul>
            <a href="#">
            <li>Gabriel Xavier</li>
            <li></li>
            <li>{i18n.t('dateGabriel19.label', {lng})}</li>
            </a>
          </ul>
          <ul>
            <a href="#">
            <li>Alexandre Lemos</li>
            <li></li>
            <li>{i18n.t('dateAlexandre19.label', {lng})}</li>
            </a> 
          </ul>
          <ul>
            <a href="#">
            <li>Emerson da Silva</li>
            <li></li>
            <li>{i18n.t('dateEmerson19.label', {lng})}</li>
            </a>
          </ul>
          <ul>
            <a href="#">
            <li>Andrés Stephanou</li>
            <li></li>
            <li>{i18n.t('dateAndres19.label', {lng})}</li>
            </a>
          </ul>
          <ul>
            <a href="#">
            <li>Lucas Alves Costa</li>
            <li></li>
            <li>{i18n.t('dateLucas19.label', {lng})}</li>
            </a>
          </ul>

        </section>
      )}
    />
  </div>
    )
  }
}

export default TwoThousandNineteen;
