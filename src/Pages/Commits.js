import React,  { useState } from 'react'

const Commits = () => {
  const [details, setDetails] = useState({
    username: '',
    title: '',
    description: '',
    commit: '',
    link: '',
  })
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails((prev) => {
      return{...prev, [name]: value}
    })
  };

  console.log(details);
  return (
    <form>
      <h3>Username :</h3> <input type="text" name='username' onChange={handleChange} />
      <h3>Title :</h3> <input type="text" name='title' onChange={handleChange} />
      <h3>Description :</h3> <input type="text" name='description' onChange={handleChange} />
      <h3>Commit :</h3> <textarea name='commit' onChange={handleChange} ></textarea>
      <h3>Link :</h3> <textarea name='link' onChange={handleChange}> </textarea>
      <button type="submit">Push Commit</button>
    </form>
  )
}

export default Commits