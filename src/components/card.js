const Card = props => {
  return (
    <div style={{ margin: "1em" }}>
      <img width="80" src={props.avatar_url} alt="kartheek" />
      <div style={{ display: "inline-block", marginLeft: 10 }}>
        <div style={{ fortSize: "1.5em", fontWeight: "bold" }}>
          {props.name}
        </div>
        <div> {props.company}</div>
      </div>
    </div>
  );
};

const CardList = props => {
  return (
    <div>
      <Card
        name="Tom Preston-Werner"
        avatar_url="https://avatars0.githubusercontent.com/u/1?v=4"
        company="null"
      />
      <Card />
    </div>
  );
};

ReactDOM.render(<CardList />, mountNode);
