import React from 'react';
import Page from '../layouts/page';
import fetch from 'isomorphic-unfetch';
import {Button, Col, Form, FormControl, FormGroup, Row} from 'react-bootstrap';
import {ScaleLoader} from 'react-spinners';
import JokePanel from '../components/JokePanel';

export default class Search extends React.Component {

  constructor() {
    super();
    this.state = {
      searchResult: null,
      showSpinner: false
    }
  }

  searchJoke = async (event) => {
    event.preventDefault();
    this.setState({
      searchResult: null,
      showSpinner: true
    });
    const response = await fetch(`http://api.icndb.com/jokes/${event.target.id.value}`);
    const json = await response.json();
    const searchResult = json.value.id ? json.value : null;
    this.setState({
      searchResult: searchResult,
      showSpinner: false
    });
  };

  render() {
    return (
      <Page title='Search'>
        <Row>
          <Col xs={12}>
            <Form inline onSubmit={this.searchJoke}>
              <FormGroup>
                <FormControl type="text" placeholder="Search joke by id" id="id"/>
              </FormGroup>
              <Button type='submit' bsStyle="info" style={{margin: '0% 0.5%'}}>Search</Button>
              <FormGroup>
                <ScaleLoader loading={this.state.showSpinner}/>
              </FormGroup>
            </Form>
          </Col>
        </Row>
        {
          this.state.searchResult ?
            <Row>
              <Col xs={12}>
                <JokePanel joke={this.state.searchResult}/>
              </Col>
            </Row> : null
        }
      </Page>
    )
  }
}