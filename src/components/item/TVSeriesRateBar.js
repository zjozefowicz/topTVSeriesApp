import React from 'react'
import PropTypes from 'prop-types'

const TVSeriesRateBar = ({ series }) => (
  <div className="rateBarWrapper">
    <span className="label">
      User rating:
      <span className="percentage">
        {series.vote_average * 10}
        %
      </span>
    </span>
    <div className="rateBar">
      <div className="filling" style={{ width: `${series.vote_average * 10}%` }} />
    </div>
  </div>
)

TVSeriesRateBar.propTypes = {
  series: PropTypes.shape(
    { vote_average: PropTypes.number.isRequired }
  ).isRequired
}

export default TVSeriesRateBar
