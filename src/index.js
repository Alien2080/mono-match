import { styles } from './styles.css'; // Needed to the CSS file gets included by Webpack.

// Webpack-related environment.
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}
