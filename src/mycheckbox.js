import { Checkbox } from "@mui/material";

import { FavoriteBorder } from "@mui/icons-material";
import { Favorite } from "@mui/icons-material";
function MyCheckBox()
{
    return (<div>
                <Checkbox defaultChecked/>
                <Checkbox icon={<FavoriteBorder/>} 
                  checkedIcon={<Favorite/>}
                />
                <Checkbox disabled />
                <Checkbox disabled checked/>
    </div>)
}
export default MyCheckBox;