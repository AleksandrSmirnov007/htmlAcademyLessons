console.log('привет из other.js');
localStorage.setItem('test', 1);

// localStorage.setItem('data', {
//   'данные-1': 123,
//   'данные-2': 222,
//   'данные-3': 333,
// });


localStorage.setItem('data',
  JSON.stringify (
    {
    'данные-1': 123,
    'данные-2': 222,
    'данные-3': 333,
    }
  )
);
