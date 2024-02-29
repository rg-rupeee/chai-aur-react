import { useParams } from 'react-router-dom';

function User() {
  const { userId } = useParams();
  return (
    <div className='bg-gray-600 text-white p-4'>
      User : {JSON.stringify(userId)}
    </div>
  );
}

export default User;
