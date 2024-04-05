// 👇️ if using ES6 Imports uncomment next line
import {glob} from 'glob';

try {
  const results = await glob('src/**/*.js');

  // [ 'src/file.js', 'src/file-3.js', 'src/file-2.js' ]
  console.log(results);

  results.forEach(file => {
    console.log(file);
  });
} catch (err) {
  console.log(err);
}
