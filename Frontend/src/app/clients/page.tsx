import Link from "next/link";

export default function Clients() {
    return (
        <div className="ml-80 mt-12">
            <div className="flex justify-around">
                <h1 className="text-xl">Client Page</h1>
                <Link href="/clients/addclients">
                    <div className="">
                        <button className="btn-addClient"><span>Add Client</span></button>
                    </div>
                </Link>
            </div>
        </div>
    );
}