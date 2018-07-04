import React, { Component } from 'react';
import MainPage from './MainPage';
import { translate, Trans } from 'react-i18next';
import { Link, Route, Switch } from "react-router-dom";
import About from './About';
import './normalize.css'
import './App.css';

class App extends Component {
  state = {
    selectedLang: ''
  }

  render() {
    const { t, i18n } = this.props;

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        if(lng === 'pt'){
          this.setState({
            selectedLang: 'pt'
          })
        } else if (lng === 'en'){
          this.setState({
            selectedLang: 'en'
          })
        }
      }
    return (
      <div className="App">
        <nav>
          <h2 className="title">Palácio</h2>
          <ul className="navigation">
              <li>{t('exibições')}</li>
              <li><Link to="/about">{t('sobre')}</Link></li>
              <li>{t('publicações')}</li>
          </ul>
          <section className="languages">
          <span onClick={() => changeLanguage('pt')} className={ this.state.selectedLang === 'pt' ? 'selectedLang' : null }>PT</span>
          <span onClick={() => changeLanguage('en')} className={ this.state.selectedLang === 'en' ? 'selectedLang' : null }>EN</span>
         </section>
         <Route path="/about" component={About} />
        </nav>


      </div>
    );
  }
}

export default translate('translations')(App);
