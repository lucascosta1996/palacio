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
    //infinite scroll
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

  componentDidUpdate(prevProps, prevState, snapshot){
    if (this.refs.description1 !== undefined) {
      debugger;
      let d1 = this.refs.description1;
      let d2 = this.refs.description2;
      let d6 = this.refs.description6;
      d1.innerHTML = d1.innerHTML.replace("Imaterial", "<b>Imaterial</b>");
      d2.innerHTML = d2.innerHTML.replace("Imaterial", "<b>Imaterial</b>");
      d6.innerHTML = d6.innerHTML.replace("Imaterial", "<b>Imaterial</b>");
    }
  }

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
                <span className="exhibitionDescription--date">{i18n.t('dateImaterial.label', {lng})}</span>
                <span ref="description1">{i18n.t('ImaterialDescription1.label', {lng})}</span>
                <span ref="description2">{i18n.t('ImaterialDescription2.label', {lng})}</span>
                <span ref="description3">{i18n.t('ImaterialDescription3.label', {lng})}</span>
                <span ref="description4">{i18n.t('ImaterialDescription4.label', {lng})}</span>
                <span ref="description5">{i18n.t('ImaterialDescription5.label', {lng})}</span>
                <span ref="description6">{i18n.t('ImaterialDescription6.label', {lng})}</span>
                <a className="linkDownload" href={require('../downloads/'+pdf+'.pdf')} target="_blank">{i18n.t('download.label', {lng})}</a>
              </div>
            }
          >
            {this.state.pictures.map(
              (i, index) =>
                index === 5 ? (
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
