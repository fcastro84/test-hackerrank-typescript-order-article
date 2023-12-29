import { useEffect, useState } from 'react'
import './App.css'
import Articles from './components/Articles'
import {ARTICLES as articles} from './mock/articles'
import { Article } from './interfaces/types'

function App() {

  const [orderArticles, setOrderArticles] = useState<Article[]>([])

  const orderUpvotes = () => {
    const newArray = articles.slice()
    return newArray.sort((a,b) => b.upvotes - a.upvotes)
  }

  const orderRecent = () => {
    const newArray = articles.slice()
    return newArray.sort((a,b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      if (aDate > bDate) {
        return -1;
      }
      if (aDate < bDate) {
        return 1;
      }
      return 0;
    })
  }

  useEffect(() => {
   
    setOrderArticles(orderUpvotes())
  
  }, [])

  const handleClickUpvoted = () => {
    setOrderArticles(orderUpvotes())
  }

  const handleClickRecent = () => {
    setOrderArticles(orderRecent())
  }
  
  

  return (
    <>
      <header className='navbar-center bg-neutral text-neutral-content p-2'>
        <h1 className='text-center text-xl text-white'>Sorting Articles</h1>
      </header>
      <nav>
            <div className="m-5 flex gap-2 justify-center items-center p-5">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="btn btn-success text-white" onClick={handleClickUpvoted}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="btn btn-success text-white" onClick={handleClickRecent}>Most Recent</button>
            </div>
      </nav>
      <Articles articles={orderArticles} />
    </>
  )
}

export default App
