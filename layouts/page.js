import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import {Col, Grid, PageHeader, Row} from 'react-bootstrap';

export default class Page extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <NavBar/>
        <Grid>
          <Row>
            <Col xs={12}>
              <PageHeader>{this.props.title}</PageHeader>
            </Col>
          </Row>
          {this.props.children}
        </Grid>
      </div>
    )
  }

}