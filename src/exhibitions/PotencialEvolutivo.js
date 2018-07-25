import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import { I18n, translate, Trans } from "react-i18next";
import i18n from "../i18n";

class PotencialEvolutivo extends Component {
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
    let pdf = i18n.t('PEpdf.label', {lng})
    return (
      <div>
          <div className="exhibitionTitle">
            <span>Andrés Stephanou</span>
            <span><i>Potencial Evolutivo</i></span>
          </div>
          <InfiniteScroll
            dataLength={this.state.pictures.length}
            next={this.fetchMoreData}
            hasMore={this.state.hasMore}
            loader={<h4>...</h4>}
            endMessage={
              <div className="exhibitionDescription">
                <span className="exhibitionDescription--date">{i18n.t('datePE.label', {lng})}</span>
                <span>{i18n.t('PEDescription.label', {lng})}</span>
                <span>{i18n.t('PEDescription2.label', {lng})}</span>
                <span>{i18n.t('PEDescription3.label', {lng})}</span>
                <span>{i18n.t('PEDescription4.label', {lng})}</span>
                <span>{i18n.t('PEDescription5.label', {lng})}</span>
                <span>{i18n.t('PEDescription6.label', {lng})}</span>
                <span>{i18n.t('PEDescription7.label', {lng})}</span>
                <span>{i18n.t('PEDescription8.label', {lng})}</span>
              {/*<section className="exhibitionDetails">
                <p>Noturno, 2018</p>
                <p>4K video, sound</p>
                <p>{i18n.t('duration.label', {lng})}</p>
              </section>*/}
                <a className="linkDownload" href={require('../downloads/'+pdf+'.pdf')} target="_blank">{i18n.t('download.label', {lng})}</a>
              </div>
            }
          >
            {this.state.pictures.map(
              (i, index) =>
                index === 6 ? (
                  (index = null)
                ) : (
                  <img src={require(`../potencialEvolutivo/PE${index}.jpg`)} key={index} />
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

export default PotencialEvolutivo;
