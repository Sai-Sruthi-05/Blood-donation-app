import './App.css';

function App() {
  return (
    <div className="App">
      <h1>🩸 My Blood Donation History</h1>

      {/* 🏅 Karma Points */}
      <div className="karma-section">
        <h2>Karma Points: 450</h2>
        <div className="badges">
          <span className="badge gold">Gold Donor</span>
          <span className="badge silver">5 Donations</span>
          <span className="badge bronze">Verified</span>
        </div>
      </div>

      {/* 📋 Donation History */}
      <div className="history-section">
        <h2>Past Donations</h2>
        <ul className="history-list">
          <li>🗓️ 12 May 2025 – A+ blood at Apollo Hospital, Hyderabad</li>
          <li>🗓️ 05 Jan 2025 – A+ blood at Red Cross, Vijayawada</li>
          <li>🗓️ 23 Oct 2024 – A+ blood at Government Hospital, Guntur</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
