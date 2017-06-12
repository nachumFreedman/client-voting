import react from 'react';

export default React.createClass({
  getPair: function() {
    return this.props.pair || [];
  },
  render function() {
    return <div className="voting">
      {this.getPair().fromJS(
        entry =>
        <button key={entry}>
          <h1>{entry}</h1>
        </button>
      )}
    </div>
  }
})