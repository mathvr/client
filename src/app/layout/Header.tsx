import {AppBar, Box, List, ListItem, Toolbar, Typography} from "@mui/material";
import { color } from "@mui/system";
import { NavLink } from "react-router-dom";

const midLinks = [
    {title: 'ingredient', path: '/ingredient'},
    {title: 'about', path: '/about'},
]
const rightLinks = [
    {title: 'search', path: '/searchRecipe'},
    {title: 'add', path: '/addRecipe'}
]
const navStyles = {
    color:'inherit',
     typography: 'h6',
      '&:hover':{color:'grey.500'},
      '&.active':{color:'gray'}, 
      textDecoration:'none',
}


export default function Header(){
    return(
        <AppBar position = 'static' color='primary' >
            <Toolbar sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <Box display='flex' alignItems='center'>
                    <Typography sx={navStyles}>RECIPE APP</Typography>
                </Box>
                <Box>
                    <List sx={{display:'flex'}}>
                        <ListItem sx={navStyles}>Recipe:</ListItem>
                        {rightLinks.map(({title, path}) =>(
                            <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                                {title}
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box display='flex' alignItems='center'>
                    <List sx={{display:'flex'}}>
                        {midLinks.map(({title, path}) =>(
                            <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                                {title}
                            </ListItem>
                        ))}
                    </List>
                </Box>
                
            </Toolbar>
        </AppBar>
    )
}

