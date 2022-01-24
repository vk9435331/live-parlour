import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../Components/Cards/Card';

const FetchApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await axios('https://reqres.in/api/users');
        setData(result.data);
        console.log(result.data);
        console.log(result.data.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Card title='hello' body='dsa' ImageUrl='' />
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <div>
          {data.data.map((item, i) => (
            <div key={i}>
              <div>{item.first_name}</div>
              <div>{item.last_name}</div>
              <div>
                <img src={item.avatar} alt={item.first_name} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FetchApi;
