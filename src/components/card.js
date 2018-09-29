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
      {props.cards.map(card => (
        <Card {...card} />
      ))}
    </div>
  );
};

class Form extends React.Component {
  state = { userName: "" };
  handleSumbit = event => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${this.state.userName}`).then(
      response => {
        console.log(response);
        this.props.onSubmit(response.data);
      }
    );
    console.log("event : Form Submit :", this.state.userName);
  };
  render() {
    return (
      <form onSubmit={this.handleSumbit}>
        <input
          value={this.state.userName}
          type="text"
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="Git hub User"
        />
        <button> Add</button>
      </form>
    );
  }
}
class App extends React.Component {
  state = {
    cards: [
      {
        name: "Tom Preston-Werner",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        company: "null"
      },
      {
        name: "Chris Wanstrath",
        avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
        company: "@github "
      }
    ]
  };
  addNewCard = cardInfo => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
