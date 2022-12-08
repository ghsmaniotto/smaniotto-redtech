import { useParams } from 'react-router-dom';
import { Pixabay } from "../services/pixabay";
import HeaderWithCompanyLogo from "../components/HeaderWithCompanyLogo";
import ContentPreviewModal from '../components/ContentPreviewModal';

export default function ContentByTopic() {
    const { topic } = useParams();

    const pixabayService = new Pixabay();
    
    let contentItems = pixabayService.getVideos(topic);

    return (
        <div className="min-h-full">
            <HeaderWithCompanyLogo title={topic} />
            <main>
                <div className="mx-auto max-w-2xl px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
                    <ul className="divide-y divide-gray-200">
                        {
                            contentItems.map((contentItem, index) => (
                                <ContentPreviewModal key={`content-item-${index}`} content={contentItem} />
                            ))
                        }
                    </ul>
                </div>
            </main>
        </div>
      )
}

