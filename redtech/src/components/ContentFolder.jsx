
export default function ContentFolder({topic}){
    return (
        <div className="border-2 border-black rounded-lg p-4 text-center">
            <a href={`/content/${topic}`}>
                <p className="text-lg text-gray-700">{topic}</p>
            </a>
        </div>
    )
}