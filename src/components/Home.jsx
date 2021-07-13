import { Button, Typography, Box } from '@material-ui/core';
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
        <Button variant="outlined" color="primary" component={Link} to="/calculator">
          <Typography variant = 'h3'>
          Get Started
          </Typography>
        </Button>
    </div>

    );

}

export default Home;

