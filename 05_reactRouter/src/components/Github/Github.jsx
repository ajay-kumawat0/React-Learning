// import React, { useEffect, useState } from 'react'
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([])
  // useEffect(() => {
  //  fetch('https://api.github.com/users/ajay-kumawat0')
  //  .then(response => response.json())
  //  .then(data => {
  //     console.log(data);
  //     setData(data)
  //  })
  // }, [])

  return (
    <div className="my-5 max-w-md mx-auto bg-white shadow-2xl rounded-lg overflow-hidden relative border-separate">
      <div className="relative">
        <img
          id="avatar"
          src={data.avatar_url}
          alt="User Avatar"
          className="h-auto w-full object-cover"
        />
      </div>
      <div id="userDetails" className="text-center px-6 py-4">
        <h3 id="username" className="text-xl font-semibold text-gray-800"></h3>
        <p id="bio" className="text-sm font-medium text-gray-600"></p>
        <div className="flex justify-center mt-4">
          <div>
            <p className="text-lg font-medium text-orange-700 ">{data.name}</p>
            <p className="text-xs text-gray-600">{data.login}</p>
          </div>

        </div>
        <div className="flex justify-center mt-8">
          <div>
            <p className="text-sm text-gray-600">Followers</p>
            <p id="followers" className="text-lg font-semibold text-gray-800">{data.followers}</p>
          </div>
          <div className="ml-6">
            <p className="text-sm text-gray-600">Repositories</p>
            <p
              id="repositories"
              className="text-lg font-semibold text-gray-800"
            >{data.public_repos}</p>
          </div>
        </div>
      </div>
      <a
        href="#"
        id="githubcorner"
        className="github-corner"
        aria-label="View source on GitHub"
      >
      </a>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/ajay-kumawat0");
  return response.json();
};
