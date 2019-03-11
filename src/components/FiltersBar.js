import React from 'react'
import PropTypes from 'prop-types'
import { range } from 'lodash'
import './FiltersBar.scss'
import THEMOVIEDB_API from '../constants/themoviedb'
import APP from '../constants/app'

const FiltersBar = ({
  changeListSorting,
  changeListVisiblePages,
  toggleStarredFilter,
  preferences
}) => {
  const { popularity, ranking } = THEMOVIEDB_API.sortingOptions
  return (
    <div>
      <div className="mainTabs">
        <button
          className={`${preferences.sorting === popularity ? 'active' : ''} tab`}
          name={popularity}
          onClick={changeListSorting}
          type="button">
          Most popular
        </button>
        <button
          className={`${preferences.sorting === ranking ? 'active' : ''} tab`}
          name={ranking}
          onClick={changeListSorting}
          type="button">
          Highest rated
        </button>
      </div>
      <div className="filtersBarWrapper">
        <div className="filtersBar">
          <div className="optionsList">
            <button
              className={`filter ${preferences.onlyStarred ? '' : 'active'}`}
              onClick={preferences.onlyStarred ? toggleStarredFilter : undefined}
              type="button">
              Show all results
            </button>
            <button
              className={`filter ${preferences.onlyStarred ? 'active' : ''}`}
              onClick={!preferences.onlyStarred ? toggleStarredFilter : undefined}
              type="button">
              Show only starred
            </button>
          </div>
          <div className="divider" />
          <div className="optionsList">
            <div className="filterLabel">Visible entries:</div>
            {
              range(1, APP.maxPages + 1).map(visiblePages => (
                <button
                  className={`filter ${visiblePages === preferences.visiblePages ? 'active' : ''}`}
                  key={visiblePages}
                  name={visiblePages}
                  onClick={changeListVisiblePages}
                  type="button">
                  {visiblePages * THEMOVIEDB_API.pageSize}
                </button>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

FiltersBar.propTypes = {
  changeListSorting: PropTypes.func.isRequired,
  changeListVisiblePages: PropTypes.func.isRequired,
  toggleStarredFilter: PropTypes.func.isRequired,
  preferences: PropTypes.shape({
    visiblePages: PropTypes.number.isRequired,
    onlyStarred: PropTypes.bool.isRequired,
    sorting: PropTypes.string.isRequired
  }).isRequired
}

export default FiltersBar
