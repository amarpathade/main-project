import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Link } from "react-router-dom"
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import footerimg from "../assets/images/leaflogomain.png"
const navigation1 = [
    { name: 'Home', href: '/Home', current: false },
    { name: 'Services', href: '/Category', current: false },
    { name: 'Company', href: '#', current: false },
    { name: 'Signup', href: '#', current: false },
]

const navigation2 = [
    { name: 'Profile', href: '#', current: false },
    { name: 'Orders', href: '#', current: false },
    { name: 'Products', href: '#', current: false },
    { name: 'Log Out', href: '#', current: false },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Footer() {
    return (
        <div className="bg-green-100">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap:8">
                    <div className=" text-white">
                        <div className='space-y-2'>
                            <h1 className='text-green-600 text-xl font-bold'>Efarming</h1>
                            <div>
                                <h1 className='mb-1 text-black'>Address: <p>Nagpur Maharashtra -India</p> </h1>
                                <hr className='text-green-600' />
                                <br />
                                <br />
                                <h1 className='text-gray-900'>Contact: <p>farmersupport@gmail.com</p></h1>
                                <h1 className='text-left text-black'> <p>7020243881</p></h1>
                            </div>
                            <div className='flex justify-center md:justify-start space-x-4'>
                                <i className="fa-brands fa-youtube fa-2xl my-5 py-5 text-red-500"></i>
                                <i className="fa-brands fa-instagram fa-2xl my-5 py-5 bg-gradient-to-r from-red-600 to-sky-300 bg-clip-text text-transparent"></i>
                                <i className="fa-brands fa-whatsapp fa-2xl my-5 py-5 text-green-600"></i>
                                <i class="fa-brands fa-github fa-2xl my-5 py-5 text-black"></i>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <ul className='space-y-2'>
                            <li className='text-green-600 text-l font-bold'>Quick Links</li>
                            {navigation1.map((item) => (
                                <li
                                    key={item.name}
                                    href={item.href}
                                    aria-current={item.current ? 'page' : undefined}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-green-500' : 'text-greeen-300 hover:text-green-700',
                                        'hover:underline px-3 py-2 text-sm font-medium',
                                    )}
                                >
                                    <Link to={item.href}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="text-center">
                        <ul className='space-y-2'>
                            <li className='text-transparent cursor-default'>Links</li>
                            {navigation2.map((item) => (
                                <li
                                    key={item.name}
                                    href={item.href}
                                    aria-current={item.current ? 'page' : undefined}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-gray-900' : 'text-gray-900 hover:text-green-700',
                                        'rounded-md px-3 py-2 text-sm font-medium',
                                    )}
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="text-center">
                        <div className='space-y-2'>
                            <img src={footerimg} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
