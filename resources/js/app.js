import ReactDOM from "react-dom";
import Web from "./routes/web";
import { Provider } from "react-redux";
import store from "./store";
import Nav from "./components/main/nav";

const { slice } = require("lodash");
require("./bootstrap");

const App = () => {
    return (
        <Provider store={store}>
            <Web />
        </Provider>
    );
};

export default App;
if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
