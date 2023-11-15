import React, { useEffect, useState } from 'react'



function ArticleBox () {

    const [articles, setArticles] = useState([])

    useEffect(() => {
      getArticles()

    }, [])


    const getArticles = async () => {
      const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
      setArticles(await result.json())
    }



  return (
    <div className="content-boxes">
        {
          articles.map(article => (
            <div key={article.id}>
                <img className="img" src={article.imageUrl}/>  
                <p>{article.category}</p>    
                <h4>{article.title}</h4>
                <span>{article.content}</span>
            </div>
          ))
        }
    </div>
  )
}

export default ArticleBox