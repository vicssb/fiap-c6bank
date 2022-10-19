import { type } from "os"

type TypeDb = {
    id: number,
    date: string,
    description: string,
    amout: number,
    type: string,
    operation ?: string
}

export default TypeDb;