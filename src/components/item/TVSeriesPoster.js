import React from 'react'
import PropTypes from 'prop-types'
import THEMOVIEDB_API from '../../constants/themoviedb'

const TVSeriesPoster = ({ series }) => (
  <div className="posterWrapper">
    {
      series.poster_path
        ? (
          <img
            alt="poster"
            className="poster"
            src={`${THEMOVIEDB_API.paths.posterBase}${series.poster_path}`} />
        ) : <div className="posterPlaceholder">No poster</div>
    }
  </div>
)

TVSeriesPoster.propTypes = {
  series: PropTypes.shape(
    { poster_path: PropTypes.string }
  ).isRequired
}


export default TVSeriesPoster
