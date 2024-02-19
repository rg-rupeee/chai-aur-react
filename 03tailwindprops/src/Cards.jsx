function Cards({ title = '', message = '' }) {
  // console.log(props);
  return (
    <>
      <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 m-4'>
        <div className='shrink-0'>
          <img
            className='h-12 w-12'
            src='https://images.pexels.com/photos/17165552/pexels-photo-17165552/free-photo-of-close-up-of-pancakes-with-fruit.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            alt='ChitChat Logo'
          />
        </div>
        <div>
          <div className='text-xl font-medium text-black'>{title}</div>
          <p className='text-slate-500'>{message}</p>
        </div>
      </div>
    </>
  );
}
export default Cards;
