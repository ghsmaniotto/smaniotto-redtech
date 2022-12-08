import { PhotoIcon, VideoCameraIcon } from '@heroicons/react/24/outline'

export default function ContentListItem({content}) {
    function contentIcon(content) {
        return content.isImage() ? 
            <PhotoIcon className="h-full w-full"/> : <VideoCameraIcon className="h-full w-full"/>;
    }

    return (
        <li className="flex p-2 m-2">
            <div className="h-24 w-24 rounded-md border border-gray-200 p-1">
                { contentIcon(content) }
            </div>

            <div className="ml-4 flex flex-1 flex-col justify-center">
                <div>
                    <h2>{content.fileName}</h2>
                    <p className="mt-1 text-sm text-gray-500">{content.resolution}</p>
                    <p className="text-gray-500">Created at: {content.createdAt}</p>
                </div>
            </div>
        </li>
    )
}