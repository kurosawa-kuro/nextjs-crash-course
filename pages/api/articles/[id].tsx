import { NextApiRequest, NextApiResponse } from "next"
type Data = {
    id: string,
    title: string,
    excerpt:
    string,
    body:
    string,
}
import { articlesData } from "../../../data"

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | { message: string; }>
) {
    // console.log(req.query)
    const id = req.query.id
    const articles: Data[] = articlesData
    const filtered = articles.filter((article) => article.id === id)
    console.log({ filtered })
    if (filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res.json({ message: `Article with the id of ${id} is not found` })
    }
}