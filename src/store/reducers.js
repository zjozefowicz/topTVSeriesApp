import {
  map, each, flatten, filter
} from 'lodash'
import THEMOVIEDB_API from '../constants/themoviedb'
import * as actionTypes from './actionTypes'

const initialState = {
  pagesLoaded: 0,
  visiblyLoading: true,
  seriesData: {},
  tvSeriesPages: [[]],
  preferences: {
    onlyStarred: false,
    visiblePages: 1,
    sorting: THEMOVIEDB_API.defaultSorting,
    language: THEMOVIEDB_API.defaultLanguage,
    timezone: THEMOVIEDB_API.defaultTimezone
  }
}

const updateList = (state, action) => {
  const newTvSeriesList = state.tvSeriesPages.slice()
  const newSeriesData = { ...state.seriesData }
  newTvSeriesList[action.page] = map(action.data.data.results, 'id')
  each(action.data.data.results, series => {
    newSeriesData[series.id] = { ...(newSeriesData[series.id] || {}), ...series }
  })
  return { ...state, tvSeriesPages: newTvSeriesList, seriesData: newSeriesData }
}

const updatePreferences = (state, action) => (
  { ...state, preferences: { ...state.preferences, ...action.data } }
)

const updateSeries = (state, action) => ({
  ...state,
  seriesData: {
    ...state.seriesData,
    [action.seriesId]: {
      ...state.seriesData[action.seriesId],
      ...action.data
    }
  }
})

const reducers = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.FETCH_LIST:
    return updateList(state, action)
  case actionTypes.RESET_LIST:
    return { ...state, tvSeriesPages: [[]], pagesLoaded: 0 }
  case actionTypes.CHANGE_PREFERENCES:
    return updatePreferences(state, action)
  case actionTypes.UPDATE_SERIES:
    return updateSeries(state, action)
  case actionTypes.SET_PAGES_UNLOADED:
    return { ...state, pagesLoaded: 0 }
  case actionTypes.SET_VIEW_LOADING:
    return { ...state, visiblyLoading: true }
  case actionTypes.SET_VIEW_LOADED:
    return { ...state, pagesLoaded: action.page, visiblyLoading: false }
  default:
    return state
  }
}

const selectors = {
  getTVSeriesList: state => {
    let seriesList = map(flatten(state.tvSeriesPages), id => state.seriesData[id])
    if (state.preferences.onlyStarred) {
      seriesList = filter(seriesList, 'starred')
    }
    return seriesList.slice(0, state.preferences.visiblePages * THEMOVIEDB_API.pageSize)
  }
}

export { reducers, selectors }
