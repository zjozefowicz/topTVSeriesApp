import React from 'react'
import PropTypes from 'prop-types'
import './TopTVSeriesView.scss'
import Header from './Header'
import TVSeriesList from './TVSeriesList'
import FiltersBar from './FiltersBar'

const BusyOverlay = () => (
  <div className="busyOverlay">
    <span role="img" aria-label="hourglass">⌛</span>
  </div>
)

const TopTVSeriesView = ({ visiblyLoading, ...props }) => (
  <div className="contentWrapper">
    {visiblyLoading && <BusyOverlay />}
    <Header />
    <FiltersBar {...props} />
    <TVSeriesList {...props} />
  </div>
)

TopTVSeriesView.propTypes = { visiblyLoading: PropTypes.bool.isRequired }

export default TopTVSeriesView
