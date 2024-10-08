import { useState } from "react";

const Anecdotes = (props) => {
  return (
    <div>
      <div>{props.anecdotes[props.number]}</div>
      <p>{props.vote}</p>
    </div>
  );
};

const Button = (props) => (
  <div>
    <button onClick={props.handleEvent}>{props.text}</button>
  </div>
);

const Best_anecdote = (props) => {
  return (
    <div>
      <p>Anectode with most votes:</p>

      <div>{props.anecdotes[props.number]}</div>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVote] = useState(Array(anecdotes.length).fill(0));

  const ramdon = () => {
    const newSelected = Math.floor(Math.random() * anecdotes.length);
    setSelected(newSelected);
    console.log(newSelected);
  };

  const mostVoted = () => {
    let maxVotes = 0;
    let maxIndex = 0;
    for (let i = 0; i < votes.length; i++) {
      if (votes[i] > maxVotes) {
        maxVotes = votes[i];
        maxIndex = i;
      }
    }
    return maxIndex;
  };

  const vote = () => {
    const newVote = [...votes];
    newVote[selected] += 1;
    setVote(newVote);
  };

  return (
    <div>
      <Button handleEvent={ramdon} text={"Anectdotes"}></Button>
      <Button handleEvent={vote} text={"vote"}></Button>
      <Anecdotes
        anecdotes={anecdotes}
        number={selected}
        vote={votes[selected]}
      ></Anecdotes>
      <Best_anecdote anecdotes={anecdotes} number={mostVoted()}></Best_anecdote>
    </div>
  );
};

export default App;
