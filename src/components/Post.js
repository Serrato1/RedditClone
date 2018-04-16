import React,{Component}  from 'react'
import  {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle,Row,Col,Button,Form,FormGroup,Input } from 'reactstrap'
import FaArrowUp from 'react-icons/lib/fa/arrow-up'
import FaArrowDown from 'react-icons/lib/fa/arrow-down'
import FaComment from 'react-icons/lib/fa/comment'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import {addComment} from '../actions/index.js'


class Post extends Component{
  state ={
    commentContent : ''
  }
  onSubmit = (e)=>{
    e.preventDefault();
    console.log('Submitted ', this.state.commentContent);
    console.log(this.props.post.id)
    this.props.addComment(this.state.commentContent, this.props.id);
  }
  onChange = (e)=>{
    let commentContent = e.target.value;
    this.setState({commentContent});
  }
  render(){
    let comments= this.props.post.comments.map((comment,indx)=>{
      return <li key={indx}>{comment.content} </li>
    });
    console.log(this.props);
    // let comments = [<li key={1}> hello</li>]
    let totalComments = comments.length != 1  ? `${comments.length} Comments` : `${comments.length} Comment`
    return(
      <Row className="mt-3">
        <Col>
          <Card>
            <CardImg
              top
              width="100%"
              src={this.props.post.img_url}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>{this.props.post.title}| <FaArrowUp /> {this.props.post.votes} <FaArrowDown /></CardTitle>
              <CardSubtitle>{this.props.post.author}</CardSubtitle>
              <CardText>
                {this.props.post.content}
              </CardText>
                <hr />
                Posted on {this.props.post.createdAt} | <FaComment /> {totalComments}
                <Form inline onSubmit={this.onSubmit}>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0" >
                    <Input type="text" name="comment" id="comment-field" placeholder="Enter a comment here" onChange= { this.onChange } />
                  </FormGroup>
                  <Button>Submit</Button>
                </Form>
                <ul className="mt-2">
                  {comments}
                </ul>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}
const mapStateToProps = state=>({
  posts: state.posts
})
const mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({
    addComment: addComment

  },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Post)
