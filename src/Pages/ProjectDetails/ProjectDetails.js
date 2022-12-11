import React from 'react';
import { useParams } from 'react-router-dom';
import SecondHeader from '../../components/Headers/SecondHeader';

const projects = [
    {
        "id": 1,
        "name": "CAR DEALS",
        "type": "A Car ReSale Website",
        "img": "https://i.ibb.co/tBzXGV4/car.png",
        "img2": "https://i.ibb.co/QnyMk8V/car2.png",
        "img3": "https://i.ibb.co/61B9KQf/car3.png",
        "imgs": [
            "https://i.ibb.co/tBzXGV4/car.png",
            "https://i.ibb.co/QnyMk8V/car2.png",
            "https://i.ibb.co/61B9KQf/car3.png"
        ],
        "liveSite": "https://car-deals-a187b.web.app/",
        "gitClient": "https://github.com/susmoysaha6/car-deals",
        "gitServer": "https://github.com/susmoysaha6/car-deals-server",
        "feature": [
            "Second-hand car resale website to buy and sell a used car",
            "On this website, a user can register as a buyer or seller.",
            "As a buyer, you can order cars by clicking the book now button",
            " The seller can add a car.",
            "A seller can advertise his product by clicking advertise button on Dashboard's my product page. Advertise product will be displayed on the Home page.",
            "Also, a seller can delete his product.",
            "Admin can manage all buyers, all sellers, and the reported product page.",
            "Also, the admin can verify a seller"
        ]
    },
    {
        "id": 2,
        "name": "MOMENTS BY SUSMOY",
        "type": "A Photography Website",
        "img": "https://i.ibb.co/xJpCMjh/photo.png",
        "img2": "https://i.ibb.co/hcLxYGd/sdetails.png",
        "img3": "https://i.ibb.co/Jy7pXd8/mr.png",
        "imgs": [
            "https://i.ibb.co/xJpCMjh/photo.png",
            "https://i.ibb.co/hcLxYGd/sdetails.png",
            "https://i.ibb.co/Jy7pXd8/mr.png"
        ],
        "liveSite": "https://photography-services-acf79.web.app/",
        "gitClient": "https://github.com/susmoysaha6/moments-by-susmoy-client",
        "gitServer": "https://github.com/susmoysaha6/moments-by-susmoy-server",
        "feature": [
            "It is a website of a photographer.",
            "In home section I load 3 services , the api was limit by server side.",
            "There is a Load more button which is redirect to the services route.",
            "In service detail page details of that service and review on that service displayed",
            "User can comment on the service",
            "In my reviews pages displayed all review by a logged in user. It is private route."
        ]
    },
    {
        "id": 3,
        "name": "PROGRAMMING ONLINE",
        "type": "A E-learning Website",
        "img": "https://i.ibb.co/WnxnvdX/el.png",
        "img2": "https://i.ibb.co/crBpF4q/p2.png",
        "img3": "https://i.ibb.co/mSc7y3Z/cd.png",
        "imgs": [
            "https://i.ibb.co/WnxnvdX/el.png",
            "https://i.ibb.co/crBpF4q/p2.png",
            "https://i.ibb.co/mSc7y3Z/cd.png"
        ],
        "liveSite": "https://e-learning-f8aae.web.app/",
        "gitClient": "https://github.com/susmoysaha6/programming-online",
        "gitServer": "https://github.com/susmoysaha6/programming-online-server",
        "feature": [
            "It is a single page application",
            "Courses are filtered by category",
            "One can find the courses by category, click on category on the leftside in courses route",
            "There is a download feature",
            "User can toggle between light and dark mode"
        ]
    }
]
const ProjectDetails = () => {
    const { id } = useParams();

    const project = projects?.find(p => p.id.toString() === id)

    const { name, gitClient, gitServer, liveSite, feature, imgs } = project;


    return (
        <div>
            <SecondHeader />
            <div className='w-11/12 mx-auto mb-10'>

                <h3 className='text-2xl font-semibold text-center my-5'>{name}</h3>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        imgs?.map((img, i) => <img className='h-56 w-full hover:animate-pulse' key={i} src={img} alt="" />)
                    }
                </div>
                <div className='flex flex-col md:flex-row justify-between my-20'>
                    <a target="blank" className='btn btn-outline my-2' href={liveSite}>Live Website </a>
                    <a target="blank" className='btn btn-outline my-2' href={gitClient}>Client Side Link </a>
                    <a target="blank" className='btn btn-outline my-2' href={gitServer}>Server Side Link</a>
                </div>
                <p>Features:</p>
                <ul className='px-20 my-5' style={{ listStyle: 'disc' }}>
                    {
                        feature?.map((f, i) =>
                            <li key={i}>{f}</li>
                        )
                    }
                </ul>
            </div>
        </div>

    );
};

export default ProjectDetails;