import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { UserCardGitHub } from './usersGitHub.jsx';

function Input () {

  const { register,formState: {errors}, handleSubmit } = useForm();
  let [target, setTarget] = useState(false)
  let [reposiUser, setReposUser] = useState()
  const [userGitHub, setUserGitHub] = useState({
    nameUser: null,
    profession: null, 
    Followers: null, 
    Following:null,
    repos: null,
    photoProfile: null,
    repositoriosUserGit: null ,
    url_repo: null
  })

  
  
  const onsubmit = async (data, e) => {
    try {
      const response = await fetch(`https://api.github.com/users/${data.name}`);
      const responseRepos = await fetch(`https://api.github.com/users/${data.name}/repos`);
      const userRepos = await responseRepos.json();
  
      reposiUser = userRepos.slice(0, 4);

      const user = await response.json();

      if(response.status === 200) {
        console.log()
        userGitHub.nameUser = user.name;
        userGitHub.photoProfile = user.avatar_url
        userGitHub.profession = user.bio
        userGitHub.Followers = user.followers
        userGitHub.Following = user.following
        userGitHub.repos = user.public_repos 
        reposiUser.forEach(item => {
          userGitHub.repositoriosUserGit = item.name
          userGitHub.url_repo = item.html_url
        })
        setTarget(target = true)
      } else if(response.status != 200) {
        setTarget(target = false)
      }

    } catch (error) {
      setTarget(target = false)
      alert(`El usuario no fue encontrado`)
    }

    e.target.reset()
  }


  return (
    <>
    <form className='flex justify-center mt-32 max-[576px]:mt-10' onSubmit={handleSubmit(onsubmit)}>
      <input type="text" className='h-14 w-6/12 rounded-lg outline-none pl-5 bg-color-input text-xl text-color-text max-[800px]:w-96 max-[800px]:mx-5' placeholder='Search a gitHub user'
      {...register('name', {
        required: 'Nombre requerido',
        pattern: {
          value: true,
          message: 'Nombre inválido'
        }
      })}
      />
    </form>

    <span>
      <h1 className='text-error text-center mt-5 text-xl font-bold tracking-wide'>{errors.name && (errors.name).message}</h1>
    </span>

    <UserCardGitHub
      key = {userGitHub.nameUser}
      nameGit = {userGitHub.nameUser}
      photoProfile = {userGitHub.photoProfile}
      profession = {userGitHub.profession}
      Followers = {userGitHub.Followers}
      Following = {userGitHub.Following}
      repos = {userGitHub.repos}
      condition = {target}
      repositorio = {userGitHub.repositoriosUserGit}
      url_repo = {userGitHub.url_repo}
      />
    </>
  )
}

export { Input } 
