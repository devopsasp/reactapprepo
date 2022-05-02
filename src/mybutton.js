import Button from '@mui/material/Button'

function MyButton()
{
    return (<div>

        <Button variant="contained" onClick={()=>{

            console.log("Hello Word button clicked! ")
        }}>Login</Button>
         </div>)
}

export default MyButton;