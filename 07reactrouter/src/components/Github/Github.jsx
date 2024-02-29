import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch('https://api.github.com/users/rg-rupeee')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  const data = useLoaderData();

  return (
    <div className='text-center m-4 bg-gray-600 text-white'>
      Github followers: {data?.followers}
      <img src={data?.avatar_url} alt='' />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/rg-rupeee');
  return response.json();
};
