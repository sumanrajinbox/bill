import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
const useStyle = makeStyles({
    root: {
        background: ' red solid',
        border: 2,
    },
});

function AllData() {
    const classes = useStyle();
    return (
        <div className={ classes.root}>
            <table>
                <th>
                    <td>Sn.</td>
                    <td>Name</td>
                    <td>username</td>
                    <td>Password</td>
                    <td>Action</td>
                </th>
                <tr>
                    <td>1</td>
                    <td>suman raj</td>
                    <td>usersuman</td>
                    <td>passpass</td>
                    <td>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<DeleteIcon />}
                        >
                            Delete
                        </Button>
                        <Button variant="contained" color="secondary">
                            Secondary
                        </Button>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default AllData
