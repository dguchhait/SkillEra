import "./statCards.css";
function StatCards() {
  const statCard = [
    {
      name: `Job Assistance`,
      description: `Program`,
    },
    {
      name: `15 July 2024`,
      description: `Date of Commencement`,
    },
    {
      name: `6 Months`,
      description: `Duration`,
    },
    {
      name: `Live + Recorded`,
      description: `Delivery Mode`,
    },
    {
      name: `English`,
      description: `Language`,
    },
  ];
  return (
    <>
      <div className="info-section">
        <div className="container">
          <div className="row text-center mt-3 mb-3">
            {statCard.map((stat, i) => (
              <div className="col-md-4" key={i}>
                <div className="stats-cards">
                  <h3>{stat.name}</h3>
                  <p>{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default StatCards;
