import people from "./data";

const App = () => {
  return (
    <>
      <h2>Birthday Reminder - Starter</h2>;
      <ul>
        {people.map((person) => {
          <li></li>;
        })}
      </ul>
    </>
  );
};
export default App;
