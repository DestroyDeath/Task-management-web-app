import { useState, useEffect } from 'react';

function App() {
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState('');
  const [budget, setBudget] = useState('');

  // Tumhare Java Spring Boot server ka address
  const API_URL =  "https://project-tracker-backend-w81g.onrender.com/api/projects"

  // 1. Page load hote hi Java Backend se saare projects mangwana
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error("Error fetching projects:", err));
  };

  // 2. Naya project Java Backend par bhejna
  const handleAddProject = (e) => {
    e.preventDefault();
    if (!projectName || !budget) return;

    const newProject = { name: projectName, budget: Number(budget) };

    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProject)
    })
    .then(() => {
      fetchProjects(); // List update karne ke liye wapas fetch karo
      setProjectName('');
      setBudget('');
    });
  };

  // 3. Java Backend se project delete karna
  const handleDelete = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    })
    .then(() => fetchProjects());
  };

  // Total amount calculate karna
  const totalBudget = projects.reduce((sum, proj) => sum + proj.budget, 0);

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial', maxWidth: '600px', margin: 'auto' }}>
      <h2>👨‍💻 My Upwork Project Tracker (React + Java)</h2>

      <form onSubmit={handleAddProject} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          style={{ padding: '8px', flex: 1 }}
        />
        <input
          type="number"
          placeholder="Budget ($)"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          style={{ padding: '8px', width: '120px' }}
        />
        <button type="submit" style={{ padding: '8px 15px', background: '#007bff', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>
          Add Project
        </button>
      </form>

      <div style={{ background: '#e9ecef', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}>
        <h3 style={{ margin: 0, color: '#333' }}>Total Expected Earnings: <span style={{ color: '#28a745' }}>${totalBudget}</span></h3>
      </div>

      <div>
        <h3>Your Current Projects:</h3>
        {projects.length === 0 ? <p style={{ color: 'gray' }}>Abhi tak koi project add nahi kiya hai.</p> : null}
        
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {projects.map((proj) => (
            <li key={proj.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #ddd', margin: '10px 0', padding: '15px', borderRadius: '5px', background: '#f9f9f9' }}>
              <div>
                <strong>{proj.name}</strong> 
                <br />
                <span style={{ color: 'green' }}>Budget: ${proj.budget}</span>
              </div>
              <button 
                onClick={() => handleDelete(proj.id)} 
                style={{ padding: '5px 10px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;