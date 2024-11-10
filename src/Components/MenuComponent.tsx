function MenuComponent(){
    return (
        <nav className="shadow cursor-pointer">
                <ul className="flex">
                    <li className="ml-2 hover:bg-blue-100 p-2">File</li>
                    <li className="ml-2 hover:bg-blue-100 p-2">Edit</li>
                    <li className="ml-auto hover:bg-blue-100 p-2">_</li>
                    <li className="ml-2 hover:bg-blue-100 p-2">X</li>
                </ul>
        </nav>
    )
}

export default MenuComponent