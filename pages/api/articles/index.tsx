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
    res: NextApiResponse<Data[]>
) {
    const articles: Data[] = articlesData

    res.status(200).json(articles)
}