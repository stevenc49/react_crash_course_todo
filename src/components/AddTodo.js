import React, { Component } from 'react'

export class AddTodo extends Component {

    state = {
        title: ''
    }

    // onChange = (e) => this.setState({title: e.target.value});
    onChange = (e) => this.setState({ [e.target.name] : e.target.value});

    render() {
        return (
            <form style={{display:'flex'}}>
                <input 
                    type='text'
                    name='title'
                    style={{flex:'10', padding: '5px'}}
                    placeholder='Add Todo...'
                    value={this.state.value}
                    onChange={this.onChange}
                />

                <input 
                    type='submit'
                    value='submit'
                    className='btn'
                    style={{flex: '1'}}/>
            </form>
        )
    }
}

export default AddTodo
