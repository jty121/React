import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function ArticleBox () {
    const [articles, setArticles] = useState([])

    useEffect(() => {
      getArticles()     //istället för att en knapp triggar igång hämtningen från API, kör funktionen i din useEffect som en sidoeffekt = renderas ut direkt

    }, [])    //viktigt! glöm aldrig din [] när du kör useEffect. Kommer rendera ut saker i en evighetsloop...


      const getArticles = async () => {
      const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
      
        if (result.status === 200)
          setArticles(await result.json())

        if (result.status === 400)
          console.error('Something went wrong')
      }

      const publishDate = (dateString) => {
        if (dateString) {
          return dateString.split('T')[0]  //delat strängen vid T för att ta bort klockslaget
          }
          return '';
      }


  return (
    <div className="content-boxes">
        {
          articles.map(article => (  
            <Link key={article.id} to={`/newsdetails/${article.id}`}>
                <img className="img" src={article.imageUrl} alt=""/>  
                <p>{article.category}</p>    
                <h4>{article.title}</h4>
                <span>{article.content}</span>
                <div className="color-box">
                  <p className="date-box">{publishDate(article.published)}</p>
                </div>
            </Link>
          ))
        }
    </div>
  )
}

export default ArticleBox