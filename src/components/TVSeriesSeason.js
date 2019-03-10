import React from 'react'
import moment from 'moment'

const TVSeriesSeason = ({ season }) => (
  <div className="tvSeriesSeasonWrapper">
    <div className="seasonInfo">
      <div className="seasonName">{season.name}</div>
      <div className="seasonEpisodesCount">{season.episode_count}</div>
      <div className="seasonAirDate">{moment(season.air_date).format('ll')}</div>
    </div>
    <div className="seasonOverview">{season.overview}</div>
  </div>
)

export default TVSeriesSeason
