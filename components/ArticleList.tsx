import Link from 'next/link'
import React from 'react'
import articleStyles from "../styles/Article.module.css"
import { articleType } from "../types/articleType"
import { ArticleItem } from "../components/ArticleItem"


export const ArticleList = (props: { articles: articleType[] }) => {
    const articles = props.articles
    return (
        <div className={articleStyles.grid}>
            {articles.map((article: articleType) => (
                <ArticleItem key={article.id} article={article} />
                // <h3>{article.title}</h3>
            ))}
        </div>
    )
}
