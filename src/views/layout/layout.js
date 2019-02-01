/* eslint-disable */

// Disables all rules for the rest of the file 

import React, { Component } from 'react'
import { Menu } from 'element-react'
import pages from '../'
import './layout.css'
// import ReactDom from 'react-dom'

class Layout extends Component {

  state = {
    list: [
      {
        name: 'wallis',
        children: [
          {
            name: 'such'
          }
        ]
      },
      {
        name: 'solo'
      },
      {
        name: 'diedie'
      }
    ]
  }

  generateMenu(arr) {
    // return (<Menu></Menu>)
    return arr.map((component, index) => {
      if (!component.children || component.children.length < 1) {
        return (<Menu.Item index={component.name + index}>
          {component.name}
        </Menu.Item>)
      } else {
        return (<Menu.SubMenu title={component.name} index={'sub' + component.name + index}>
            {
              component.children.map((childComponent, childIndex) => {
                if (!childComponent.children || childComponent.children.length < 1) {
                  return (<Menu.Item index={childComponent.name + index + childIndex}>
                    {childComponent.name}
                  </Menu.Item>)
                } else {
                  return (<Menu.SubMenu title={childComponent.name} index={'sub' + childComponent.name + childIndex + index}>
                    { this.generateMenu(childComponent.children) }
                  </Menu.SubMenu>)
                }
              })
            }
        </Menu.SubMenu>)
      }
    })
  }

  render() {
    return (
      <Menu className='el-menu-react' theme='dark'>
        {
          this.generateMenu(pages.layout.index.children)
        }
      </Menu>
    )
  }
}

export default Layout