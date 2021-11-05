import React, {Component} from 'react';
import {connect} from 'react-redux';
import List from '../presentational/List.jsx';
import {fetchMovies, MOVIES_SUCCESS} from '../../actions/movies';
import isEmpty from 'lodash.isempty';
import {MOVIES_INITIATED} from '../../actions/movies'
import _ from 'lodash';

class Example extends Component {
  state = {
    searchQuery : ''
  }

  //debouncing code for input field
  // searchDebounce = (callback, time) => {
  //   let timer;
  //   return (e) => {
      // this.setState({
      //   searchQuery: e.target.value
      // })
  //     window.clearTimeout(timer);
  //     timer = window.setTimeout(()=>{
  //       callback(e.target.value)
  //     }, time);
  //   }
  // }
  // setSearchQuery = (value) => {
  //   if (value !== '') {
  //     this.props.getMovies(value)
  //   }
  // }
  // search = this.searchDebounce(this.setSearchQuery,2000)
  

  abortPrevSearch = (e) => {
    this.setState({
      searchQuery: e.target.value
    })
    if (e.target.value !== '') {
        this.props.getMovies(e.target.value)
      }
  }
  render() {
      return (
        <div>
          <input type='text' onChange={this.abortPrevSearch} />
          <h2>MOVIE LIST for {this.state.searchQuery}</h2>
          {
            this.state.searchQuery !== '' && this.props?.movies?.data?.map( (movie) => {
              return <div>
                {movie?.title}
                <img src={`https://www.themoviedb.org/t/p/original/${movie?.poster_path}`} height={'50'} width={'50'}/>
              </div>
            })
          }
        </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMovies: (value) => {
      dispatch(fetchMovies(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Example);
