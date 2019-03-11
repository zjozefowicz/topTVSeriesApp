import React from 'react'
import PropTypes from 'prop-types'
import TVSeriesListItem from './TVSeriesListItem'
import './TVSeriesList.scss'

const TVSeriesList = ({ tvSeriesList, ...props }) => (
  <div className="container">
    <div className="tvSeriesListWrapper">
      {
        tvSeriesList.map((series, index) => (
          <TVSeriesListItem
            {...props}
            index={index + 1}
            key={series.id}
            series={series} />
        ))
      }
      {tvSeriesList.length === 0 && (
        <div className="noResultsPlaceholder">
          No series found ☹
        </div>
      )}
    </div>
  </div>
)

TVSeriesList.propTypes = {
  tvSeriesList: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired
}

export default TVSeriesList
