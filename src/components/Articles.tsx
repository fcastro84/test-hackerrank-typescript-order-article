import { Article } from "../interfaces/types"

interface ArticleProps {
    articles: Article[]
}

const Articles = ({articles}: ArticleProps) => {
  return (
    <main className="flex justify-center card w-4/5 bg-base-100 shadow-xl mx-auto overflow-x-auto">
            <table className="table">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                    {
                        articles.map( element => {
                            return (
                                <tr data-testid="article" key={element.title}>
                                    <td data-testid="article-title">{element.title}</td>
                                    <td data-testid="article-upvotes">{element.upvotes}</td>
                                    <td data-testid="article-date">{element.date}</td>
                                </tr>
                            )
                        })
                    }
                
                </tbody>
            </table>
        </main>
  )
}

export default Articles