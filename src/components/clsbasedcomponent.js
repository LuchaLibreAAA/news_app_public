import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class clsbasedcomponent extends Component {
  name='John Cena'
  
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
         <div>

        Tis my class based component , WASSUP {this.name}
      </div>
      </div>
    )
  }
}
