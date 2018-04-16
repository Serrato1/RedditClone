import { combineReducers } from 'redux'
import axios from 'axios'
import {FETCH_POST,ADD_POST,LIKE_POST,DISLIKE_POST  ,    ADD_COMMENT } from '../actions'


export default function posts(state=[], action){
  switch(action.type){
    case FETCH_POST:
      return [...action.payload]
    case ADD_POST:
      let newPost = action.payload;
      return [...state, newPost]
    case LIKE_POST:
      return state
    case DISLIKE_POST:
      return state
    case ADD_COMMENT:
      console.log('this is state:   ' , state);
      console.log('this is the payload:   ' , action.payload);
      console.log('this is the target post : ', state[action.postId])
      let newState = state;
      newState[action.postId].comments = [...newState[action.postId].comments, {content : action.payload , post_id : newState[action.postId].id }]
      return [...newState]
    default:
      return state
  }
}
