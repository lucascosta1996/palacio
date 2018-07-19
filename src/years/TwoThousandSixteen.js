import React, { Component } from 'react';
import { I18n, translate, Trans } from 'react-i18next';
import i18n from '../i18n';
import { Link, Route } from "react-router-dom";

class TwoThousandSixteen extends Component{
  render(){
    let lng = this.props.lng
    return(
      <div>
      <Route path="/exhibitions" render={() => (
        <section className="exhibitionsNames">
          <ul>
            <li><i>{i18n.t('foundation.label', {lng})}</i></li>
            <li><i>{i18n.t('foundationDate.label', {lng})}</i></li>            
          </ul>
        </section>
      )}
    />
  </div>
    )
  }
}

export default TwoThousandSixteen;
