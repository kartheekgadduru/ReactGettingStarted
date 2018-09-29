const Stars = props => {
  return (
    <div className="col-5">
      <i className="fa fa-star"> </i>
      <i className="fa fa-star"> </i>
      <i className="fa fa-star"> </i>
    </div>
  );
};
const Nubmers = props => {
  return (
    <div className="card text-center">
      <div>
        <span>1</span>
        <span className="selected">2</span>
        <span className="used">3</span>
        <span>5</span>
      </div>
    </div>
  );
};
const Button = props => {
  return (
    <div>
      <button className="col-2"> =</button>
    </div>
  );
};
const Answer = props => {
  return <div className="col-5">...</div>;
};
class Game extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Nine Play</h2>
        <div className="row">
          <hr />
          <Stars />
          <Button />
          <Answer />
        </div>
        <br />
        <Numbers />
      </div>
    );
  }
}
class App extends React.Component {
  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}
ReactDOM.render(<App />, mountNode);
