import React, { Component } from 'react';

import { connect } from 'react-redux';

import { selectSongAction } from "../actions";


class SongList extends Component {
  renderSongs () {
    return this.props.songs.map(song =>
      <div className="item" key={song.title}>

        <div className="right floated content">
          <button
            className="ui button primary"
            onClick={() => this.props.selectSong(song)}>
            Select
          </button>
        </div>
        <div className="content">{song.title}</div>
      </div>);
  }

  render () {
    console.log(this.props);
    return <div className="ui divided list">{this.renderSongs()}</div>
  }
}

const mapStateToProps = (state) => {

  console.log(state);
  return { songs: state.songs }
};

export default connect(mapStateToProps, {
  selectSong: selectSongAction
})(SongList);
