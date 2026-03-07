export default function TableOfContents() {
    return (
        <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-40">
            <ul className="space-y-4 text-sm">

                <li>
                    <a href="#title" className="hover:text-blue-500">
                        Home
                    </a>
                </li>

                <li>
                    <a href="#overview" className="hover:text-blue-500">
                        Project Overview
                    </a>
                </li>

                <li>
                    <a href="#results" className="hover:text-blue-500">
                        Results
                    </a>
                </li>

                <li>
                    <a href="#methods" className="hover:text-blue-500">
                        Methods
                    </a>
                </li>

                <li>
                    <a href="#discussion" className="hover:text-blue-500">
                        Discussion
                    </a>
                </li>
            </ul>
        </nav>
    )
}