import {expect} from 'chai';
import {List, Map} from 'immutable';

describe('immutability', () => {

  describe('a number', () => {

    function increment(currentState) {
      return currentState + 1;
    }

    it('is immutable', () => {
      let state = 42;
      let nextState = increment(state);

      expect(nextState).to.equal(43);
      expect(state).to.equal(42);
    });
  });

  describe('add a movie with List', () => {
    let currentState = List();
    let movie = 'Coco'
    function addMovie(currentState, movie) {
      return currentState.push(movie)
    }
    let nextState = addMovie(currentState, movie)
    it('is immutable', () => {
      expect(nextState).to.equal(List.of('Coco'));
      expect(currentState).to.equal(List())
    })
  })

  describe('add a movie with Map', () => {
    let currentState = Map({
      movies: List.of('Coco')
    });

    function addMovie(currentState, movie){
      return currentState.update('movies', (movies) => movies.push(movie));
    }
    let nextState = addMovie(currentState, 'Black Panther')
    it('is immutable', () => {
      expect(nextState).to.equal(Map({movies: List.of('Coco', 'Black Panther')}))
      expect(currentState).to.equal(Map({movies: List.of('Coco')}))
    })

  })
});
