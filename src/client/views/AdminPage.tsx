import * as React from 'react';
import PreviewCard from '../components/PreviewCard';
import { IWebsite } from '../utils/interfaces';
import { Link, useParams } from 'react-router-dom';
import AdminPreviewCard from '../components/AdminPreviewCard';

const AdminPage: React.FC<AdminPageProps> = (props) => { //learn strongtyping props and come up with an opinion
    const [sites, setSites] = React.useState<IWebsite[]>([]);
    const [sites2, setSites2] = React.useState<IWebsite | null>(null);
    const detailid = useParams();


    React.useEffect(() => {
        (async () => {
            const res = await fetch('/api/summary');
            const sites = await res.json();
            setSites(sites);
        })();
    }, []);

    return (
        <main className="conatiner">
            <div className="adminButtons">
            <Link className="btn btn-sm btn-primary" to={`/Compose`}>Compose</Link>
            </div>
            <section className="row">
                {sites.map(site => (
                    <AdminPreviewCard key={`admin-site-preview-${site.id}`} site={site} />  //site 1 is from IWebsite on preview card, site 2 is from map at the beginning of this arrow
                ))}
            </section>
            
        </main>
    );
};

interface AdminPageProps { }


export default AdminPage;