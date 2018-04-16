import React, {Component} from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import {addPost} from '../actions/index.js'

class AddPostForm extends Component {
  state = {
    title: '',
    body: '',
    author : '',
    img_url: ''
  }
  onSubmit = (e) =>{
    e.preventDefault();
    let {title,body,author, img_url} = this.state
    let postData = {
      title,
      body,
      author,
      img_url,
      incart : false,
      votes : 1,
      id: 30,
      createdAt : '12/20/1997',
      comments : []
    }
    console.log("Submitting : Post ", postData)
    this.props.addPost(postData);
  }
  onChange = (e)=>{
    let input = e.target.value;
    let label = e.target.name;
    let newState = this.state;
    newState[label] = input;
    console.log('target:',input, ' label:', label);
    this.setState({newState})
    console.log( label , '  ' ,this.state[label])
  }
  render() {
    return (
      <Row>
        <Col sm="10">
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for="title-field">Title</Label>
              <Input type="text" name="title" id="title-field" onChange={this.onChange}/>
            </FormGroup>
            <FormGroup>
              <Label for="body-field">Body</Label>
              <Input type="text" name="body" id="body-field" onChange={this.onChange}/>
            </FormGroup>
            <FormGroup>
              <Label for="author-field">Author</Label>
              <Input type="text" name="author" id="author-field" onChange={this.onChange}/>
            </FormGroup>
            <FormGroup>
              <Label for="image-field">Image URL</Label>
              <Input type="text" name="img_url" id="image-field" onChange={this.onChange}/>
            </FormGroup>
            <Button type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    )
  }
}
const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({
    addPost : addPost
  },dispatch)
}
export default connect(null,mapDispatchToProps)(AddPostForm)
