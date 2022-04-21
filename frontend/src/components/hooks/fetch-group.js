import {useState, useEffect} from 'react';
import { getGroup } from '../services/api-calls'


export function useFetchGroup(groupId){
  const [ group, setGroup ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);
  
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await getGroup(groupId);
      setGroup(data);
      setLoading(false);
    }
    getData();
  }, [groupId]);

  return [group, loading, error]
}