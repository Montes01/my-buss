export default function Header() {
    return (
        <header className="flex justify-between items-center p-4 w-screen">
            <h1 className="text-2xl font-bold">Logo</h1>
            <nav className="w-1/6">
                <ul className="flex justify-between flex-row w-full">
                    <li>Home</li>
                    <li>Blog</li>
                    <li>About</li>
                </ul>
            </nav>
        </header>
    );
}
