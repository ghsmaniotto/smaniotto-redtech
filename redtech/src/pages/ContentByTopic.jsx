import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Pixabay } from "../services/pixabay";
import HeaderWithCompanyLogo from "../components/HeaderWithCompanyLogo";
import ContentList from '../components/ContentList';

export default function ContentByTopic() {
    const { topic } = useParams();

    let [contentItems, setContentItems] = useState([]);

    useEffect(() => {
        const pixabayService = new Pixabay();
        
        ( async () => {
            setContentItems(await pixabayService.getVideos(topic));
        })();
    }, [topic])
    
    return (
        <div className="min-h-full">
            <HeaderWithCompanyLogo title={topic} />
            <main>
                <ContentList contentItems={contentItems} />
            </main>
        </div>
      )
}

