import { Center, Box, Text, Skeleton  } from "@chakra-ui/react"
import {useEffect, useState} from "react";
import {BibleQuoteResp} from "../../types";
import {randomPass} from "../../utils/randompass"

export default function Landing() {
    const [quote, setQuote] = useState<string>()
    const [ref, setRef] = useState<string>()
    const [fetchedBible, setFetchedBible] = useState(false)
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        if (!fetchedBible) {
            fetch(`https://bible-api.com/${randomPass()}`).then(r =>r.json()).then((data: BibleQuoteResp) => {
                setLoaded(true)
                setFetchedBible(true)
                setQuote(data.text.replace(/\n/g, ""))
                setRef(data.reference)
            }).catch(err => {
                setLoaded(true)
                setQuote("His bones are as strong pieces of brass; his bones are like bars of iron.") //smart fallback
                setRef("Old Testament")
            })
        }
    }, [quote, ref, setFetchedBible, loaded])

    return (
            <Center bg="tomato" h="100px" color="white">
                <Box bg="tomato">
                    <Skeleton isLoaded={loaded} width="500px">
                            <Text as="i" textDecor="strong">"{quote}"</Text>  <br/>
                            <Text as="i" align="center">/{ref}/</Text>
                    </Skeleton>
                </Box>
            </Center>
    )
}