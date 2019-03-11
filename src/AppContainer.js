import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { selectors } from './store/reducers'
import * as actions from './store/actions'
import APP from './constants/app'
import TopTVSeriesView from './components/TopTVSeriesView'

class AppContainer extends React.Component {
  constructor(props) {
    super(props)

    this.changeListSorting = this.changeListSorting.bind(this)
    this.changeListVisiblePages = this.changeListVisiblePages.bind(this)
    this.toggleStarredFilter = this.toggleStarredFilter.bind(this)
    this.toggleExpandSeries = this.toggleExpandSeries.bind(this)
    this.fetchSeriesList = this.fetchSeriesList.bind(this)
    this.toggleStarredSeries = this.toggleStarredSeries.bind(this)
  }

  componentDidMount() {
    const { fetchSeriesList, refreshSeriesList } = this.props
    fetchSeriesList()
    setInterval(refreshSeriesList, APP.refreshInterval * 1000)
  }

  changeListSorting(event) {
    const { changeListPreferences } = this.props
    changeListPreferences({ sorting: event.target.name })
  }

  changeListVisiblePages(event) {
    const { changeListPreferences } = this.props
    changeListPreferences({ visiblePages: parseInt(event.target.name, 10) })
  }

  toggleStarredFilter() {
    const { changeListPreferences, preferences } = this.props
    changeListPreferences({ onlyStarred: !preferences.onlyStarred })
  }

  toggleExpandSeries(event) {
    const { toggleExpandSeries } = this.props
    toggleExpandSeries(parseInt(event.target.name, 10))
  }

  fetchSeriesList(event) {
    const { fetchSeriesList } = this.props
    fetchSeriesList(parseInt(event.target.name, 10))
  }

  toggleStarredSeries(event) {
    const { toggleStarredSeries } = this.props
    toggleStarredSeries(parseInt(event.target.name, 10))
  }

  render() {
    return (
      <TopTVSeriesView
        {...this.props}
        changeListSorting={this.changeListSorting}
        changeListVisiblePages={this.changeListVisiblePages}
        fetchSeriesList={this.fetchSeriesList}
        toggleExpandSeries={this.toggleExpandSeries}
        toggleStarredSeries={this.toggleStarredSeries}
        toggleStarredFilter={this.toggleStarredFilter} />
    )
  }
}

AppContainer.propTypes = {
  fetchSeriesList: PropTypes.func.isRequired,
  toggleExpandSeries: PropTypes.func.isRequired,
  toggleStarredSeries: PropTypes.func.isRequired,
  changeListPreferences: PropTypes.func.isRequired,
  refreshSeriesList: PropTypes.func.isRequired,
  preferences: PropTypes.shape({ onlyStarred: PropTypes.bool.isRequired }).isRequired
}

const mapState = state => ({
  apiBroken: state.apiBroken,
  visiblyLoading: state.visiblyLoading,
  preferences: state.preferences,
  tvSeriesList: selectors.getTVSeriesList(state)
})

const mapActions = dispatch => ({
  toggleExpandSeries: seriesId => dispatch(actions.toggleExpandSeries(seriesId)),
  toggleStarredSeries: seriesId => dispatch(actions.toggleStarredSeries(seriesId)),
  changeListPreferences: data => dispatch(actions.changeListPreferences(data)),
  refreshSeriesList: () => dispatch(actions.refreshSeriesList()),
  fetchSeriesList: () => dispatch(actions.fetchSeriesList())
})

export default connect(mapState, mapActions)(AppContainer)
