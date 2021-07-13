import { Button, Typography, Box, Paper } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import { spacing } from '@material-ui/system';


function Home() {
    return(
    <div className="App">
      <Box m = {10}>
        <Typography variant = 'h1'> 
            How Many Fruits Do I Weigh?
        </Typography>
      </Box>
    <Box m = {10}>
    <Typography variant = 'h4'> 
        Hey. Have you ever looked at a watermelon/coconut/apple and thought 
        <Box m = {5} style={{fontStyle: 'italic'}}>Hey, how many of those can I put into my body?"</Box>
        Then this is the site for you!
    </Typography>
    </Box>
    <Button variant="outlined" color="primary" component={Link} to="/my-app/calculator">
        <Typography variant = 'h3'>
        Get Started
        </Typography>
    </Button>
    </div>

    );

}

export default Home;

