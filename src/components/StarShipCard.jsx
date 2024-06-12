
function StarshipCard({ starship }) {
    return (
      <div className="starship-card">
        <h2>{starship.name}</h2>
        <p><strong>Model:</strong> {starship.model}</p>
      <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
      <p><strong>Cost in Credits:</strong> {starship.cost_in_credits}</p>
      <p><strong>Length:</strong> {starship.length}</p>
      <p><strong>Max Atmosphering Speed:</strong> {starship.max_atmosphering_speed}</p>
      <p><strong>Crew:</strong> {starship.crew}</p>
      <p><strong>Passengers:</strong> {starship.passengers}</p>
      <p><strong>Cargo Capacity:</strong> {starship.cargo_capacity}</p>
      </div>
    );
  }
  
  export default StarshipCard;