const Header = (props) => (
  <h2>{props.course}</h2>
);

const Part = (props) => (
  <p>
    {props.part} {props.exercises}
  </p>
);

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => (
        <Part key={part.id} part={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

const CourseTotalExercises = ({ parts }) => {
  const totalExercises = parts.reduce((sum, { exercises }) => sum + exercises, 0);

  return (
    <p>
      <strong>total of {totalExercises} exercises</strong>
    </p>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <CourseTotalExercises parts={course.parts} />
    </div>
  );
};

export default Course;
