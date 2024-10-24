export default function AddClient() {
    return (
        <>
            <form className="px-7 h-screen grid justify-center items-center">
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="clientName">
                        Client Name
                    </label>
                    <input
                        className="w-full p-2 rounded-md text-black"
                        id="clientName"
                        type="text"
                        placeholder="Enter client name"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="w-full p-2 rounded-md text-black"
                        id="email"
                        type="email"
                        placeholder="Enter client email"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="phone">
                        Phone Number
                    </label>
                    <input
                        className="w-full p-2 rounded-md text-black"
                        id="phone"
                        type="tel"
                        placeholder="Enter phone number"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="address">
                        Address
                    </label>
                    <input
                        className="w-full p-2 rounded-md text-black"
                        id="address"
                        type="text"
                        placeholder="Enter address"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="clientType">
                        Client Type
                    </label>
                    <select
                        className="w-full p-2 rounded-md text-black"
                        id="clientType"
                    >
                        <option value="">Select client type</option>
                        <option value="individual">Individual</option>
                        <option value="business">Business</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                >
                    Add Client
                </button>
            </form>
        </>
    );
}
