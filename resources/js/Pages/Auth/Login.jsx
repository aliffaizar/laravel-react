import { useEffect } from 'react'
import { Head, Link, useForm } from '@inertiajs/react'

import GuestLayout from '@/Layouts/GuestLayout'
import InputError from '@/Components/InputError'
import PrimaryButton from '@/Components/PrimaryButton'
import ApplicationLogo from '@/Components/ApplicationLogo'
import { Input } from '@/Components/ui/input'
import Label from '@/Components/ui/Label'
import Checkbox from '@/Components/ui/Checkbox'
import Button from '@/Components/ui/Button'

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  })

  useEffect(() => {
    return () => {
      reset('password')
    }
  }, [])

  const submit = (e) => {
    e.preventDefault()

    post(route('login'))
  }

  return (
    <>
      <Head title='Log in' />
      <GuestLayout>
        <div className='py-4 sm:py-6'>
          <div className='flex flex-col items-center justify-center gap-2'>
            <Link href='/'>
              <ApplicationLogo className='size-16 fill-current text-gray-500' />
            </Link>
            <div className='text-center leading-none'>
              <h2 className='text-2xl font-semibold text-gray-800 dark:text-gray-300'>
                Welcome Back!
              </h2>
              <p>Please enter your credentials to sign in!</p>
            </div>
          </div>
          {status && (
            <div className='mb-4 font-medium text-sm text-green-600'>
              {status}
            </div>
          )}

          <form onSubmit={submit}>
            <div className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                type='email'
                name='email'
                value={data.email}
                id='email'
                isFocused={true}
                onChange={(e) => setData('email', e.target.value)}
              />

              <InputError message={errors.email} className='mt-2' />
            </div>

            <div className='mt-4 space-y-2'>
              <Label htmlFor='password'>Password</Label>
              <Input
                id='password'
                type='password'
                name='password'
                value={data.password}
                className='mt-1 block w-full'
                autoComplete='current-password'
                onChange={(e) => setData('password', e.target.value)}
              />
              <InputError message={errors.password} className='mt-2' />
            </div>

            <div className='flex items-center justify-between mt-4'>
              <label className='flex items-center'>
                <Checkbox
                  name='remember'
                  checked={data.remember}
                  onChange={(e) => setData('remember', e.target.checked)}
                />
                <span className='ms-2 text-sm text-gray-500 dark:text-gray-500'>
                  Remember me
                </span>
              </label>
              {canResetPassword && (
                <Link
                  className='text-gray-500 dark:text-gray-500 hover:text-teal-500 dark:hover:text-teal-600'
                  href={route('password.request')}
                >
                  Forgot your password?
                </Link>
              )}
            </div>

            <div className='flex items-center justify-end mt-4'>
              <p className='space-x-2'>
                <span className='text-gray-500 dark:text-gray-500'>
                  Don't have an account yet?
                </span>
                <Link
                  className='underline hover:text-teal-500 dark:hover:text-teal-600'
                  href={route('register')}
                >
                  Register
                </Link>
              </p>
              <Button className='ms-4 px-6' disabled={processing}>
                Log in
              </Button>
            </div>
          </form>
        </div>
      </GuestLayout>
    </>
  )
}
