import Image from "next/image";
import HeaderMenu from "@/components/HeaderMenu";
import Footer from "@/components/Footer";
import Link from "next/link";

const StarterMenu = () => {
    return (
        <div>
            <HeaderMenu />
            <main>
                <section
                    className="bg-cover bg-center h-64 flex items-center justify-center"
                    style={{ backgroundImage: "url('/head-bg.png')" }}
                >
                    <div className="text-center text-white">
                        <h2 className="text-4xl font-bold">Our Menu</h2>
                        <p className="text-sm mt-2">
                            <Link href="/" className="hover:underline">
                                Home
                            </Link>{" "}
                            &gt;
                            <Link href="/error-404" className="hover:underline">
                                Menu
                            </Link>{" "}
                        </p>
                    </div>
                </section>
            </main>


            <div className="bg-white py-10 px-6 md:px-20">
                <div className="grid md:grid-cols-2 items-start gap-10">

                    {/* Left Section (Image) */}
                    <div>
                        <Image
                            src="/Rectangle 8874.png"
                            alt="Starter Dish"
                            width={400}
                            height={100}
                            className="rounded-lg"
                        />
                    </div>

                    {/* Right Section (Menu List) */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                            <span className="text-yellow-500">🍴</span>
                            <span>Starter Menu</span>
                        </h2>
                        <ul className="space-y-6">
                            {/* Menu Item 1 */}
                            <li className="flex justify-between border-b pb-4">
                                <div>
                                    <h4 className="text-lg font-semibold">Alder Grilled Chinook Salmon</h4>
                                    <p className="text-gray-500 text-sm">
                                        Toasted French bread topped with romano, cheddar
                                    </p>
                                    <p className="text-gray-400 text-xs">560 CAL</p>
                                </div>
                                <span className="text-yellow-500 text-lg font-semibold">32$</span>
                            </li>
                            <li className="flex justify-between border-b pb-4">
                                <div>
                                    <h4 className="text-lg font-semibold">Berries and Creme Tart</h4>
                                    <p className="text-gray-500 text-sm">
                                        Gorgonzola, ricotta, mozzarella, taleggio
                                    </p>
                                    <p className="text-gray-400 text-xs">700 CAL</p>
                                </div>
                                <span className="text-yellow-500 text-lg font-semibold">43$</span>
                            </li>
                            <li className="flex justify-between border-b pb-4">
                                <div>
                                    <h4 className="text-lg font-semibold">Tormentoso Bush Pizza Pinotage</h4>
                                    <p className="text-gray-500 text-sm">
                                        Ground cumin, avocados, peeled and cubed
                                    </p>
                                    <p className="text-gray-400 text-xs">1000 CAL</p>
                                </div>
                                <span className="text-yellow-500 text-lg font-semibold">14$</span>
                            </li>
                            <li className="flex justify-between">
                                <div>
                                    <h4 className="text-lg font-semibold">Spicy Vegan Potato Curry</h4>
                                    <p className="text-gray-500 text-sm">
                                        Spreadable cream cheese, crumbled blue cheese
                                    </p>
                                    <p className="text-gray-400 text-xs">560 CAL</p>
                                </div>
                                <span className="text-yellow-500 text-lg font-semibold">35$</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>



                </div>

            </div><div className="bg-white py-10 px-6 md:px-20">

                {/* Right Section (Menu List) */}
                <div className="grid md:grid-cols-2 items-start gap-10">
                    <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                        <span className="text-yellow-500">🍴</span>
                        <span>Starter Menu</span>
                    </h2>
                    <ul className="space-y-6">
                        {/* Menu Item 1 */}
                        <li className="flex justify-between border-b pb-4">
                            <div>
                                <h4 className="text-lg font-semibold">Alder Grilled Chinook Salmon</h4>
                                <p className="text-gray-500 text-sm">
                                    Toasted French bread topped with romano, cheddar
                                </p>
                                <p className="text-gray-400 text-xs">560 CAL</p>
                            </div>
                            <span className="text-yellow-500 text-lg font-semibold">32$</span>
                        </li>
                        {/* Menu Item 2 */}
                        <li className="flex justify-between border-b pb-4">
                            <div>
                                <h4 className="text-lg font-semibold">Berries and Creme Tart</h4>
                                <p className="text-gray-500 text-sm">
                                    Gorgonzola, ricotta, mozzarella, taleggio
                                </p>
                                <p className="text-gray-400 text-xs">700 CAL</p>
                            </div>
                            <span className="text-yellow-500 text-lg font-semibold">43$</span>
                        </li>
                        {/* Menu Item 3 */}
                        <li className="flex justify-between border-b pb-4">
                            <div>
                                <h4 className="text-lg font-semibold">Tormentoso Bush Pizza Pinotage</h4>
                                <p className="text-gray-500 text-sm">
                                    Ground cumin, avocados, peeled and cubed
                                </p>
                                <p className="text-gray-400 text-xs">1000 CAL</p>
                            </div>
                            <span className="text-yellow-500 text-lg font-semibold">14$</span>
                        </li>
                        {/* Menu Item 4 */}
                        <li className="flex justify-between">
                            <div>
                                <h4 className="text-lg font-semibold">Spicy Vegan Potato Curry</h4>
                                <p className="text-gray-500 text-sm">
                                    Spreadable cream cheese, crumbled blue cheese
                                </p>
                                <p className="text-gray-400 text-xs">560 CAL</p>
                            </div>
                            <span className="text-yellow-500 text-lg font-semibold">35$</span>
                        </li>
                    </ul>
                    <div>
                        <Image
                            src="/unsplash_-GFCYhoRe48.png" // Replace with actual image path in the public folder
                            alt="Starter Dish"
                            width={400}
                            height={400}
                            className="rounded-lg"
                        />
                    </div>

                </div>

                {/* Left Section (Image) */}


            </div>

            <footer>
                <Footer />
            </footer>
        </div>

    );
};

export default StarterMenu;
