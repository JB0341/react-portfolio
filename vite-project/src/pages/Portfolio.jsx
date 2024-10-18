export default function Portfolio() {
    const projects = [
        {
            id: 1,
            title: 'Readme Master Am I',
            description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            imageUrl: 'https://media.edutopia.org/styles/responsive_2880px_16x9/s3/masters/d7_images/cover_media/barber-169hero-teachtext-twenty20.jpg',
            link: 'https://github.com/JB0341/readme-master-am-i' 
        },
        {
            id: 2,
            title: 'Not a Youtube Rabbit Hole',
            description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            imageUrl: 'https://wallpapercave.com/wp/wp9570604.jpg',
            link: 'https://github.com/JB0341/not-a-youtube-rabbit-hole' 
        },
        {
            id: 3,
            title: 'Disc Golf API',
            description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            imageUrl: 'https://cdn.buttercms.com/dn7G1xxcRXmEJLhVgRmA',
            link: 'https://github.com/ut463/disk-golf-api' 
        },
        {
            id: 4,
            title: 'Law Abiding Tourist',
            description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            imageUrl: 'https://th.bing.com/th/id/OIP.YA-B4tYWI0TfhHGdz1vYJwHaE7?rs=1&pid=ImgDetMain',
            link: 'https://github.com/KG8905/Law-Abiding-Tourist-'
        },
    ];

    return (
        <div className="container mt-5">
            <div className="row">
                {projects.map((project) => (
                    <div key={project.id} className="col-md-6 mb-4">
                        <div className="card h-100">
                            <img src={project.imageUrl} className="card-img-top" alt={project.title} />
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                                <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
