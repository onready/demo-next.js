import React from 'react';
import Page from '../layouts/page'
import fetch from 'isomorphic-unfetch';
import {Col, Row} from 'react-bootstrap';
import JokePanel from '../components/JokePanel';
import InfiniteScroll from 'react-infinite-scroller';
import ScrollToTop from 'react-scroll-up';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      jokes: props.jokes
    };
  }

  static getInitialProps = async () => {
    const jokes = await Home.getJokes();
    return {
      jokes: jokes
    }
  };

  static getJokes = async () => {
    const response = await fetch('http://api.icndb.com/jokes/random/10');
    const json = await response.json();
    return json.value;
  };

  loadMoreJokes = async () => {
    const jokes = await Home.getJokes();
    this.setState({
      jokes: this.state.jokes.concat(jokes)
    });
  };

  render() {
    return (
      <Page title='Jokes'>
        <ScrollToTop showUnder={160} style={{zIndex: '999'}}>
          <img src='/static/img/up_arrow.png'/>
        </ScrollToTop>
        <InfiniteScroll
          loadMore={this.loadMoreJokes.bind(this)}
          hasMore={true}
        >
          {
            this.state.jokes
              .map((joke, index) => {
                return (
                  <Row key={index}>
                    <Col xs={12}>
                      <JokePanel joke={joke}/>
                    </Col>
                  </Row>
                )
              })
          }
        </InfiniteScroll>
      </Page>
    )
  }

}