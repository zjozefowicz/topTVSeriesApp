import React from 'react'
import PropTypes from 'prop-types'
import './TVSeriesSeasons.scss'
import TVSeriesSeason from './TVSeriesSeason'
import TVSeriesSeasonHeader from './TVSeriesSeasonHeader'

const TVSeriesSeasons = ({ series, toggleExpandSeries }) => (
  <>
    <button
      className="expandSeriesCell"
      name={series.id}
      onClick={toggleExpandSeries}
      type="button">
      {series.expanded ? 'Hide seasons' : 'Show seasons'}
    </button>
    {series.expanded && series.detailsLoaded && (
      <div className="expandedSeriesSeasons">
        <TVSeriesSeasonHeader />
        {(series.seasons || []).map(season => <TVSeriesSeason key={season.id} season={season} />)}
      </div>
    )}
  </>
)

TVSeriesSeasons.propTypes = {
  series: PropTypes.shape({
    detailsLoaded: PropTypes.bool,
    id: PropTypes.number.isRequired,
    expanded: PropTypes.bool
  }).isRequired,
  toggleExpandSeries: PropTypes.func.isRequired
}

export default TVSeriesSeasons
