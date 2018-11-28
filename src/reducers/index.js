import {combineReducers} from 'redux';

export const songsReducer = () => {
  return [
    { title: 'Baby', duration: '4:05' },
    { title: 'Macarena', duration: '2:00' },
    { title: 'All star', duration: '3:44' },
    { title: 'DDT', duration: '6:20' }
  ];
};

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};


export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});


