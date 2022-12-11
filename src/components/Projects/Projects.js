import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
    {
        id: 1,
        name: "CAR DEALS",
        type: 'A Car ReSale Website',
        img: "https://i.ibb.co/tBzXGV4/car.png",
        liveSite: 'https://car-deals-a187b.web.app/',
        gitClient: 'https://github.com/susmoysaha6/car-deals',
        gitServer: 'https://github.com/susmoysaha6/car-deals-server',
        feature: ['A buyer can buy car', 'A seller can sell car', 'Admin has controls over all users']

    },
    {
        id: 2,
        name: "MOMENTS BY SUSMOY",
        type: 'A Photography Website',
        img: "https://i.ibb.co/xJpCMjh/photo.png",
        liveSite: 'https://photography-services-acf79.web.app/',
        gitClient: 'https://github.com/susmoysaha6/moments-by-susmoy-client',
        gitServer: 'https://github.com/susmoysaha6/moments-by-susmoy-server',
        feature: ['A user can see all services', 'User can comment on different sevices', ' Can delete and update own comments']

    },
    {
        id: 3,
        name: "PROGRAMMING ONLINE",
        type: 'A E-learning Website',
        img: "https://i.ibb.co/WnxnvdX/el.png",
        liveSite: 'https://e-learning-f8aae.web.app/',
        gitClient: 'https://github.com/susmoysaha6/programming-online',
        gitServer: 'https://github.com/susmoysaha6/programming-online-server',
        feature: ['Courses are filtered by category', 'There is a download feature', 'User can toggle between light and dark mode']

    }
]

const Projects = () => {
    return (
        <div id='projects' className='my-20 w-11/12 mx-auto'>
            <h1 className='text-center text-3xl font-bold my-10 uppercase'>Projects</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3  gap-4 '>
                {
                    projects.map(project => <div key={project.id} className="card  bg-slate-900 shadow-2xl">
                        <div className='h-1/2' >
                            <figure className='h-48 rounded'><img className='' src={project.img} alt="car!" /></figure>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">{project.name}</h2>
                            <p className='font-semibold'>{project.type}</p>
                            <div className="flex justify-between ">
                                <a className='btn btn-ghost' target="blank" href={project.liveSite}>LIVE</a>
                                <a className='btn btn-ghost' href={project.gitClient} target="blank">CLIENT</a>
                                <a className='btn btn-ghost' href={project.gitServer} target="blank">SERVER</a>
                            </div>
                            <p>Features</p>
                            <ul className='pl-10' style={{ listStyle: 'disc' }}>
                                {
                                    project?.feature?.map((f, i) => <li key={i}>  {f}</li>)
                                }
                            </ul>
                            <Link to={`/project/${project.id}`} className='btn btn-info'>Details</Link>
                        </div>
                    </div>)
                }
            </div>
        </div>

    );
};

export default Projects;