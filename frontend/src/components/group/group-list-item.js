import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles';
import { borderRadius } from '@mui/system';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleIcon from '@mui/icons-material/People';

const useStyles = makeStyles( theme => ({
    container: {
       cursor: 'pointer',
       textAlign: 'left',
       border: '2px solid #D3D3D3',
       borderRadius: '1rem',
       padding: '1rem',
       display: 'grid',
       gridTemplateColumns: '5fr auto',
       marginBottom: '1rem'
    },
    name: {
        fontWeight: 600 // or 'bold'
    },
    desc: {
         color: '#505050',
         fontWeight: 500 // or 'bold'
    }
}));

function GroupListItem({group}) {

  const classes = useStyles();

  return (
    <div>
        { group && 
            <Link group={group} to={`/details/${group.id}`} >
                <div className={classes.container}>
                    <p><span className={classes.name}>{group.name}</span>:<span className={classes.desc}> <LocationOnIcon/>{group.description}</span> </p>
                    <h3>
                        <PeopleIcon/> {group.num_members}
                    </h3>
                    <p>{group.description}</p>
                </div>
            </Link>
        }
    </div>
  );
}



export default GroupListItem;
