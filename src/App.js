import React, { Component } from 'react';
import { I18n, translate, Trans } from 'react-i18next';
import { Link, Route, Switch, withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import About from './About';
import Exhibitions from './Exhibitions';
import './normalize.css'
import './App.css';
import i18n from './i18n';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lng: 'pt'
    }
    this.onLanguageChanged = this.onLanguageChanged.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    i18n.on('languageChanged', this.onLanguageChanged)
  }

  componentWillUnmount() {
    i18n.off('languageChanged', this.onLanguageChanged)
  }

  onLanguageChanged(lng) {
    this.setState({
      lng: lng
    })
  }

  handleChange(e){
    console.log(e.target.id);
    i18n.changeLanguage(e.target.id);
  }

  render() {
    let lng = this.state.lng
    return (
            <div className="App">
              <nav className="mainNav">
                <h2 className="title"><Link to='/'>PALÁCIO</Link></h2>
                  <Route exact path="/" render={() => (
                    <ul className="navigation">
                    <li><Link to="/exhibitions">{i18n.t('li1.label', {lng})}</Link></li>
                    <li><Link to="/about">{i18n.t('li2.label', {lng})}</Link></li>
                    <li>{i18n.t('li3.label', {lng})}</li>
                    </ul>
                  )}/>
                <section className="languages">
                <span onClick={this.handleChange} id="pt" className={this.state.lng === 'pt' ? 'selectedLang' : null}>PT</span>
                <span onClick={this.handleChange} id="en" className={this.state.lng === 'en' ? 'selectedLang' : null}>EN</span>
               </section>
              </nav>
              <Route path="/about" component={About} lng={this.state.lng} />
              <Route path="/exhibitions" component={Exhibitions} lng={this.state.lng} />
            </div>
    );
  }
}


export default App;
