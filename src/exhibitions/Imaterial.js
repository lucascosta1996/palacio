import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import { I18n, translate, Trans } from "react-i18next";
import i18n from "../i18n";

class Imaterial extends Component {
  state = {
    pictures: Array.from({ length: 4 }),
    hasMore: true,
    language: this.props.lng
  };

  fetchMoreData = () => {
    if (this.state.pictures.length === 6) {
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
    let pdf = i18n.t('Imaterialpdf.label', {lng})
    return (
      <div>
          <div className="exhibitionTitle">
            <span>Andrés Stephanou</span>
            <span><i>Imaterial</i></span>
          </div>
          <InfiniteScroll
            dataLength={this.state.pictures.length}
            next={this.fetchMoreData}
            hasMore={this.state.hasMore}
            loader={<h4>...</h4>}
            endMessage={
              <div className="exhibitionDescription">
                <span className="exhibitionDescription--date">{i18n.t('datePE.label', {lng})}</span>
                <span>{i18n.t('ImaterialDescription1.label', {lng})}</span>
                <span>{i18n.t('ImaterialDescription2.label', {lng})}</span>
                <span>{i18n.t('ImaterialDescription3.label', {lng})}</span>
                <span>{i18n.t('ImaterialDescription4.label', {lng})}</span>
                <span>{i18n.t('ImaterialDescription5.label', {lng})}</span>
                <span>{i18n.t('ImaterialDescription6.label', {lng})}</span>
                <span>{i18n.t('ImaterialDescription7.label', {lng})}</span>
                <span>{i18n.t('ImaterialDescription8.label', {lng})}</span>
                <a className="linkDownload" href={require('../downloads/'+pdf+'.pdf')} target="_blank">{i18n.t('download.label', {lng})}</a>
              </div>
            }
          >
            {this.state.pictures.map(
              (i, index) =>
                index === 6 ? (
                  (index = null)
                ) : (
                  <img src={require(`../imaterial/i${index}.jpg`)} key={index} />
              )
            )}
          </InfiniteScroll>

          <span className="backBtn">
            <Link to="/exhibitions">{i18n.t('back.label', {lng})}</Link>
          </span>
          
      </div>
    );
  }
}

export default Imaterial;
