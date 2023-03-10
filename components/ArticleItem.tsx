import Link from 'next/link'
import React from 'react'
import articleStyles from "../styles/Article.module.css"
import { articleType } from "../types/articleType"

export const ArticleItem = (props: { article: articleType }) => {
    const article = props.article

    return (
        <Link href='/article/[id]' as={`/article/${article.id}`}>
            <span className='articleStyles.card'>
                <h3>{article.title}</h3>
                <p>{article.body}</p>
            </span>
        </Link>
    )
}
