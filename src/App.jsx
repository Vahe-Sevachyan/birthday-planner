import { peopleList } from "./data";
import PersonBio from "./PersonBio";
const App = () => {
  return (
    <div className="container">
      <h2>People List</h2>
      {peopleList.map((person) => {
        const { name, age, image } = person;
        return <PersonBio img={image} name={name} age={age} />;
      })}
      <button>Clear All</button>
    </div>
  );
};
export default App;
