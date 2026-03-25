export default function DashboardPage() {
    return (
        <div className="bg-white text-gray-900 min-h-screen">

            {/* Top Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm px-6 py-3">
                <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-8">
                        <span className="text-2xl font-black tracking-tight text-blue-700">Propify</span>
                        <div className="hidden md:flex gap-6">
                            <a className="text-slate-600 hover:text-blue-700 transition-colors text-sm font-semibold" href="#">Buy</a>
                            <a className="text-slate-600 hover:text-blue-700 transition-colors text-sm font-semibold" href="#">Rent</a>
                            <a className="text-slate-600 hover:text-blue-700 transition-colors text-sm font-semibold" href="#">Sell</a>
                            <a className="text-slate-600 hover:text-blue-700 transition-colors text-sm font-semibold" href="#">Agents</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold overflow-hidden">
                            <img className="w-full h-full object-cover" alt="Agent" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmfd7qXOm77eZ9T7Xs_dCK0KiAvk-7ihOkYgMsoip1qHLy1Qtq_5w7H0Gk1maNzOwYKK_panzNAoAYfw8yZ0XhA0AgX9Q6hmXWp1_dnV9MvKNVNemTT1BXMnKhLX7yKfEMtT7SnNp08SW-8hBfKchWOKpcWbz5Wxw4Itfbthj5mqMfvn-Hnu8qGKpJfnh7AIj6pToDAodtbf2B3AXfQtgUtJpA63MwwAkeEIm1wxTqgeNHFPrQLJPyVqTtFmJiRtny1i8_grwx7GY-" />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Sidebar + Main layout */}
            <div className="flex pt-16 min-h-screen">

                {/* Sidebar */}
                <aside className="w-72 hidden md:flex flex-col gap-2 bg-blue-50 p-6">
                    <div className="mb-8 px-4 pt-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Manage Account</p>
                    </div>
                    <nav className="flex flex-col gap-1">
                        <a className="flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-xl font-bold" href="#">
                            My Properties
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-blue-100 rounded-xl" href="#">
                            Favorites
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-blue-100 rounded-xl" href="#">
                            Messages
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-blue-100 rounded-xl" href="#">
                            Profile
                        </a>
                    </nav>
                    <div className="mt-auto p-4 bg-blue-100 rounded-2xl">
                        <p className="text-sm font-bold">Pro Plan</p>
                        <p className="text-xs text-gray-500 mt-1">Unlimited listings &amp; Premium Analytics</p>
                        <button className="mt-4 w-full py-2 bg-gray-900 text-white text-xs font-bold rounded-lg">
                            Upgrade Now
                        </button>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 bg-white p-8 md:p-12">
                    <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                            <h1 className="text-4xl font-extrabold tracking-tight">My Properties</h1>
                            <p className="text-gray-500 mt-2 max-w-lg">
                                Manage your active listings, track performance, and update property details in real-time.
                            </p>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg transition-transform active:scale-95">
                            + Add New Property
                        </button>
                    </header>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-between border-l-4 border-blue-600">
                            <span className="text-sm font-semibold text-gray-400">Total Portfolio</span>
                            <div className="mt-4">
                                <span className="text-3xl font-black">12</span>
                                <span className="text-sm text-blue-600 font-bold ml-2">+2 this month</span>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-between border-l-4 border-orange-400">
                            <span className="text-sm font-semibold text-gray-400">Active Views</span>
                            <div className="mt-4">
                                <span className="text-3xl font-black">1,482</span>
                                <span className="text-sm text-orange-500 font-bold ml-2">85% engagement</span>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-between border-l-4 border-red-500">
                            <span className="text-sm font-semibold text-gray-400">Pending Offers</span>
                            <div className="mt-4">
                                <span className="text-3xl font-black">04</span>
                                <span className="text-sm text-red-500 font-bold ml-2">Awaiting review</span>
                            </div>
                        </div>
                    </div>

                    {/* Property List */}
                    <div className="flex flex-col gap-6">

                        {/* Card 1 */}
                        <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col lg:flex-row group">
                            <div className="w-full lg:w-72 h-48 lg:h-auto overflow-hidden">
                                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="The Glass Pavilion" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtb5nrDJwcqQDvACiZH-XbLDNC1lFqJ2LolIL8kzZrWaH3sICg1lhK04-JjieSYwTOrPvcljCzuRKtHFKHo0XWaXhheKivHkCixeFz_0IiLZhnGM-BrYQYu7CBFbbgOR8Cn31p-MYBDt4-Ilpd9zxSblFokzSLw6qWmZNaPMry196OX1v9kkwxsi_YgBfLCNceGNeDoWrmJkEiKsHIHVLK7eI_Ecmc5glmq2-xUqKZgfA160BZ19W7I5FjZyqOYfsSrah1CIDj56vo" />
                            </div>
                            <div className="flex-1 p-6 flex flex-col justify-between gap-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <span className="bg-blue-100 text-blue-800 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded">Active Listing</span>
                                        <span className="text-gray-400 text-xs font-medium ml-2">Ref: PP-9012</span>
                                        <h3 className="text-xl font-bold mt-2">The Glass Pavilion</h3>
                                        <p className="text-gray-500 text-sm mt-1">456 Skyline Drive, Beverly Hills, CA 90210</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-black text-blue-600">$4,250,000</p>
                                        <p className="text-xs text-gray-400 font-medium">Listed 14 days ago</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full">5 Beds</span>
                                    <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full">4 Baths</span>
                                    <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full">3,400 sqft</span>
                                </div>
                                <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
                                    <button className="text-sm font-bold text-gray-500 hover:text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100">View</button>
                                    <button className="text-sm font-bold text-gray-500 hover:text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100">Edit</button>
                                    <button className="text-sm font-bold text-red-500 hover:bg-red-50 px-4 py-2 rounded-lg">Delete</button>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col lg:flex-row group">
                            <div className="w-full lg:w-72 h-48 lg:h-auto overflow-hidden">
                                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Azure Coastal Retreat" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlSO_jTPDtgyrHZ6luR1cI6treE1rrcUrHKaqT7Q0Co30UaWfrq62mA0aPbCpCcANOdR6ViP7FV4zygOLjIs-Hupos517M4Eaj-yyhcQp9rYVD1BO6KiPFXqj7WD92Ad44BdgPfa8m_R7KER8mFa7I22hrR5G63Ds3EmHg4lmxekS1lV7nZVFTAsxUTh23oqz09ACIDRXuQCUp-4_5t5rGRYNTVhNBJ3NL4R3GgpiBodVIv6_MSGD3e_tVKN65PGN_OM-NdQCGHNJ0" />
                            </div>
                            <div className="flex-1 p-6 flex flex-col justify-between gap-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <span className="bg-orange-100 text-orange-800 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded">Under Contract</span>
                                        <span className="text-gray-400 text-xs font-medium ml-2">Ref: PP-8842</span>
                                        <h3 className="text-xl font-bold mt-2">Azure Coastal Retreat</h3>
                                        <p className="text-gray-500 text-sm mt-1">12 Oceanfront Way, Malibu, CA 90265</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-black text-blue-600">$8,900,000</p>
                                        <p className="text-xs text-gray-400 font-medium">Listed 45 days ago</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full">6 Beds</span>
                                    <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full">7 Baths</span>
                                    <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full">6,200 sqft</span>
                                </div>
                                <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
                                    <button className="text-sm font-bold text-gray-500 hover:text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100">View</button>
                                    <button className="text-sm font-bold text-gray-500 hover:text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100">Edit</button>
                                    <button className="text-sm font-bold text-red-500 hover:bg-red-50 px-4 py-2 rounded-lg">Delete</button>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col lg:flex-row group opacity-75">
                            <div className="w-full lg:w-72 h-48 lg:h-auto overflow-hidden">
                                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Olive Grove Estate" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB651BZpHnWngEKZgPML22wsxE2F-DfyVP92zGofmdnDIyFOWRqOqVsSCohB02xOKjt0DHmxuXBA59FCqaaUDnDUy126ncqWFxXXZr5eQK_X0zRlISHRI3inaeMZvKcrnXy6XDo-CPJC6eLGOzuNV0e4sBTOkj0_5CYAf6Kf6UyrLwMlmtATGlpl4Ev11HMvk-gqRs5quwGRAM8f1cnOzSU8lo_iTEygzc2glVE0LGV6IDTxwnk3JTGC7QVyZKlqNFfSmjAWngt6TTB" />
                            </div>
                            <div className="flex-1 p-6 flex flex-col justify-between gap-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <span className="bg-gray-200 text-gray-600 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded">Draft</span>
                                        <span className="text-gray-400 text-xs font-medium ml-2">Incomplete</span>
                                        <h3 className="text-xl font-bold mt-2">Olive Grove Estate</h3>
                                        <p className="text-gray-500 text-sm mt-1">99 Tuscan Hills Rd, Napa Valley, CA 94558</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-black text-gray-400">$5,100,000</p>
                                        <p className="text-xs text-gray-400 font-medium">Last edited 2h ago</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full">4 Beds</span>
                                    <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full">3 Baths</span>
                                </div>
                                <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
                                    <button className="text-sm font-bold text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50">Resume &amp; Publish</button>
                                    <button className="text-sm font-bold text-gray-500 hover:text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100">Edit</button>
                                    <button className="text-sm font-bold text-red-500 hover:bg-red-50 px-4 py-2 rounded-lg">Delete</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
            </div>

            {/* Footer */}
            <footer className="bg-gray-50 border-t border-gray-200 mt-20">
                <div className="max-w-screen-2xl mx-auto px-8 py-16 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start">
                        <span className="text-lg font-bold mb-2">Propify</span>
                        <p className="text-sm text-gray-400">&copy; 2024 Propify. Editorial Real Estate Excellence.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8">
                        {["Privacy Policy", "Terms of Service", "Cookie Settings", "Contact Support", "Careers", "Press Kit"].map((link) => (
                            <a key={link} className="text-sm text-gray-400 hover:text-blue-600 transition-colors" href="#">{link}</a>
                        ))}
                    </div>
                </div>
            </footer>

            {/* Mobile Nav */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg px-6 py-4 z-50 flex justify-around items-center">
                {[
                    { label: "My Prop", href: "#" },
                    { label: "Saved", href: "#" },
                    { label: "Inbox", href: "#" },
                    { label: "Account", href: "#" },
                ].map(({ label, href }) => (
                    <a key={label} className="flex flex-col items-center gap-1 text-gray-500 text-[10px] font-bold" href={href}>
                        {label}
                    </a>
                ))}
            </div>

        </div>
    );
}
