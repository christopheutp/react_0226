import { useEffect, useState } from "react";
import { getRandomQuote } from "../api/citation";


export default function useQuote() {

    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(true);
    const [erroMsg, setErrorMsg] = useState(null);

    const getQuote = async () => {
        setLoading(true);
        setErrorMsg(null);
        try {
            const q = await getRandomQuote();
            setQuote(q)
        } catch (err) {
            console.error("Erreur : ", err)
            setErrorMsg("Impossible de charger la citation")
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getQuote();
    },[])

    return {quote,loading,erroMsg,getQuote}

}