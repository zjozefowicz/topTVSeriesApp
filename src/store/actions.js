import * as actionTypes from './actionTypes'
import THEMOVIEDB_API from '../constants/themoviedb'
import axios from 'axios'

export const setViewLoading = () => ({
  type: actionTypes.SET_VIEW_LOADING
})

export const setViewLoaded = page => ({
  type: actionTypes.SET_VIEW_LOADED,
  page
})

export const setSeriesLoading = seriesId => ({
  type: actionTypes.UPDATE_SERIES,
  seriesId,
  data: { detailsLoaded: false }
})

export const setSeriesLoaded = seriesId => ({
  type: actionTypes.UPDATE_SERIES,
  seriesId,
  data: { detailsLoaded: true }
})

export const fetchSeriesList = (page = 1) => (dispatch, getState) => {
  dispatch(setViewLoading())
  const { language, sorting, timezone, visiblePages } = getState().preferences
  const params = {
    api_key: THEMOVIEDB_API.key,
    language,
    sort_by: sorting,
    page,
    timezone
  }
  return axios.get(THEMOVIEDB_API.paths.list, { params }).then(
    data => {
      dispatch(updateSeriesList(data, page))
      if (page < visiblePages) {
        dispatch(fetchSeriesList(page + 1))
      } else {
        dispatch(setViewLoaded(page))
      }
    }
  )
}

export const updateSeriesList = (data, page) => ({
  data: { ...data },
  page,
  type: actionTypes.FETCH_LIST
})

export const resetSeriesList = () => ({
  type: actionTypes.RESET_LIST
})

export const updateListPreferences = data => ({
  type: actionTypes.CHANGE_PREFERENCES,
  data
})

export const changeListPreferences = data => (dispatch, getState) => {
  dispatch(updateListPreferences(data))
  if (data.sorting) {
    dispatch(resetSeriesList())
  }
  if (data.sorting || data.visiblePages > getState().pagesLoaded) {
    dispatch(fetchSeriesList())
  }
}

export const starSeries = seriesId => ({
  seriesId,
  data: { starred: true },
  type: actionTypes.UPDATE_SERIES
})

export const unstarSeries = seriesId => ({
  seriesId,
  data: { starred: false },
  type: actionTypes.UPDATE_SERIES
})

export const updateSeriesDetails = data => ({
  seriesId: data.id,
  type: actionTypes.UPDATE_SERIES,
  data
})

export const fetchSeries = seriesId => (dispatch, getState) => {
  dispatch(setSeriesLoading(seriesId))
  const { language, timezone } = getState().preferences
  const params = {
    api_key: THEMOVIEDB_API.key,
    language,
    timezone
  }
  return axios.get(THEMOVIEDB_API.paths.details(seriesId), { params }).then(
    data => {
      dispatch(updateSeriesDetails(data.data))
      dispatch(setSeriesLoaded(seriesId))
    }
  )
}

export const toggleExpandSeries = seriesId => (dispatch, getState) => {
  if (getState().seriesData[seriesId].expanded) {
    dispatch(updateSeriesDetails({ expanded: false, id: seriesId }))
  } else {
    if (!getState().seriesData[seriesId].detailsLoaded) {
      dispatch(fetchSeries(seriesId)).then(
        dispatch(updateSeriesDetails({ expanded: true, id: seriesId }))
      )
    } else {
      dispatch(updateSeriesDetails({ expanded: true, id: seriesId }))
    }
  }
}
