import { useState } from 'react';

function App() {
  // Yeh state humare projects ko list mein store karegi
  const [projects, setProjects] = useState([]);
  
  // Yeh states input fields ke data ko handle karengi
  const [projectName, setProjectName] = useState('');
  const [budget, setBudget] = useState('');

  // Jab user 'Add Project' button dabayega, tab yeh function chalega
  const handleAddProject = (e) => {
    e.preventDefault(); // Page ko refresh hone se rokne ke liye
    if (!projectName || !budget) return; // Agar field khali hai toh kuch mat karo

    const newProject = {
      id: Date.now(), // Har project ke liye ek unique ID
      name: projectName,
      budget: budget
    };

    // Puraane projects ke sath naya project list mein jod do
    setProjects([...projects, newProject]);
    
    // Input fields ko wapas khali kar do
    setProjectName('');
    setBudget('');
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial', maxWidth: '600px', margin: 'auto' }}>
      <h2>👨‍💻 Freelance Project Tracker</h2>

      {/* Form Jisme Client aur Project ki details aayengi */}
      <form onSubmit={handleAddProject} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Project Name (e.g., E-commerce UI)"
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
        <button type="submit" style={{ padding: '8px 15px', background: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>
          Add Project
        </button>
      </form>

      {/* Projects ki List yahan dikhegi */}
      <div>
        <h3>Your Current Projects:</h3>
        {projects.length === 0 ? <p style={{ color: 'gray' }}>Abhi tak koi project add nahi kiya hai.</p> : null}
        
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {projects.map((proj) => (
            <li key={proj.id} style={{ border: '1px solid #ddd', margin: '10px 0', padding: '15px', borderRadius: '5px', background: '#f9f9f9' }}>
              <strong>{proj.name}</strong> 
              <br />
              <span style={{ color: 'green' }}>Budget: ${proj.budget}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;