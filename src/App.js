import React from 'react'
import { flatten } from 'lodash'
import { connect } from 'react-redux'

import './App.scss'
import THEMOVIEDB_API from './constants/themoviedb'
import { selectors } from './store/reducers'
import * as actions from './store/actions'
import TopTVSeriesView from './components/TopTVSeriesView'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.changeListSorting = this.changeListSorting.bind(this)
    this.changeListVisiblePages = this.changeListVisiblePages.bind(this)
    this.toggleStarredFilter = this.toggleStarredFilter.bind(this)
  }

  componentDidMount() {
    this.props.fetchSeriesList()
  }

  changeListSorting(sorting) {
    this.props.changeListPreferences({ sorting })
  }

  changeListVisiblePages(visiblePages) {
    this.props.changeListPreferences({ visiblePages })
  }

  toggleStarredFilter() {
    this.props.changeListPreferences({ onlyStarred: !this.props.preferences.onlyStarred })
  }

  render() {
    return (
      <TopTVSeriesView
        {...this.props}
        toggleStarredFilter={this.toggleStarredFilter}
        changeListVisiblePages={this.changeListVisiblePages}
        changeListSorting={this.changeListSorting} />
    )
  }
}

const mapState = state => ({
  preferences: state.preferences,
  tvSeriesList: selectors.getTVSeriesList(state)
})

const mapActions = dispatch => ({
  toggleExpandSeries: seriesId => dispatch(actions.toggleExpandSeries(seriesId)),
  starSeries: seriesId => dispatch(actions.starSeries(seriesId)),
  unstarSeries: seriesId => dispatch(actions.unstarSeries(seriesId)),
  changeListPreferences: data => dispatch(actions.changeListPreferences(data)),
  fetchSeriesList: () => dispatch(actions.fetchSeriesList())
})

export default connect(mapState, mapActions)(App)
