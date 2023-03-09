import ReactDOM from 'react-dom';
import Web from './routes/web';

const { slice } = require('lodash');
require('./bootstrap');

const App = () => {
    return <Web/> 
}

export default App;
if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
