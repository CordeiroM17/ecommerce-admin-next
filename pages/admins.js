import Layout from "@/components/Layout";
import { prettyDate } from "@/lib/date";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function AdminsPage() {

    const [email, setEmail] = useState('');
    const [adminEmails, setAdminEmails] = useState([]);

    useEffect(() => {
       loadAdmins();
    }, []);

    function loadAdmins() {
        axios.get('/api/admins').then(res => {
            setAdminEmails(res.data);
        });
    }

    function addAdmin(e) {
        e.preventDefault();
        axios.post('/api/admins', {email}).then(res => {
            Swal.fire({
                icon:'success',
                title: 'Admin created'
            });
            setEmail('');
            loadAdmins();
        }).catch(err => {
            Swal.fire({
                icon:'error',
                title: 'Error',
                text: err.response.data.message,
            });
        })
    }

    function deleteAdmin(_id, email) {
        Swal.fire({
            title: 'Are you sure?',
            text: `Do you want to delete admin "${email}"?`,
            showCancelButton: true,
            cancelButtonText: 'Cancel',
            confirmButtonText: 'Yes, Delete!',
            confirmButtonColor: '#d55',
            reverseButtons: true,
          }).then(async result => {
            if (result.isConfirmed) {
                axios.delete(`/api/admins?_id=${_id}`).then(() => {
                    Swal.fire({
                        icon:'success',
                        title: 'Admin deleted'
                    });
                });
                loadAdmins();
            }
          });
    };

    return (
        <Layout>
            <h1>Admins</h1>

            <h2>Add new admin</h2>

            <form onSubmit={addAdmin}>
                <div className="flex gap-2">
                    <input type="text" className="mb-0" placeholder="google email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <button type="submit" className="btn-primary py-1 whitespace-nowrap">Add admin</button>
                </div>
            </form>

            <h2>Existing admin</h2>
            <table className="basic">
                <thead>
                    <tr>
                        <td className="text-left">Admin google email</td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {adminEmails.length > 0 && adminEmails.map(adminEmail => (
                        <tr key={adminEmail._id}>
                            <td>{adminEmail.email}</td>
                            <td>{adminEmail.createdAt && prettyDate(adminEmail.createdAt)}</td>
                            <td>
                                <button onClick={() => deleteAdmin(adminEmail._id, adminEmail.email)} className="btn-red">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    );
}