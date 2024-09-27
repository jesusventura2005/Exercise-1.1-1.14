const Header = (props) => <p>{props.name}</p>;

const Content = (props) => (
  <p>
    {props.part} {props.exercise}
  </p>
);

const Total = (props) => {
  const total = props.part1 + props.part2 + props.part3;

  return <div>Number of exercise = {total}</div>;
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header name={course.name}></Header>
      <Content part={course.parts[0].name} exercise={course.parts[0].exercises}></Content>
      <Content part={course.parts[1].name} exercise={course.parts[1].exercises}></Content>
      <Content part={course.parts[2].name} exercise={course.parts[2].exercises}></Content>

      <Total part1={course.parts[0].exercises} part2={course.parts[1].exercises} part3={course.parts[2].exercises}></Total>
    </div>
  );
};

export default App;
