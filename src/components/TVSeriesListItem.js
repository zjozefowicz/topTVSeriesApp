import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import './TVSeriesListItem.scss'
import TVSeriesSeasons from './item/TVSeriesSeasons'
import TVSeriesName from './item/TVSeriesName'
import TVSeriesRateBar from './item/TVSeriesRateBar'
import TVSeriesPoster from './item/TVSeriesPoster'

const TVSeriesListItem = ({
  series,
  index,
  toggleExpandSeries,
  toggleStarredSeries
}) => (
  <div className="tvSeriesListItem">
    <div className="indexWrapper">
      {index}
    </div>
    <TVSeriesPoster series={series} />
    <div className="seriesInfoWrapper">
      <TVSeriesName index={index} series={series} toggleStarredSeries={toggleStarredSeries} />
      <TVSeriesRateBar series={series} />
      <div className="seriesPopularity">
        <span className="label">First aired:</span>
        {series.first_air_date && (
          <span className="number">{moment(series.first_air_date).format('LL')}</span>
        )}
      </div>
      <div className="seriesDescription">
        {series.overview}
      </div>
      <TVSeriesSeasons series={series} toggleExpandSeries={toggleExpandSeries} />
    </div>
  </div>
)

TVSeriesListItem.propTypes = {
  series: PropTypes.shape({
    poster_path: PropTypes.string,
    name: PropTypes.string.isRequired,
    original_name: PropTypes.string,
    starred: PropTypes.bool,
    detailsLoaded: PropTypes.bool,
    id: PropTypes.number.isRequired,
    vote_average: PropTypes.number.isRequired,
    first_air_date: PropTypes.string,
    expanded: PropTypes.bool
  }).isRequired,
  index: PropTypes.number.isRequired,
  toggleExpandSeries: PropTypes.func.isRequired,
  toggleStarredSeries: PropTypes.func.isRequired
}

export default TVSeriesListItem
