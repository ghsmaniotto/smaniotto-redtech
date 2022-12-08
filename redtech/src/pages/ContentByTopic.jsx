import { useParams } from 'react-router-dom';
import { Pixabay } from "../services/pixabay";
import HeaderWithCompanyLogo from "../components/HeaderWithCompanyLogo";
import ContentListItem from "../components/ContentListItem";

export default function ContentByTopic() {
    const { topic } = useParams();

    const pixabayService = new Pixabay();
    
    let contentItems = pixabayService.getImages(topic)

    return (
        <div className="min-h-full">
            <HeaderWithCompanyLogo title={topic} />
            <div className="flow-root">
                <ul className="divide-y divide-gray-200">
                    {contentItems.map((content, index) => (
                        <ContentListItem content={content} index={index} />
                    ))}
                </ul>
            </div>
        </div>
      )
}

