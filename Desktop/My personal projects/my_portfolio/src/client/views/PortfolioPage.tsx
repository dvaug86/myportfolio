import * as React from 'react';
import PreviewCard from '../components/PreviewCard';
import { IWebsite } from '../utils/interfaces';

const PortfolioPage: React.FC<PortfolioPageProps> = (props) => { //learn strongtyping props and come up with an opinion
    const [sites, setSites] = React.useState<IWebsite[]>([]);

    React.useEffect(() => {
        (async () => {
            const res = await fetch('/api/summary');
            const sites = await res.json();
            setSites(sites);
        })();
    }, []);

    return (
        <main className="conatiner">
            <section className="row">
                {sites.map(site => (
                    <PreviewCard key={`site-preview-${site.id}`} site={site} />  //site 1 is from IWebsite on preview card, site 2 is from map at the beginning of this arrow
                ))}
            </section>
        </main>
    );
};

interface PortfolioPageProps { }


export default PortfolioPage;