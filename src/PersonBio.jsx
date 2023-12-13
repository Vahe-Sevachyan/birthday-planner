import "./PersonBio.css";
const PersonBio = ({ img, name, age }) => {
  return (
    <div className="personContainer">
      <img src={img} alt="" className="avatar" />
      <div>
        <span>{name}</span>
        <span>{age}</span>
      </div>
    </div>
  );
};
export default PersonBio;
