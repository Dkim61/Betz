import React, {useState, useEffect} from 'react';

function GroupList() {
  const [ groups, setGroups ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);


  useEffect (() => {
    const getData = async () => {
      await fetch('http://127.0.0.1:8000/api/groups/')
      .then(resp => resp.json())
      .then(data => {
        setGroups(data);
        setLoading(false);
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
            return <p key={group.id}>{group.name}</p>
        })}
    </div>
  );
}

export default GroupList;
