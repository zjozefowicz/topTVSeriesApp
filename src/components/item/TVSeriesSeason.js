import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const TVSeriesSeason = ({ season }) => (
  <div className="tvSeriesSeasonWrapper">
    <div className="seasonInfo">
      <div className="seasonName">{season.name}</div>
      <div className="seasonEpisodesCount">{season.episode_count}</div>
      <div className="seasonAirDate">
        {
          season.air_date
            ? moment(season.air_date).format('ll')
            : '-'
        }
      </div>
    </div>
    <div className="seasonOverview">{season.overview}</div>
  </div>
)

TVSeriesSeason.propTypes = {
  season: PropTypes.shape({
    name: PropTypes.string.isRequired,
    episode_count: PropTypes.number.isRequired,
    air_date: PropTypes.string,
    overview: PropTypes.string
  }).isRequired
}

export default TVSeriesSeason
