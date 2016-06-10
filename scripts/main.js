/** @jsx React.DOM */

var Timer = React.createClass({
  getInitialState: function() {
    return {
      seconds: 0
    }
  },

  componentDidMount: function() {
    setInterval(this.tick, 1000)
  },

  tick: function() {
    this.setState({ seconds: this.state.seconds + 1 })
  },

  render: function() {
    return (
      <h4>Уже прошло: {this.state.seconds}</h4>
    )
  }
});

ReactDOM.render(
  <Timer />,
  document.getElementById('example')
);
