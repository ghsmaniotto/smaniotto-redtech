import CompanyLogo from "../assets/CompanyLogo.png";

export default function HeaderWithCompanyLogo({title}) {
    return (
        <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <img className="h-16 w-32" src={CompanyLogo} alt="RedTech" />
            </div>
            <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
            </div>
        </header>
    )
}