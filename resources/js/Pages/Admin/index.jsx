import AdminLayout from '@/Layouts/AdminLayout'
import { Head } from '@inertiajs/react'

export default function Admin() {
  return (
    <>
      <Head title='Admin' />
      <AdminLayout>
        <h1>Admin Page</h1>
      </AdminLayout>
    </>
  )
}
