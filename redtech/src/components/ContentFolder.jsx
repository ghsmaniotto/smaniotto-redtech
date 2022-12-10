
export default function ContentFolder({topic}){
    return (
        <div className="mx-auto border-2 border-black rounded-lg p-4 text-center">
            <div className="mb-4">
                <p className="text-lg text-gray-700">{topic}</p>
            </div>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                    <a
                        href={`/content/images/${topic}`}
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-black px-5 py-3 text-base font-medium text-white hover:bg-black-700"
                    >
                        Images
                    </a>
                </div>
                <div className="ml-3 inline-flex rounded-md shadow">
                    <a
                        href={`/content/videos/${topic}`}
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-black hover:bg-black-50"
                    >
                        Videos
                    </a>
                </div>
            </div>
        </div>
    )
}