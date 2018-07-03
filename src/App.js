import React, { Component } from 'react';
import MainPage from './MainPage';
import { translate, Trans } from 'react-i18next';
import './normalize.css'
import './App.css';

class App extends Component {
  state = {
    className: 'active'
  }

  handleChange() {
    this.setState({
      activeIndex: 1
    })
    console.log(this.state.activeIndex);
  }

  render() {
    const { t, i18n } = this.props;

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      }
    return (
      <div className="App">
        <nav>
          <h2 className="title">Palácio</h2>
          <ul className="navigation">
            <li>{t('exibições')}</li>
            <li>{t('sobre')}</li>
          </ul>
          <section className="languages">
          <span onClick={() => changeLanguage('pt')} index={0} onChange={this.handleChange.bind(this)} className={this.state.className}>PT</span>
          <span> | </span>
          <span onClick={() => changeLanguage('en')} index={1}>EN</span>
         </section>
        </nav>


      </div>
    );
  }
}

export default translate('translations')(App);
