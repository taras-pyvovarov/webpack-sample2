import moment from 'moment';
import styles from './app.scss';

let rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log('Hello from app.js');
console.log('Current date: ' + rightNow);