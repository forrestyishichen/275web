import React, { Component } from 'react'
import { List , Message } from 'semantic-ui-react';

class Test extends Component {

    render() {

    return (

      <div className='Sarea'>
        <div className='_title'>
          Test
        </div>
         <div className="reminder" >
          <Message
            size='mini'
            >
             <List as='ol'>
                <List.Item as='li'>Enter the address of your solar install.</List.Item>
                <List.Item as='li'>Center your installation location and click next.</List.Item>
              </List>
            </Message>
        </div>
      </div>
      )
    }
  }

export default Test;
