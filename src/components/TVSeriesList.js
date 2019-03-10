import React from 'react'
import TVSeriesListItem from './TVSeriesListItem'
import './TVSeriesList.scss'

const TVSeriesList = ({ tvSeriesList, ...props }) => (
  <div className="tvSeriesListWrapper">
    {
      tvSeriesList.map((series, index) =>
       <TVSeriesListItem {...props} index={index + 1} key={series.id} series={series} />
      )
    }
  </div>
)

export default TVSeriesList
