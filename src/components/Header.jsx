import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from "../assets/images/leaflogomain.png"
import farmlogo from'../assets/images/farmlogo.jpg'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const navigation = [
    { name: 'Home', href: '/Home', current: true },
    { name: 'How is works', href: '/About', current: false },
    { name: 'Contact', href: '/Contact', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const {user , loginWithRedirect}=useAuth0();
    console.log('current user',user);
    
    return (
        <Disclosure as="nav" className="bg-green-100 px-6 absolute w-full ">
            <div className="mx-auto max-w-7xl px- sm:px-6 lg:px-8">
                <div className="relative flex h-11 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-green-600  hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <i className="fa-solid fa-bars block group-data-[open]:hidden"></i>
                            {/* <i className="fa-solid fa-x hidden size-6 group-data-[open]:block"></i> */}
                            {/* <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" /> */}
                            {/* <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" /> */}
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <img
                                alt="Your Company"
                                src={logo}
                                className="h-8 w-auto"
                            />
                            <h1 className='text-2xl font-bold '>Efarming</h1>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'underline text-black' : 'text-black-300 hover:text-green-500 hover:underline',
                                            'rounded-md px-3 py-2 text-sm font-medium',
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* cart */}
                  
                    {/* cart logo */}
                   

                        {/* theme */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <Link to='Cart' className='relative inline-block'>
                    <i className="fa-solid fa-cart-shopping text-l text-gray-900 hover:text-gray-300"></i>
                    <span className='absolute top-0 right-0 translate-x-1/2 -translate-y-1/2  text-red-600 font-bold rounded-full px-2'>2</span>
                    </Link>
                        <button
                            type="button"
                            className="relative rounded-full p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                        >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View notifications</span>
                            {/* <BellIcon aria-hidden="true" className="size-6" /> */}
                        </button>

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                            <div>
                                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        alt=""
                                        src={farmlogo}
                                        className="size-7 rounded-full"
                                    />
                                </MenuButton>
                            </div>
                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                            >
                                <MenuItem>
                                    <Link to='Profile'
                                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                                    >
                                        Your Profile
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link
                                        to="#"
                                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                                    >
                                        Your Orders
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link
                                        to='Signup'
                                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                                    >
                                        Sign out
                                    </Link>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
