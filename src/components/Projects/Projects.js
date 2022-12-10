import React from 'react';

const projects = [
    {
        id: 1,
        name: "CAR DEALS",
        type: 'A Car ReSale Website',
        img: "https://i.ibb.co/tBzXGV4/car.png",
        liveSite: 'https://car-deals-a187b.web.app/',
        gitClient: 'https://github.com/susmoysaha6/car-deals',
        gitServer: 'https://github.com/susmoysaha6/car-deals-server'

    },
    {
        id: 2,
        name: "MOMENTS BY SUSMOY",
        type: 'A Photography Website',
        img: "https://i.ibb.co/xJpCMjh/photo.png",
        liveSite: 'https://photography-services-acf79.web.app/',
        gitClient: 'https://github.com/susmoysaha6/moments-by-susmoy-client',
        gitServer: 'https://github.com/susmoysaha6/moments-by-susmoy-server'

    },
    {
        id: 3,
        name: "PROGRAMMING ONLINE",
        type: 'A E-learning Website',
        img: "https://i.ibb.co/WnxnvdX/el.png",
        liveSite: 'https://e-learning-f8aae.web.app/',
        gitClient: 'https://github.com/susmoysaha6/programming-online',
        gitServer: 'https://github.com/susmoysaha6/programming-online-server'

    }
]

const Projects = () => {
    return (
        <div id='projects' className='my-20'>
            <h1 className='text-center text-3xl font-bold my-10 uppercase'>Projects</h1>
            <div className='grid lg:grid-cols-3  gap-4 '>
                {
                    projects.map(project => <div key={project.id} className="card border-1 bg-slate-900 shadow-xl">
                        <figure><img src={project.img} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{project.name}</h2>
                            <p>{project.type}</p>

                            <div className="flex justify-between ">
                                <a className='btn btn-ghost' target="blank" href={project.liveSite}>LIVE</a>
                                <a className='btn btn-ghost' href={project.gitClient} target="blank">CLIENT</a>
                                <a className='btn btn-ghost' href={project.gitServer} target="blank">SERVER</a>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>

    );
};

export default Projects;