import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { Pixabay } from "../services/pixabay";
import HeaderWithCompanyLogo from "../components/HeaderWithCompanyLogo";
import ContentList from '../components/ContentList';

export default function ContentByTopic() {
    const { topic } = useParams();
    const { contentType } = useParams();

    let [contentItems, setContentItems] = useState([]);

    useEffect(() => {
        const pixabayService = new Pixabay();
        
        ( async () => {
            if(contentType === 'videos') {
                setContentItems(await pixabayService.getVideos(topic));
            } else if(contentType === 'images') {
                setContentItems(await pixabayService.getImages(topic));
            }
        })();
    }, [topic, contentType])
    
    return (
        <div className="min-h-full">
            <HeaderWithCompanyLogo title={topic} />
            <main>
                <ContentList contentItems={contentItems} />
            </main>
        </div>
      )
}

