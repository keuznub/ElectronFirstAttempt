
function TableComponent(){
    return (
        <table className="table-auto border-2 min-h-80 min-w-80 text-center">
            <thead>
                <tr>
                    <th className="">Column 1</th>
                    <th>Column 2</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Data1</td>
                    <td>Data2</td>
                </tr>
                <tr>
                    <td>Data1</td>
                    <td>Data2</td>
                </tr>
            </tbody>
        </table>
    )
}


export default TableComponent;