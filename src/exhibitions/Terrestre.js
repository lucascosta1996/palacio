import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import { I18n, translate, Trans } from "react-i18next";
import i18n from "../i18n";

class Terrestre extends Component {
  state = {
    pictures: Array.from({ length: 4 }),
    hasMore: true,
    language: this.props.lng
  };

  fetchMoreData = () => {
    if (this.state.pictures.length === 5) {
      this.setState({ hasMore: false });
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      this.setState({
        pictures: this.state.pictures.concat(Array.from({ length: 1 }))
      });
    }, 500);
  };

  render() {
    let lng = this.props.lng
    let pdf = i18n.t('Terrestrepdf.label', {lng})
    return (
      <div>
          <div className="exhibitionTitle">
            <span>Emerson da Silva</span>
            <span><i>Terrestre</i></span>
          </div>
          <InfiniteScroll
            dataLength={this.state.pictures.length}
            next={this.fetchMoreData}
            hasMore={this.state.hasMore}
            loader={<h4>...</h4>}
            endMessage={
              <div className="exhibitionDescription">
                <span className="exhibitionDescription--date">{i18n.t('dateTerrestre.label', {lng})}</span>
                <span>{i18n.t('TerrestreDescription1.label', {lng})}</span>
                <span>{i18n.t('TerrestreDescription2.label', {lng})}</span>
                <span>{i18n.t('TerrestreDescription3.label', {lng})}</span>
                <span>{i18n.t('TerrestreDescription4.label', {lng})}</span>
                <span>{i18n.t('TerrestreDescription5.label', {lng})}</span>
                <span>{i18n.t('TerrestreDescription6.label', {lng})}</span>
                <a className="linkDownload" href={require('../downloads/'+pdf+'.pdf')} target="_blank">{i18n.t('download.label', {lng})}</a>
                <span>{i18n.t('moreInfo.label', {lng})}</span>
              </div>
            }
          >
            {this.state.pictures.map(
              (i, index) =>
                index === 5 ? (
                  (index = null)
                ) : (
                  <img src={require(`../terrestre/T${index}.jpg`)} key={index} />
              )
            )}
          </InfiniteScroll>

        <div className="backBtn">
          <span>
            <Link to="/exhibitions">{i18n.t('back.label', {lng})}</Link>
          </span>
        </div>
      </div>
    );
  }
}

export default Terrestre;
