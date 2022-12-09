import ContentPreviewModal from "./ContentPreviewModal";

export default function ContentList({contentItems}) {
    return (
        <div className="mx-auto max-w-2xl px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
            <ul className="divide-y divide-gray-200">
                {
                    contentItems.map((item, index) => (
                        <ContentPreviewModal key={`content-item-${index}`} content={item} />
                    ))
                }
            </ul>
        </div>
    );
}