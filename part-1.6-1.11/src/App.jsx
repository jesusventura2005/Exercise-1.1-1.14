import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.name}</button>;
};

const Total = (prop) => {
  if (prop.value <= 0) {
    return <div>No feedback given</div>;
  } else {
    return (
      <div>
        <table>
          <tr>
            <td>Good</td>
            <td> {prop.good}</td>
          </tr>

          <tr>
            <td>Neutral</td>
            <td>{prop.neutral}</td>
          </tr>

          <tr>
            <td>Bad</td>
            <td>{prop.bad}</td>
          </tr>

          <tr>
            <td>All</td>
            <td>{prop.value}</td>
          </tr>

          <tr>
            <td>Average</td>
            <td>{prop.average}</td>
          </tr>

          <tr>
            <td>Positive</td>
            <td>{prop.positive}%</td>
          </tr>

        </table>
      </div>
    );
  }
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleClickgood = () => {
    const newGood = good + 1;
    const newTotal = total + 1;
    setGood(newGood);
    setTotal(newTotal);
    setAverage((newGood - bad) / newTotal);
    setPositive((newGood / newTotal) * 100);
  };

  const handleClickneutral = () => {
    const newneutral = neutral + 1;
    const newTotal = total + 1;
    setNeutral(newneutral);
    setTotal(newTotal);
    setPositive((good / newTotal) * 100);
  };

  const handleClickbad = () => {
    const newBad = bad + 1;
    const newTotal = total + 1;
    setBad(newBad);
    setTotal(newTotal);
    setAverage((good - newBad) / newTotal);
    setPositive((good / newTotal) * 100);
  };

  return (
    <div>
      <p>Give feedback</p>
      <Button name={"good"} handleClick={handleClickgood}></Button>
      <Button name={"neutral"} handleClick={handleClickneutral}></Button>
      <Button name={"bad"} handleClick={handleClickbad}></Button>

      <p>Stadistics</p>

      <Total
        value={total}
        average={average}
        positive={positive}
        good={good}
        neutral={neutral}
        bad={bad}
      ></Total>
    </div>
  );
};

export default App;