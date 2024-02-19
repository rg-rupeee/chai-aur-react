import { useState } from 'react';

function App() {
  const colors = [
    'black',
    'red',
    'blue',
    'green',
    'orange',
    'purple',
    'pink',
    'olive',
    'grey',
  ];

  const [color, setColor] = useState(colors[0]);

  return (
    <div
      className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}
    >
      <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          {colors.map((color) => {
            return (
              <button
                className='outline-none px-4 py-1 rounded-full text-white shadow-3xl'
                style={{ backgroundColor: color }}
                onClick={() => setColor(color)}
                key={color}
              >
                {color.toUpperCase()}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
