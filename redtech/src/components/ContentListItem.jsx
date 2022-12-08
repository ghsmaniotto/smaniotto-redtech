import { PhotoIcon, VideoCameraIcon } from '@heroicons/react/24/outline'

export default function ContentListItem({content, index}) {
    function contentIcon(type) {
        return type === "image" ? 
            <PhotoIcon className="h-full w-full"/> : <VideoCameraIcon className="h-full w-full"/>;
    }
    
    return (
        <li key={`${content.file_name}_${index}`} className="flex p-2 m-2">
            <div className="h-24 w-24 rounded-md border border-gray-200 p-1">
                { contentIcon(content.type) }
            </div>

            <div className="ml-4 flex flex-1 flex-col justify-center">
                <div>
                    <h3>{content.file_name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{content.resolution}</p>
                    <p className="text-gray-500">Created at: {content.created_at}</p>
                </div>
            </div>
        </li>
    )
}