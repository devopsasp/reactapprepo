import Card from '@mui/material/Card'
import { CardContent, Typography } from '@mui/material'
import { CardActions } from '@mui/material'
import { Button } from '@mui/material'


function ContactUs()
{
    return (<div>
                  <Card sx={{width:300}}>
                      <CardContent>
                          Contact Details
                             <Typography>
                                 23 old baker street!!!
                             </Typography>
                      </CardContent>
                       <CardActions>
                           <Button variant="contained">Send a mail</Button>
                       </CardActions>
                  </Card>
         
    </div>)
}
export default ContactUs