import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { I18n, translate, Trans } from "react-i18next";
import i18n from "./i18n";
import TwoThousandEighteen from './years/TwoThousandEighteen';
import TwoThousandSeventeen from './years/TwoThousandSeventeen';

class Exhibitions extends Component {
  constructor(props) {
    super(props);

    this.state = { year: "2018" };

    this.year2018 = this.year2018.bind(this);
    this.year2017 = this.year2017.bind(this);
    this.year2016 = this.year2016.bind(this);
  }

  year2018() {
    this.setState({ year: "2018" });
  }

  year2017() {
    this.setState({ year: "2017" });
  }

  year2016() {
    this.setState({ year: "2016" });
  }

  render() {
    let lng = this.props.lng
    return (
      <div>
        <nav className="years">
          <ul>
            <li onClick={this.year2018} className={this.state.year === '2018' ? 'selectedLang' : null}>2018</li>
            <li onClick={this.year2017} className={this.state.year === '2017' ? 'selectedLang' : null}>2017</li>
            <li onClick={this.year2016} className={this.state.year === '2016' ? 'selectedLang' : null}>2016</li>
          </ul>
        </nav>
        <section>
          {this.state.year === "2018" ? <TwoThousandEighteen lng={this.props.lng} /> : null}
          {this.state.year === "2017" ? <TwoThousandSeventeen lng={this.props.lng} /> : null}
        </section>
      </div>
    );
  }
}

export default Exhibitions;
