import React from 'react'
import PropTypes from 'prop-types'

const TVSeriesName = ({ series, index, toggleStarredSeries }) => (
  <div className="seriesNameWrapper">
    <span className="index">
      {index}
      .
    </span>
    <span className="seriesName">{series.name}</span>
    {
      series.original_name !== series.name && (
        <span className="originalName">
          (
          {series.original_name}
          )
        </span>
      )
    }
    <button
      className={series.starred ? 'starred' : 'unstarred'}
      name={series.id}
      onClick={toggleStarredSeries}
      type="button">
      <span aria-label="star" className="star" role="img">⭐</span>
    </button>
  </div>
)

TVSeriesName.propTypes = {
  series: PropTypes.shape({
    name: PropTypes.string.isRequired,
    original_name: PropTypes.string,
    starred: PropTypes.bool,
    id: PropTypes.number.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
  toggleStarredSeries: PropTypes.func.isRequired
}

export default TVSeriesName
