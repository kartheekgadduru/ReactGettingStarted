const Card = props => {
  return (
    <div style={{ margin: "1em" }}>
      <img
        width="80"
        src="https://avatars0.githubusercontent.com/u/1?v=4"
        alt="kartheek"
      />
      <div style={{ display: "inline-block", marginLeft: 10 }}>
        <div style={{ fortSize: "1.5em", fontWeight: "bold" }}>
          {" "}
          Name of the employee...
        </div>
        <div> Company Name ...</div>
      </div>
    </div>
  );
};

const CardList = props => {
  return (
    <div>
      <Card />
    </div>
  );
};

ReactDOM.render(<CardList />, mountNode);
