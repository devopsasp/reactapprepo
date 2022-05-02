
import Card from '@mui/material/Card'
import { CardContent, Typography } from '@mui/material'
import { CardActions } from '@mui/material'
import { Button } from '@mui/material'

function AboutUs()
{
    return (<div><Card sx={{width:300}}>
           <CardContent>
            <Typography>
                About The Developer
            </Typography>
             <CardActions>
                 <Button variant="contained">Click to see details</Button>
             </CardActions>

           </CardContent>
        </Card></div>)
}

export default AboutUs