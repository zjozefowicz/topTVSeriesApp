import React from 'react'
import './TVSeriesListItem.scss'
import THEMOVIEDB_API from '../constants/themoviedb'
import TVSeriesSeason from './TVSeriesSeason'
import TVSeriesSeasonHeader from './TVSeriesSeasonHeader'

class TVSeriesListItem extends React.Component {
  constructor(props) {
    super(props)

    this.toggleStarred = this.toggleStarred.bind(this)
    this.toggleExpand = this.toggleExpand.bind(this)
  }

  toggleStarred() {
    const { series, starSeries, unstarSeries } = this.props
    if (series.starred) {
      unstarSeries(series.id)
    } else {
      starSeries(series.id)
    }
  }

  toggleExpand() {
    const { series, toggleExpandSeries } = this.props
    toggleExpandSeries(series.id)
  }

  render () {
    const { series, index } = this.props
    return (
      <div className="tvSeriesListItem">
        <div className="indexWrapper">
          {index}
        </div>
        <div className="posterWrapper">
          <img
            alt="poster"
            className="poster"
            src={`${THEMOVIEDB_API.paths.posterBase}${series.poster_path}`} />
        </div>
        <div className="seriesInfoWrapper">
          <div className="rateBarWrapper">
            <div className="rateBar" style={{ width: `${series.vote_average * 10}%` }} />
          </div>
          <div className="seriesNameWrapper">
            <span className="seriesName">{series.name}</span>
            {
              series.original_name !== series.name && (
                <span className="originalName">({series.original_name})</span>
              )
            }
            <a className={series.starred ? 'starred' : 'unstarred'} onClick={this.toggleStarred}>
              ⭐
            </a>
          </div>
          <div className="seriesPopularity">
            <span className="label">Views:</span>
            <span className="number">{series.popularity}</span>
          </div>
          <div className="seriesDescription">
            {series.overview}
          </div>
          <a className="expandSeriesCell" onClick={this.toggleExpand}>
            {series.expanded ? 'Hide season' : 'Show seasons'}
          </a>
          {series.expanded && (
            <div className="expandedSeriesSeasons">
              <TVSeriesSeasonHeader />
              {(series.seasons || []).map(season => <TVSeriesSeason key={season.id} season={season} />)}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default TVSeriesListItem
