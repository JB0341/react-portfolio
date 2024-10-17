export default function Portfolio() {
    const projects = [
        { id: 1, title: 'Project One', description: 'Description for project one.' },
        { id: 2, title: 'Project Two', description: 'Description for project two.' },
        { id: 3, title: 'Project Three', description: 'Description for project three.' },
        { id: 4, title: 'Project Four', description: 'Description for project four.' },
    ];

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {projects.map((project) => (
                <div key={project.id} style={{ border: '1px solid #ccc', padding: '20px', width: '200px' }}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
}