import axios from 'axios'

export const FETCH_POST = 'FETCH_POST';

export const ADD_POST = 'ADD_POST';

export const LIKE_POST = 'ADD_POST';
export const DISLIKE_POST = 'ADD_POST';

export const ADD_COMMENT = 'ADD_COMMENT';

export function fetchPosts(){
  return (dispatch)=>{
    axios('http://localhost:8082/api/posts')
    .then(({data})=>{
      let posts = data;
      //Call Comments
      axios('http://localhost:8082/api/comments')
      .then((result)=>{
        let comments =  result.data;
        //Map Comments to posts
        comments.map((comment,indx)=>{
          posts.map((post,index)=>{
            if(post.id == comment.post_id){
              console.log('found match',post.id,' : ', comment.post_id)
              console.log('post found ' , posts[index])
              posts[indx].comments = [comment]
              console.log('post found ' , posts[index])
            }
          })
        })
        dispatch({
          type: FETCH_POST,
          payload:  posts
        })
      })
      .catch((error)=>{
        console.log('err----', error);
      })

    })
    .catch((err)=>{
      return []
    })

  }
}
export function addPost(postData){
  return (dispatch)=>{
    dispatch({
      type: ADD_POST,
      payload: postData
    })
  }
}
export function likePost(post){
  return (dispatch)=>{
    dispatch({
      type: LIKE_POST,
      payload: post
    })
  }
}
export function dislikePost(post){
  return (dispatch)=>{
    dispatch({
      type: DISLIKE_POST,
      payload: post
    })
  }
}

export function addComment(comment,id){
  return (dispatch)=>{
    dispatch({
      type: ADD_COMMENT,
      payload: comment,
      postId: id
    })
  }
}
