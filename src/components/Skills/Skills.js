import React from 'react';

const skills = [

    {
        id: 1,
        name: "HTML",
        value: "90"
    },
    {
        id: 2,
        name: "CSS",
        value: "90"
    },
    {
        id: 3,
        name: "JavaScript",
        value: "80"
    },
    {
        id: 4,
        name: "React JS",
        value: "80"
    },
    {
        id: 5,
        name: "Express JS",
        value: "60"
    },
    {
        id: 6,
        name: "MongoDB",
        value: "60"
    },
    {
        id: 7,
        name: "Node JS",
        value: "60"
    },
]

const Skills = () => {
    return (
        <div id='skill' className='my-20 w-11/12 mx-auto'>
            <h1 className='text-center text-3xl font-bold my-10 uppercase'>Skills</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    skills.map(skill => <div key={skill.id}>
                        <p>{skill.name}</p>
                        <div className='flex items-center'>
                            <progress className="progress progress-info mr-5" value={skill.value} max="100"></progress>
                            <p>{skill.value}%</p>
                        </div>

                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Skills;