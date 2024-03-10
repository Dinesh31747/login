import { Grid ,Paper,Typography} from '@mui/material';
import NavBar from './Navbar';
import { Box } from '@mui/material';
import Player from 'react-player';

function Homepage() {
    const videoUrl = 'https://youtu.be/kPmXyafzfaU'; // Replace with your video URL  
  return (
    <Grid container spacing={2}>
      <NavBar/>
         <Grid item xs={12}>
            <Typography variant="h1" component="div" sx={{ fontWeight: 'bold' }}>
                Stockstalk: Your Stock Market Companion
            </Typography>
        </Grid>
        <Grid item xs={12}>
        <Box sx={{ paddingBottom:"15%",width: '100%', maxWidth: '720px', height:'100%', maxHeight:'720px',margin: 'auto' }}>
          <Player url={videoUrl} width='100%' height='400%' controls />
      </Box>
        </Grid>
        <Grid item xs={12}>
        <Paper sx={{ padding: 2 }}>
          <img style={{paddingLeft:'40%', width:"70%", height:"50%"}}src="https://tse2.mm.bing.net/th?id=OIP.K3eKuWRIerS5d9-dqBegMgHaEv&pid=Api&P=0&h=180" alt="" />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ padding: 2 }}>
        <img style={{width:"100%", height:"100%"}}src="https://www.shutterstock.com/shutterstock/photos/296610581/display_1500/stock-vector-stock-exchange-charts-with-abstract-background-and-diagram-296610581.jpg" alt="" />
          {/* Section 2 content */}
          
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ padding: 2 }}>
          <img style={{width:"100%", height:"100%"}}src="https://www.shutterstock.com/image-vector/isometric-financial-stock-market-concept-260nw-1258619236.jpg" alt="" />
          {/* Section 3 content */}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Homepage;