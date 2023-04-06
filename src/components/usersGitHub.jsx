import React, { Children } from 'react'

function UserCardGitHub({nameGit, profession, Followers, Following, repos, photoProfile, condition, repositorio, url_repo}) {
  return (
    <>
      <div className = {condition ? 'flex mt-12 bg-color-input max-w-3xl m-auto rounded-2xl p-14 max-[583px]:flex-wrap max-[583px]:px-8 max-[583px]:justify-center max-[583px]:text-center max-[583px]:mx-5 max-[770px]:mx-5' : 'opacity-0'}>
        <img className='object-cover rounded-full mr-10 h-36 border-8 max-[583px]:m-0 border-color-body'src={ photoProfile } alt="profile"/>
        <div>
          <h1 className='text-2xl font-bold text-color-text'>{ nameGit }</h1>
          <p className='text-color-text opacity-70 my-3 text-xl'>{ profession }</p>
          <div className='flex gap-x-5 justify-between text-color-text max-[583px]:flex-col'>
            <h1 className='opacity-90 max-[583px]:mb-2'>{Followers} <span className='font-bold'>Followers</span></h1>
            <h1 className='opacity-90 max-[583px]:mb-2'>{ Following } <span className='font-bold'>Following</span></h1>
            <h1 className='opacity-90 max-[583px]:mb-2'>{ repos } <span className='font-bold'>Repositories</span></h1>
          </div>
          <div className='mt-2 max-w-sm'>
            <h1 className='text-color-text opacity-90 text-small font-bold mb-1 tracking-wide'>Repository:</h1>
            <a className='bg-color-body text-color-text px-2 font-bold py-1 text-sm' target="_blank" href={url_repo}>{ repositorio }</a>
          </div>
        </div>
      </div>
    </>
  )
}

export  { UserCardGitHub }
