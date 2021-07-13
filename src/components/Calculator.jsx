import { Button, Typography, Box, TextField, Input } from '@material-ui/core';
import React from 'react'


export default class Calculator extends React.Component  {

    constructor(props){
        super(props);
        this.state = {
            weight : '',
            showCalc : false,
            watermelon : '',
            apples : '',
            peaches : ''
        }
        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateInput(event){
        this.setState({weight : event.target.value})
    }
        
        
    handleSubmit(){
        this.setState({showCalc : true})
        console.log('Your input value is: ' + this.state.weight)
        console.log('Your input value is: ' + this.state.showCalc)

        var w = this.state.weight;
        var wa = 0;
        var a = 0;
        while ((w - 20) >= 0) {
            w -= 20;
            wa += 1;
        }

        

        while ((w - 1) >= 0) {
            w -= 1;
            a += 3;
        }

        this.setState({watermelon : wa})
        this.setState({apples : a})

    }

    render () {
        return (
        <div className="App">
            <Typography variant = 'h1'>
                HOW MANY FRUITS?????
            </Typography>
            <Box m = {10}>
                <form noValidate autoComplete="off">
                    <Input id = 'weight' placeholder="Your Weight Here!!!" onChange={this.updateInput} inputProps={{ 'aria-label': 'description' }} />
                </form>
            </Box>
            <Box>
                <Button variant="outlined" color="primary" onClick={this.handleSubmit}>
                    <Typography variant = 'h3'>
                        CALCULATE MY FRUITS
                    </Typography>
                </Button>
            </Box>

        {this.state.showCalc ?
            <Box m = {10}>
                {this.state.watermelon ? 
                    <Typography variant = 'h3'>
                        {this.state.watermelon} Watermelon
                    </Typography> : null
                }
                {this.state.apples ? 
                    <Typography variant = 'h3'>     
                    {this.state.apples} Apples
                    </Typography> : null
                }
            </Box> : null
        }

        </div>
        )
    };
}
