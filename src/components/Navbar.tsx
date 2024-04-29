import { useState } from 'react'
import Icon from '@mdi/react';
import { mdiFormDropdown, mdiCarMultiple } from '@mdi/js';
import Button from '@mui/material/Button'

import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'


function Navbar() {
  
    const [isVisible, setIsVisible] = useState(false);
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const signOutOnClick = () => {
        logout();
    };

    const signInOnClick = () => {
        loginWithRedirect();
    };

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }


  return (
    <nav className="flex items-center justify-start flex-wrap bg-orange-800 p-3">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Link to='/' className='font-semibold text-xl tracking-tight'>ICIDO</Link>
        </div>
        <div className="block">
            <button onClick={dropDown} className="flex items-center px-2 py-2 text-white border border-white rounded hover:text-white hover:border-white hover:bg-slate-500">
            <Icon path={mdiFormDropdown} size={1} />
            </button>
        </div>
        {isVisible ? (
            <div className="w-full block flex-grow items-center mt-3">
                <div className="text-sm lg:flex-grow">
                    <Button variant="outlined" color="warning" className="">
                        <div>
                            <Link to='/' onClick={ clicked } className="text-white hover:text-white">
                                Home
                            </Link>
                        </div>
                    </Button>
                    <Button variant="outlined" color="warning" className="">
                        <div>
                            <Link to='/About' onClick={ clicked } className="text-white hover:text-white">
                                About
                            </Link>
                        </div>
                    </Button>
                    <Button variant="outlined" color="warning" className="">
                        <div>
                            <Link to='/Contact' onClick={ clicked } className="text-white hover:text-white">
                                Contact
                            </Link>
                        </div>
                    </Button>
                    <Button variant="outlined" color="warning" className="p-3 m-5 bg-red-600 justify-center">
                        <div className="flex flex-row">
                            <Icon path={mdiCarMultiple} size={1} color="white" className="pr-2"/>
                            <Link to='/Dashboard' onClick={ clicked } className="text-white hover:text-white">
                                Collection
                            </Link>
                        </div>
                    </Button>
                    {
                        !isAuthenticated ?
                        <Button variant="outlined" color="warning" className='p-3 m-5 bg-red-600 justify-center'>
                            <div>
                                <Link to="/" onClick={signInOnClick} className="text-white hover:text-white">
                                    Login
                                </Link>
                            </div>
                        </Button>
                        :
                        <Button variant="outlined" color="warning" className='p-3 m-5 bg-red-600 justify-center'>
                            <div>
                                <Link to="/" onClick={signOutOnClick} className="text-white hover:text-white">
                                    Sign Out
                                </Link>
                            </div>
                        </Button>
                    }
                </div>
            </div>
        ) : (
            <></>
        ) }
    </nav>
    
  )
}

export default Navbar
