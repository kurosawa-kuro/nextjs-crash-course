import { server } from '../../../config'
import { Arima } from '@next/font/google'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { articleType } from "../../../types/articleType"

const article = (props: {
    article: articleType
}) => {
    const article = props.article

    return (
        <>
            <h1>{article.title}</h1>
            <p>{article.title}</p>
            <br />
            <Link href='/'>Go Back</Link>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
    const res = await fetch(`${server}/api/articles/${params!.id}`)

    const article = await res.json()

    return { props: { article } };
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`)

    const articles: articleType[] = await res.json()

    const ids: number[] = articles.map((article) => article.id)

    const paths: {
        params: {
            id: string;
        };
    }[] = ids.map((id) => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false
    };
}


export default article