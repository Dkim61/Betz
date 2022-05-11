import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import { getGroups } from '../services/api-calls'
import GroupListItem from './group-list-item';
import { useNavigate } from 'react-router';

function GroupList() {
  const [ groups, setGroups ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);
  const navigate = useNavigate();


  useEffect (() => {
    setLoading(false);
    const getData = async () => {
      await getGroups()
      .then( data => {
        setLoading(false);
        setGroups(data);
      }).catch( e => {
        setError(true);
        setLoading(false);
      })
    }
    getData();
  }, [])

  if (error) return <h1>Error</h1>
  if (loading) return <h1>Loading</h1>

  const groupClicked = groupId => {
    console.log("HELLO")
    // navigate(`details/${groupId}`);
  }


  return (
    <div>
        {/* need the && because there can be no groups */}
        {groups && groups.map(group => {
            return <GroupListItem key={group.id} group={group} />
        })}
    </div>
  );
}

export default GroupList;
