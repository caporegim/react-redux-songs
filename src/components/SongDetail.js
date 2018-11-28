import React from 'react';
import { connect } from 'react-redux';

class SongDetail extends React.Component {

  render () {
    const selectedSong = this.props.selectedSong ? this.props.selectedSong : { title: 'Not Selected' };
    return (
      <div>
        <h3>Song Detail:</h3>
        <p>
          Title: {selectedSong.title}
          <br />
          Duration: {selectedSong.duration}
        </p>
      </div>
    );
  }
}

const mapsStateToProps = (state) => {
  return { selectedSong: state.selectedSong };
}

export default connect(mapsStateToProps)(SongDetail);