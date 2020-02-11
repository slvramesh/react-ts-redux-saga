import React from 'react';

import {
    makeStyles,
    Link
} from '@material-ui/core';
// import {
//     MenuItem,
//     Menu
// } from '@material-ui/core';

const useStyles = makeStyles((theme: any) => ({
    menu: theme.palette.menu
}));

const Navigation: React.FC = () => {
    const classes = useStyles();
    return (
        // <Menu open={true}>
        //     <MenuItem>Home</MenuItem>
        //     <MenuItem>Contact</MenuItem>
        //     <MenuItem>Users</MenuItem>
        // </Menu>
        <nav>
            <ul className={classes.menu}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/users">Users</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;