import './ArticleDetails.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


import img_oval from '../../../assets/images/Oval.png';
import img_quotes from '../../../assets/images/quotes.png';
import img_zoomout from '../../../assets/images/zoom-out.png';

const ArticleDetails = () => {

    const [articles, setArticles] =useState({})
    const {id} = useParams()


    useEffect(() => {
        getArticles()
    }, [])

        const getArticles = async () => {
            if (id !== '') {
                const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`)

            if (result.status === 200) 
                setArticles(await result.json())

            if (result.status === 400) 
                console.error('something went wrong')
            }
        }

        const publishDate = (dateString) => {
            return dateString.split('T')[0]   //delat strängen vid T för att ta bort klockslaget
        }

  return (
        <div className="news">
            <div className="container">
                <div className="news-title">
                        <h1>{articles.title}</h1> 
                    <div className="title-text">
                        <div>
                            <p>{publishDate(articles.published)}</p>
                        </div>
                            <img src={img_oval} alt=""/>
                        <div>
                            <p>{articles.category}</p>
                        </div>
                            <img src={img_oval} alt=""/>
                        <div className="title-text">
                            <p>{articles.author}</p>
                        </div> 
                    </div>     
                </div>      
                <div className="boxes">
                        <div className="box">
                            <img src={articles.imageUrl} alt=""/>
                            <div className="text-content">
                                <p>
                                    {articles.content}
                                </p>
                                <p>
                                    Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                                </p>
                                <p>   
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. 
                                </p>
                                <p> 
                                    Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
                                    Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                                </p>  
                            </div>
                        </div>
                    <div className="search-articles">
                            <div className="search-box">
                                <input type="text" placeholder=" Type to search..."/>
                               <img src={img_zoomout} alt=""/>
                            </div>
                        <div className="content">
                            <div className="content-box">
                                <h4>Recent Posts</h4>
                                <h5>How To Blow Through Capital At <br/>
                                     An Incredible Rate</h5>
                                <p>Jan 14, 2020</p>
                            </div>
                            <div className="content-box">
                                <h5>Design Studios That Everyone Should <br/>
                                    Know About? </h5>
                                <p>Jan 14, 2020</p>
                            </div>
                            <div className="content-box">
                                <h5>How did we get 1M+ visitors in 30 days <br/>
                                    without anything!</h5>
                                <p>Jan 14, 2020</p>
                            </div>
                            <div className="content-box-last">
                                <h5>Figma On Figma: How We Built Our <br/>
                                    Website Design System</h5>
                                <p>Jan 14, 2020</p>
                            </div>
                        </div>
                        <div className="categories">
                            <div>
                                <h4>Categories</h4>
                            </div>
                            <div className="categories-posts">
                                <div className="posts-box">
                                    <h5>Technology</h5>
                                    <p>-  20 Posts</p>
                                </div>
                                <div className="posts-box">
                                    <h5>Freelancing</h5>
                                    <p>-  07 Posts</p>
                                </div>
                                <div className="posts-box">
                                    <h5>Writing</h5>
                                    <p> -  16 Posts</p>
                                </div>
                                <div className="posts-box">
                                    <h5>Marketing</h5>
                                    <p> -  11 Posts</p>
                                </div>
                                <div className="posts-box">
                                    <h5>Business</h5>
                                    <p>  -  35 Posts</p>
                                </div>
                                <div className="posts-box">
                                    <h5>Education</h5>
                                    <p>  -  14 Posts</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div>
                    <div>
                        <div className="quote-text">
                            <img src={img_quotes} alt=""/>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.</p>
                        </div>
                        <div className="text">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
                        </div>
                    </div>
                    <div className="btn-articles">
                        <button>Digitalization</button>
                        <button>School</button>
                        <button>IT</button>
                        <button>Design</button>
                        <button>Work</button>
                        <button>Tech</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ArticleDetails