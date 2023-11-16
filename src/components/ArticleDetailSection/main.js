import React from 'react'
import ArticleDetails from './ArticleDetails/ArticleDetails'
import ShowcaseArticle from './ShowcaseArticleSection/ShowcaseArticle'
import ArticleNews from './ArticleNewsSection/ArticleNews'

const main = () => {
  return (
    <div>
        <ShowcaseArticle />
        <ArticleDetails />
        <ArticleNews />
    </div>
  )
}

export default main