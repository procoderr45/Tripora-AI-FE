import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import profile from '../../api/profile/profile'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, changeLoginLoadingStatus } from '../../store/slices/userSlice'
import { Link } from 'react-router-dom'
import auth from '../../api/auth/auth'

const navigation = [
    { name: 'Home', href: '/home', current: true },
    { name: 'Make Plan', href: '/plan/new', current: false },
    { name: 'Past plans', href: '/profile/plans', current: false },
    { name: 'Calendar', href: '#', current: false },
]

export default function Navbar() {

    const dispatch = useDispatch()
    const [toastMessage, setToastMessage] = useState("")

    const user = useSelector(store => store.user.user)
    console.log("User info", user)

    const handleLogoutClick = async () => {
        try {
            const logoutMessage = await auth.logoutUser()

            setToastMessage(logoutMessage)

        }
        catch (err) {
            setToastMessage(err.message)
        }
    }

    const getUser = async () => {
        dispatch(changeLoginLoadingStatus(true))
        try {

            const user = await profile.getLoggedInUser()

            dispatch(addUser(user))
        }
        catch (err) {
            dispatch(changeLoginLoadingStatus(false))
            console.log(err)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            setToastMessage("")
        }, 3000)

        return () => {
            clearTimeout(timer)
        }
    }, [toastMessage])

    return (
        <Disclosure as="nav" className="fixed top-0 left-0 w-full z-9999 backdrop-blur-xs bg-black/50 shadow-md" >
            {toastMessage && <p className='absolute bg-white  top-20 right-10 border-2 px-4 py-2'> ✅ {toastMessage}</p>}
            <div className="mx-auto   max-w-7xl z-1000000 px-2 sm:px-6 lg:px-8 text-white">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <Bars3Icon className="block h-6 w-6 ui-open:hidden" aria-hidden="true" />
                            <XMarkIcon className="hidden h-6 w-6 ui-open:block" aria-hidden="true" />
                        </DisclosureButton>

                    </div>
                    <div className="flex flex-1 items-center  justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <img
                                alt="Your Company"
                                src="https://media.licdn.com/dms/image/v2/D4E0BAQF-D_G0Gqxh6Q/company-logo_200_200/company-logo_200_200/0/1701540500397/trip_planner_ai_logo?e=2147483647&v=beta&t=XmgHGXv7qK3YxhikDcBfruv9GRJ94b0V2P2OIwrdXS0"
                                className="h-8 w-auto"
                            />
                        </div>
                        <div className="hidden sm:ml-6 sm:block z-99999">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a key={item.name} href={item.href} className='rounded-md px-3 py-2 text-sm font-medium'>
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute z-9999 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button" className="relative rounded-full p-1 text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500" >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View notifications</span>
                            <BellIcon aria-hidden="true" className="size-6" />
                        </button>
                        {
                            user ?

                                <Menu as="div" className="relative ml-3 z-999999">
                                    <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">Open user menu</span>
                                        <img alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10" />
                                    </MenuButton>

                                    <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white/80 backdrop-blur-2xl py-1 shadow-lg ring-1 ring-black/10 focus:outline-none " >
                                        <MenuItem>
                                            <Link to="/profile/update" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                Your Profile
                                            </Link>
                                        </MenuItem>
                                        <MenuItem>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                Settings
                                            </a>
                                        </MenuItem>
                                        <MenuItem>
                                            <button onClick={handleLogoutClick} className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-start cursor-pointer">
                                                Sign out
                                            </button>
                                        </MenuItem>
                                    </MenuItems>

                                </Menu> :
                                <Link to="/login" className='border-1 border-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-500 hover:text-white text-md'>Login</Link>
                        }
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden z-9999">
                <div className="space-y-1 px-2 pt-2 pb-3 ">
                    {navigation.map((item) => (
                        <DisclosureButton key={item.name} as="a" href={item.href} className="hover:bg-white/5 block rounded-md px-3 py-2 text-white font-medium" >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure >
    )
}
