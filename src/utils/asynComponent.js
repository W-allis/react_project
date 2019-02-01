import React, { Component } from 'react'

/*
 * @params 異步加載模塊
 */

export default function asynComponent(importComponent) {
  class AsynComponent extends Component {
    constructor(props) {
      super(props)
    }

    state = {
      component: null
    }

    async componentDidMount() {
      const { default: component } = await importComponent()

      this.setState({ component })
    }

    render() {
      const C = this.state.component

      return C ? <C { ...this.props } /> : null
    }

  }

  return AsynComponent
}