import React, { Component } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { FcDataRecovery } from "react-icons/fc";

export default class TodoInput extends Component {
  render() {
    return (
      <div>
        <InputGroup className='mb-3'>
          <FcDataRecovery className='icon' />
          <FormControl
            className='inputOne'
            placeholder='Add a Todo Item'
            aria-label='Username'
            aria-describedby='basic-addon1'
          />
        </InputGroup>

        <Button variant='info' size='lg' block>
          Add Item
        </Button>
      </div>
    );
  }
}
