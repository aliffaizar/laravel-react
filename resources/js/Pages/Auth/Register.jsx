import { useEffect } from 'react'
import { Head, Link, useForm } from '@inertiajs/react'

import GuestLayout from '@/Layouts/GuestLayout'
import InputError from '@/Components/InputError'
import Label from '@/Components/ui/Label'
import { Input } from '@/Components/ui/input'
import Button from '@/Components/ui/Button'
import ApplicationLogo from '@/Components/ApplicationLogo'

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation')
    }
  }, [])

  const submit = (e) => {
    e.preventDefault()

    post(route('register'))
  }

  return (
    <>
      <Head title='Register' />
      <GuestLayout>
        <div className='py-4 space-y-6 sm:py-6'>
          <div className='flex flex-col items-center justify-center gap-2'>
            <Link href='/'>
              <ApplicationLogo className='size-16 fill-current text-gray-500' />
            </Link>
            <div className='text-center leading-none'>
              <h2 className='text-2xl font-semibold text-gray-800 dark:text-gray-300'>
                Create an Account
              </h2>
              <p>Please provide valid information!</p>
            </div>
          </div>
          <form onSubmit={submit}>
            <div>
              <div className='space-y-2'>
                <Label htmlFor='name'>Name</Label>
                <Input
                  id='name'
                  name='name'
                  value={data.name}
                  className='mt-1 block w-full'
                  autoComplete='name'
                  isFocused={true}
                  onChange={(e) => setData('name', e.target.value)}
                  required
                />
              </div>
              <InputError message={errors.name} className='mt-2' />
            </div>

            <div className='mt-4'>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  name='email'
                  value={data.email}
                  className='mt-1 block w-full'
                  autoComplete='username'
                  onChange={(e) => setData('email', e.target.value)}
                  required
                />
              </div>
              <InputError message={errors.email} className='mt-2' />
            </div>

            <div className='mt-4'>
              <div className='space-y-2'>
                <Label htmlFor='password'>Password</Label>
                <Input
                  id='password'
                  type='password'
                  name='password'
                  value={data.password}
                  className='mt-1 block w-full'
                  autoComplete='new-password'
                  onChange={(e) => setData('password', e.target.value)}
                  required
                />
              </div>
              <InputError message={errors.password} className='mt-2' />
            </div>

            <div className='mt-4'>
              <div className='space-y-2'>
                <Label htmlFor='password_confirmation'>Confirm Password</Label>
                <Input
                  id='password_confirmation'
                  type='password'
                  name='password_confirmation'
                  value={data.password_confirmation}
                  className='mt-1 block w-full'
                  autoComplete='new-password'
                  onChange={(e) =>
                    setData('password_confirmation', e.target.value)
                  }
                  required
                />
              </div>
              <InputError
                message={errors.password_confirmation}
                className='mt-2'
              />
            </div>

            <div className='flex items-center justify-end mt-4'>
              <p className='space-x-2 '>
                <span className='text-gray-500 dark:text-gray-500'>
                  already have an account?
                </span>
                <Link
                  href={route('login')}
                  className='underline hover:text-teal-500 dark:hover:text-teal-600'
                >
                  Login here
                </Link>
              </p>
              <Button className='ms-4 px-6' disabled={processing}>
                Register
              </Button>
            </div>
          </form>
        </div>
      </GuestLayout>
    </>
  )
}
