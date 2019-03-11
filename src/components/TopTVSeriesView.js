import React from 'react'
import PropTypes from 'prop-types'
import './TopTVSeriesView.scss'
import Header from './Header'
import TVSeriesList from './TVSeriesList'
import FiltersBar from './FiltersBar'

const BusyOverlay = () => (
  <div className="overlay">
    <span role="img" aria-label="hourglass">⌛</span>
  </div>
)

const ApiBrokenOverlay = () => (
  <div className="overlay">
    Themoviedb API appears to be broken. Either that, or internet is down.
    <br />
    Error is in console.
  </div>
)

const TopTVSeriesView = ({ visiblyLoading, apiBroken, ...props }) => (
  <div className="contentWrapper">
    {!apiBroken && visiblyLoading && <BusyOverlay />}
    {apiBroken && <ApiBrokenOverlay />}
    <Header />
    <FiltersBar {...props} />
    <TVSeriesList {...props} />
  </div>
)

TopTVSeriesView.propTypes = {
  apiBroken: PropTypes.bool.isRequired,
  visiblyLoading: PropTypes.bool.isRequired
}

export default TopTVSeriesView
