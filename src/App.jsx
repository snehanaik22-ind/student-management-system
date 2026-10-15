import "./App.css";

function App() {
  return (
    <div className="container">
      <aside className="sidebar">
        <div className="s1">
          <span className="s1-icon">🎓</span>
          <h2>Student Manager</h2>
        </div>

        <nav className="sidebar-menu">
          <a href="#home" className="menu-item active">
            <span>⌂</span>
            Home
          </a>

          <a href="#add-student" className="menu-item">
            <span>✚</span>
            Add Student
          </a>

          <a href="#students" className="menu-item">
            <span>👥</span>
            Students
          </a>
        </nav>

        
      </aside>

      <main className="main-content" id="home">
        
        <header className="top-navbar">
          <div className="search-box">
            <span className="search-icon"></span>
            <input
              type="text"
              placeholder="Search students..."
            />
          </div>

          <div className="profile-icon">👤</div>
        </header>

       
        <section className="welcome-banner">
          <div className="welcome-text">
            <h1>
              Welcome to
              <br />
              Student Management App
            </h1>

            <p>
              Manage your students easily and efficiently.
            </p>
          </div>

          <div className="welcome-illustration">
            <div className="graduation-cap">🎓</div>
          </div>
        </section>


        <section className="stats-container">
          <div className="stat-card">
            <div className="stat-icon blue">♟</div>
            <p>Total Students</p>
            <h2>4</h2>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">▦</div>
            <p>Courses</p>
            <h2>3</h2>
          </div>

          <div className="stat-card">
            <div className="stat-icon purple">♟</div>
            <p>Active Students</p>
            <h2>4</h2>
          </div>

          <div className="stat-card">
            <div className="stat-icon yellow">▤</div>
            <p>This Month</p>
            <h2>4</h2>
          </div>
        </section>

        <section className="quick-actions">
          <h2>Quick Actions</h2>

          <button
            className="add-student-button"
            onClick={() =>
              alert("Add New Student button clicked!")
            }
          >
            <span className="add-icon">+</span>

            <span className="button-text">
              <strong>Add New Student</strong>
              <small>
                Register a new student to the system
              </small>
            </span>

            <span className="arrow-icon">➜</span>
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;