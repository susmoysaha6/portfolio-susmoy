import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigation, useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { id } = useParams();
    const projects = useLoaderData();
    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <p>Loading</p>
    }
    const project = projects?.find(p => p.id.toString() === id)

    const { name, gitClient, gitServer, liveSite, feature, imgs } = project;


    return (
        <div className='w-11/12 mx-auto'>
            <h3>{name}</h3>
            <div className='grid grid-cols-3 gap-5'>
                {
                    imgs?.map((img, i) => <img className='h-56' key={i} src={img} alt="" />)
                }
            </div>
            <div className='flex justify-between my-20'>
                <a target="blank" href={liveSite}>Live Website </a>
                <a target="blank" href={gitClient}>Client Side Link </a>
                <a target="blank" href={gitServer}>Server Side Link</a>
            </div>
        </div>
    );
};

export default ProjectDetails;