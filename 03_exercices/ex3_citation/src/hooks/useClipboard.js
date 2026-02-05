

export default function useClipboard(){
    const copy = async (text) => {
        try{
            await navigator.clipboard.writeText(text);
        }catch (e){
            console.error("Erreur lors de la copie !!!!")
        }
    }
    return {copy}
}