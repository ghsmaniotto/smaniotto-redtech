import HeaderWithCompanyLogo from "../components/HeaderWithCompanyLogo"

export default function Content() {
    const contentTopics = [
        "Clouds", "Cars", "Urban", "Flowers", "Sports"
    ]

    return (
        <div className="min-h-full">
            <HeaderWithCompanyLogo title={"Content"} />
            <main>
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {contentTopics.map((topic, index) => (
                            <div key={`${topic}_${index}`} className="border-2 border-black rounded-lg p-4 text-center">
                                <a href={`/content/${topic}`}>
                                    <p className="text-lg text-gray-700">{topic}</p>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}