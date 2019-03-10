import React from 'react'
import Header from './Header'
import TVSeriesList from './TVSeriesList'
import FiltersBar from './FiltersBar'

const TopTVSeriesView = props => (
  <div>
    <Header />
    <FiltersBar {...props} />
    <TVSeriesList {...props} />
  </div>
)

export default TopTVSeriesView
