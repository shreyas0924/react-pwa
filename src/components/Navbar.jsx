import React from 'react'
import '../App.css'

const Navbar = () => {
  return (
    <div>
      <div className='flex m-6 '>
        <div className='pt-1'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M19 12H5M5 12L12 19M5 12L12 5'
              stroke='#141E0D'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </div>
        <h1 className='h-8 not-italic font-bold text-2xl leading-7 text-gray-900 ml-2 mb-0'>
          Trip 1
        </h1>
        <div className='ml-auto mr-2 pt-1.5'>
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clip-path='url(#clip0_1_889)'>
              <path
                d='M9.16666 3.33332H5.66666C4.26653 3.33332 3.56647 3.33332 3.03169 3.6058C2.56128 3.84549 2.17883 4.22794 1.93915 4.69834C1.66666 5.23312 1.66666 5.93319 1.66666 7.33332V14.3333C1.66666 15.7335 1.66666 16.4335 1.93915 16.9683C2.17883 17.4387 2.56128 17.8212 3.03169 18.0608C3.56647 18.3333 4.26653 18.3333 5.66666 18.3333H12.6667C14.0668 18.3333 14.7669 18.3333 15.3016 18.0608C15.772 17.8212 16.1545 17.4387 16.3942 16.9683C16.6667 16.4335 16.6667 15.7335 16.6667 14.3333V10.8333M6.66664 13.3333H8.06209C8.46975 13.3333 8.67357 13.3333 8.86538 13.2873C9.03544 13.2464 9.19802 13.1791 9.34714 13.0877C9.51533 12.9847 9.65946 12.8405 9.94771 12.5523L17.9167 4.58332C18.607 3.89296 18.607 2.77368 17.9167 2.08332C17.2263 1.39296 16.107 1.39296 15.4167 2.08332L7.44769 10.0523C7.15944 10.3405 7.01531 10.4847 6.91224 10.6528C6.82086 10.802 6.75352 10.9645 6.71269 11.1346C6.66664 11.3264 6.66664 11.5302 6.66664 11.9379V13.3333Z'
                stroke='#141E0D'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </g>
            <defs>
              <clipPath id='clip0_1_889'>
                <rect width='20' height='20' fill='white' />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <div className='flex ml-6'>
        <div className='flex'>
          <img src='./Profile.png' alt='profile' />

          <div className='ml-4 pt-1 w-56 h-12 not-italic font-medium text-base leading-5 text-gray-900 flex-none order-1 flex-grow-0'>
            <span className='text-gray-700'>From</span> IGI Airport, T3 <br />{' '}
            <span className='text-gray-700'>To</span> Sector 28
          </div>
        </div>
        <div className='ml-auto mr-4 pt-2'>
          <img src='./dots-vertical.png' alt='dots' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
