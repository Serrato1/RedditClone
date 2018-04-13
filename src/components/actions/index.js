import axios from 'axios'

export const FETCH_POST = 'FETCH_POST';

export const ADD_POST = 'ADD_POST';

export const LIKE_POST = 'ADD_POST';
export const DISLIKE_POST = 'ADD_POST';

export const ADD_COMMENT = 'ADD_COMMENT';


export function addPost(post){
  return (dispatch)=>{
    dispatch({
      type: ADD_POST,
      payload: post
    })
  }
}
