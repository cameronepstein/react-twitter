import React, { Component } from 'react';

export default class UserInfo extends Component {

  constructor (props) {
     super(props)
     this.state = {
       name: ''
     }
   }

   componentDidMount () {

   }

   componentWillReceiveProps = (nextProps) => {
     if (nextProps.user) {
       this.setState({name: nextProps.user.name})
     }
     console.log(nextProps);
   }

   render () {
     return (
       <div>
        <h1>{this.state.name}</h1>
       </div>
     )
   }
};

let styles = {
  container: {
    display: 'flex',
    height: 300,
    widht: '40vw',
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center'
  },
  textContainer: {
    display: 'flex',
    flex: 0.4,
    fontFamily: 'Source Sans Pro',
    fontWeight: 'normal'
  },
  separator: {
    border: 'solid',
    borderWidth: 1,
    width: 40,
    borderColor: '#1FAA74'
  }
}
