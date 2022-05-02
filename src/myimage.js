import pic from './images/berry.jpg'
import { Avatar } from '@mui/material'
function MyImage(props)
{
    return (<div>
        <Avatar src={props.pic} />
        
        {/*<Avatar variant="square">ASP</Avatar>*/}</div>)
}
export default MyImage