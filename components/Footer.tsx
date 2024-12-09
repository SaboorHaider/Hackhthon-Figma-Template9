import React from 'react';
import { FaClock, FaFacebookF, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-black text-white font-poppins font-thin">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h2 className="text-xl font-bold mb-4">About Us.</h2>
                        <p className="mb-4">
                            Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and professional chauffeured car service in major cities across the world.
                        </p>
                        <div className="flex items-center ">
                            <div className="bg-[#FF9F0D] p-4 text-4xl">
                                <FaClock className="text-white" />
                            </div>
                            <div className="ml-4">
                                <h3 className="font-bold">Opening Hours</h3>
                                <p>Mon - Sat (8.00 - 6.00)</p>
                                <p>Sunday - Closed</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-4 ">Useful Links</h2>
                        <ul>
                            <li className="mb-2"><a className="hover:underline" href="#">About</a></li>
                            <li className="mb-2"><a className="hover:underline" href="#">News</a></li>
                            <li className="mb-2"><a className="hover:underline" href="#">Partners</a></li>
                            <li className="mb-2"><a className="hover:underline" href="#">Team</a></li>
                            <li className="mb-2"><a className="hover:underline" href="#">Menu</a></li>
                            <li className="mb-2"><a className="hover:underline" href="#">Contacts</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-4">Help?</h2>
                        <ul>
                            <li className="mb-2"><a className="hover:underline" href="#">FAQ</a></li>
                            <li className="mb-2"><a className="hover:underline" href="#">Terms &amp; Conditions</a></li>
                            <li className="mb-2"><a className="hover:underline" href="#">Reporting</a></li>
                            <li className="mb-2"><a className="hover:underline" href="#">Documentation</a></li>
                            <li className="mb-2"><a className="hover:underline" href="#">Support Policy</a></li>
                            <li className="mb-2"><a className="hover:underline" href="#">Privacy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-4">Recent Post</h2>
                        <div className="flex items-center mb-4">
                            <Image
                                src="/footer1.png"
                                alt="Footer imageimage 1"
                                height="50"
                                width="50"
                                className="w-12 h-12  mr-4"
                            />
                            <div>
                                <p className="text-sm text-gray-400">20 Feb 2022</p>
                                <p className="hover:underline">Keep Your Business</p>
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <Image
                                src="/footer2.png"
                                alt="footer  image 2"
                                height="50"
                                width="50"
                                className="w-12 h-12  mr-4"
                            />

                            <div>
                                <p className="text-sm text-gray-400">20 Feb 2022</p>
                                <p className="hover:underline">Keep Your Business</p>
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <Image
                                src="/footer3.png"
                                alt="Footer image 1"
                                height={50}
                                width={50}
                                className="w-12 h-12  mr-4"
                            />
                            <div>
                                <p className="text-sm text-gray-400">20 Feb 2022</p>
                                <p className="hover:underline">Keep Your Business</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#FF9F0D] py-4 mt-10">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <p className="text-white">Copyright ©️ 2022 by Ayeman. All Rights Reserved.</p>
                    <div className="flex space-x-4">
                        <FaFacebookF className='bg-white cursor-pointer text-gray-900 p-2 text-4xl' />
                        <FaTwitter className='bg-white cursor-pointer text-gray-900 p-2 text-4xl' />
                        <FaInstagram className='bg-white cursor-pointer text-gray-900 p-2 text-4xl' />
                        <FaPinterest className='bg-white cursor-pointer text-gray-900 p-2 text-4xl' />
                        <FaYoutube className='bg-white cursor-pointer text-gray-900 p-2 text-4xl' />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;