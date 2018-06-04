import React, { Component } from 'react';
import Card from './Card';
import FAB from './FAB';
import CardActions from '@material-ui/core';

class FirstModule extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    
    render(){
        return(
            <div>
                <Card/>
                <FAB/>
            </div>
        );
    }
}

export default FirstModule;