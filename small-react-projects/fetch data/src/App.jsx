import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {

  const [posts, setPosts] = useState();
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/posts");
    let posts = await data.json();
    setPosts(posts.posts);
  }

  return (
    <>
      <div>
        <ul>
          {
            posts && posts.map((item, index) => (
              <div key={index}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <ul>
                  {
                    item.tags.map((tag, tagIndex) => (
                      <li key={tagIndex}>{tag}</li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default App
