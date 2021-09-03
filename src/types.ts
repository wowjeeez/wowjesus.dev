export interface BibleQuoteResp {
    reference: string
    verses: {
        book_id: string
        book_name: string
        chapter: number
        verse: number
        text: string
    }[],
    text: string
    translation_id: string
    translation_name: string
    translation_note: string
}