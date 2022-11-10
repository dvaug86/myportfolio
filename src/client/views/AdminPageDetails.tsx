import e from 'express';
import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { IWebsite } from '../utils/interfaces';

const AdminPageDetailsPage: React.FC<AdminPageDetailsPageProps> = (props) => { //learn strongtyping props and come up with an opinion
    const history = useNavigate();
     const {detailid} = useParams();

    const [title, setTitle] = React.useState('');
    const [summary, setSummary] = React.useState('');
    const [assignment, setAssignment] = React.useState('');
    const [websiteLink, setWebSiteLink] = React.useState('');
    const [githubLink, setgithubLink] = React.useState('');

    React.useEffect(() => {
        (async () => {
            const res = await fetch(`/api/summary/${detailid}`);
            const site = await res.json();
            setTitle(site.title);
            setSummary(site.summary);
            setAssignment(site.assignment);
            setWebSiteLink(site.websiteLink);
            setgithubLink(site.githubLink);
        })();
    }, [detailid]);


    const handleEdit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log({ title, summary, assignment, websiteLink, githubLink });
        const res = await fetch(`/api/summary/${detailid}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, summary, assignment, websiteLink, githubLink })
        });
        const portfolioResult = await res.json();
        console.log(portfolioResult);
        history(`/details/${portfolioResult.id}`);
    }





    // const handleEdit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault();
    //     console.log({ title, summary, assignment, websiteLink, githubLink });
    //     const res = await fetch(`api/summary/${detailid}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ title, summary, assignment, websiteLink, githubLink })
    //     });
    //     const portfolioResult = await res.json();
    //     console.log(portfolioResult);
    //     history(`/admin`);
    // }
    
    const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const res = await fetch(`/api/summary/${detailid}`, {
            method: 'DELETE'
        });
        history(`/admin`);
    }

    return (
        <main className="conatiner">
            <section className="row">
                <div className="col-12">
                    <form action="" className="form-group border rounded-lg p-3">
                        <label htmlFor="title">Title</label>
                        <input
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            type="text"
                            className='form-control form-control-lg mb-2'
                            placeholder='Title'
                        />
                        <label htmlFor="summary">Summary</label>
                        <textarea
                            value={summary}
                            onChange={e => setSummary(e.target.value)}
                            rows={10}
                            className='form-control form-control-lg mb-2'
                            placeholder='This is where my summary is going'
                        />
                        <label htmlFor="assignment">Assignment</label>
                        <textarea
                            value={assignment}
                            onChange={e => setAssignment(e.target.value)}
                            rows={20}
                            className='form-control form-control-lg mb-2'
                            placeholder='This is where my assignment is going'
                        />
                        <label htmlFor="websiteLink">Website Link</label>
                        <input
                            value={websiteLink}
                            onChange={e => setWebSiteLink(e.target.value)}
                            type="url"
                            className='form-control form-control-lg mb-2'
                            placeholder='Website Link need http:// to start'
                        />
                        <label htmlFor="githubLink">GitHub Link</label>
                        <input
                            value={githubLink}
                            onChange={e => setgithubLink(e.target.value)}
                            type="url"
                            className='form-control form-control-lg mb-2'
                            placeholder='GitHub Link need http:// to start'
                        />
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <button onClick={handleEdit} className="btn btn-primary btn-lg">Edit</button>
                                <button onClick={handleDelete} className="btn btn-outline-danger btn-lg">Delete</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
};

interface AdminPageDetailsPageProps { }


export default AdminPageDetailsPage;