import { Head, usePage } from '@inertiajs/inertia-react'
import React, {useEffect, useState} from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Navbar from '../Components/Dashboard/Navbar'
import Sidebar from '../Components/Dashboard/Sidebar'
import Footer from '../Components/Dashboard/Footer'
import axios from 'axios';

export default function Base({ children, title }) {
    const { flash } = usePage().props;

    flash.type && toast[flash.type](flash.message)

    const [role, setRole] = useState(null);

    useEffect(() => {
        axios.get('/api/user')
            .then(response => {
                console.log(response)
                setRole(response.data.role);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className="g-sidenav-show bg-gray-100">
            <div className="min-height-300 bg-primary position-absolute w-100"></div>
            <Head title={title} />
            <Sidebar role={role} />
            <main className="main-content position-relative border-radius-lg d-flex flex-column min-vh-100 ">
                <Navbar pageName={title} />
                <Toaster position='top-center' duration='4000' />
                {children}
                <Footer />
            </main>
        </div>
    )
}
