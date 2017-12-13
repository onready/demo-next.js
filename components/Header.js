import React from 'react'
import Head from 'next/head'

export default class Header extends React.Component {

  render() {
    return (
      <Head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta charSet="utf-8"/>
      </Head>
    )
  }

}