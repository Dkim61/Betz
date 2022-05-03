import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import { getGroups } from '../services/api-calls'

function GroupList() {
  const [ groups, setGroups ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);


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

  return (
    <div>
        {/* need the && because there can be no groups */}
        {groups && groups.map(group => {
            return <Link key={group.id} to={`/details/${group.id}`}>
                <p>{group.name}: {group.description}</p>
              </Link>
        })}
    </div>
  );
}

export default GroupList;
