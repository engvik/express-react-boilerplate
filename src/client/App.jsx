require('./stylesheets/main.scss');

const React = require('react');

class App extends React.Component {
    render() {
        return <h1>It works!</h1>
    }
}

if (typeof window !== 'undefined') {
    window.React = React;
}

React.render(
    <App />,
    document.getElementById('app')
);

module.exports = App;
