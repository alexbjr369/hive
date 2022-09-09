const replace = require('replace-in-file');

const options = {
  files: ['dist/hive.css', 'dist/hive.layout.css'],
  from: /.workaround,/g,
  to: '',
};

replace(options)
  .then((results) => {
    console.log('Replacement results:', results);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });
