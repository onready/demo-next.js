import React from 'react';
import Link from 'next/link'

export default class MenuItemWithLink extends React.Component {

  render() {
    return (
      <li role="presentation">
        <Link href={this.props.href} prefetch>
          <a>{this.props.children}</a>
        </Link>
      </li>
    )
  }

}