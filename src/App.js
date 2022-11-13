import { useEffect } from "react"; 

const Api_URL = 'http://www.ombdapi.com?apikey=ace193a0'
const App = () => {   
const searchMovies = async (title) => {

    const response = await fetch(`${Api_URL}&s=${title}`)
}
    useEffect(() => {

    }, [])

    return (
        <h1 className="bg-gray-200 text-7xl flex justify-center flex-col items-center">App</h1>
    )
}

export default App;