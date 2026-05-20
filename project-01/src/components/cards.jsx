import './cards.css';

function Card(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Email :{props.email}</p>
      <p>Phone: {props.phone}</p>
      <p>City: {props.city}</p>
      <p>Company: {props.company}</p>
    </div>
  );
}

export default Card;