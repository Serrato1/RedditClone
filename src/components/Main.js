import React, { Component } from 'react'
import AddPostForm from './AddPostForm'
import Post from './Post'
import FilterPosts from './FilterPosts'
import { Container, Row, Col, Button } from 'reactstrap'
import {connect} from 'react-redux'
import {addPost} from '../actions/index.js'
class Main extends Component {
  render() {

    let postList = this.props.posts;
    postList = postList.map((post,indx)=>{
      return <Post key={indx} post={post} id={indx}/>
    })
    return (
      <Container className="mt-4">
        <Row>
          <Col sm={{size: 8, offset: 1}}>
            <FilterPosts />
          </Col>
          <Col sm="2">
            <Button color="secondary">Add Post</Button>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col sm={{size: 11, offset: 1}}>
            <AddPostForm />
          </Col>
        </Row>
        <Row>
          <Col className="pr-0" sm={{size: 9, offset: 1}}>
            {/* Below is the Post component for each post. It is up to you how you would like to iterate over them. */}
            {postList}
          </Col>
        </Row>
      </Container>
    )
  }
}
const mapStateToProps = state=>({
  posts: state.posts
})
export default connect(mapStateToProps)(Main)
