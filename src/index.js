/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
import { styles } from './styles.css'; // Needed to the CSS file gets included by Webpack.
import { DOMController } from './assets/code/domController';

// Webpack-related environment.
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

// Initial deck grid size
const gridSize = 7;

// Initialize DOM controller
const domController = new DOMController('content');

domController.render(gridSize);