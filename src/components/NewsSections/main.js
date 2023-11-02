import React from 'react'
import ShowcaseNews from './ShowcaseNewsSection/showcasenews'
import ArticleNews from './ArticlesNewsSection/articlenews'
import SignupNews from './SignupNewsSection/signupnews'

const main = () => {
  return (
    <main>
        <ShowcaseNews />
        <ArticleNews />
        <SignupNews />
    </main>
  )
}

export default main