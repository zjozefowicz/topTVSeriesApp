import React from 'react'
import THEMOVIEDB_API from '../constants/themoviedb'

class FiltersBar extends React.Component {
  constructor(props) {
    super(props)

    this.sortByMostPopular = this.sortByMostPopular.bind(this)
    this.sortByLeastPopular = this.sortByLeastPopular.bind(this)
    this.sortByHighestRanked = this.sortByHighestRanked.bind(this)
    this.sortByLowestRanked = this.sortByLowestRanked.bind(this)
    this.changeListVisiblePages = this.changeListVisiblePages.bind(this)
  }

  sortByMostPopular() {
    const { changeListSorting } = this.props
    changeListSorting(THEMOVIEDB_API.sortingOptions.popularity.desc)
  }

  sortByLeastPopular() {
    const { changeListSorting } = this.props
    changeListSorting(THEMOVIEDB_API.sortingOptions.popularity.asc)
  }

  sortByHighestRanked() {
    const { changeListSorting } = this.props
    changeListSorting(THEMOVIEDB_API.sortingOptions.ranking.desc)
  }

  sortByLowestRanked() {
    const { changeListSorting } = this.props
    changeListSorting(THEMOVIEDB_API.sortingOptions.ranking.asc)
  }

  changeListVisiblePages(amount) {
    return () => this.props.changeListVisiblePages(amount)
  }

  render() {
    return (
      <div className="filtersBar">
        <div className="optionsList">
          <a className="filter" onClick={this.props.toggleStarredFilter}>Only starred</a>
        </div>
        <div className="filterLabel">Sorting:</div>
        <div className="optionsList">
          <a className="filter" onClick={this.sortByMostPopular}>Most popular</a>
          <a className="filter" onClick={this.sortByLeastPopular}>Least popular</a>
          <a className="filter" onClick={this.sortByHighestRanked}>Highest rated</a>
          <a className="filter" onClick={this.sortByLowestRanked}>Lowest rated</a>
        </div>
        <div className="filterLabel">Pagination:</div>
        <div className="optionsList">
          <a className="filter" onClick={this.changeListVisiblePages(1)}>20</a>
          <a className="filter" onClick={this.changeListVisiblePages(2)}>40</a>
          <a className="filter" onClick={this.changeListVisiblePages(3)}>60</a>
          <a className="filter" onClick={this.changeListVisiblePages(4)}>80</a>
          <a className="filter" onClick={this.changeListVisiblePages(5)}>100</a>
        </div>
      </div>
    )
  }
}

export default FiltersBar
