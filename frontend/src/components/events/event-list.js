import React from 'react';
import {DateTime} from 'luxon';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AlarmIcon from '@mui/icons-material/Alarm';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router';


const useStyles = makeStyles( theme => ({
  dateTime: {
    fontSize: '18px',
    marginRight: '3px',
    marginTop: '10px',
    color: theme.colors.mainAccentColor
  },
  memberContainer: {
    display: 'grid',
    gridTemplateColumns: '100px auto'
  }
}));

export default function EventList({events}){

  const classes = useStyles();
  const navigate = useNavigate();

  const openEvent = eventId => {
    navigate(`/event/${eventId}`);
  }

  return (
    <React.Fragment>
    <h3>Events:</h3>
        { events && events.map( event => {
          const format = "yyyy-MM-dd'T'HH:mm:ss'Z'";
          const evtTime = DateTime.fromFormat(event.time, format)

          return <div key={event.id} onClick={()=> openEvent(event.id)}>
            <p>{event.team1} VS {event.team2}
              &nbsp; : &nbsp; 
              <CalendarTodayIcon className={classes.dateTime}/>{evtTime.toSQLDate()} 
              <AlarmIcon className={classes.dateTime}/>{evtTime.toFormat('HH:mm')}
            </p>
          </div>
        })}
      </React.Fragment>
  )
}
