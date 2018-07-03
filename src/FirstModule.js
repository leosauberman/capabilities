import React, { Component } from 'react';
import Card from './Card';
import FAB from './FAB';
import CardActions from '@material-ui/core';
import CardProfile from './CardProfile';
import CardAbilities from './CardAbilities';


class FirstModule extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    
    render(){
        return(
            <div>
                <Card/>
                <CardProfile/>
                <CardAbilities/>
                <FAB/>
            </div>
        );
    }
}

export default FirstModule;