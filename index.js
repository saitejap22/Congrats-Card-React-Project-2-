const element = (
  <div className="bg-container">
    <h1 className="heading">Congratulations</h1>
    <div class="card">
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <p className="para">
        Vishnu Institute of Computer Education and Technology
      </p>
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
