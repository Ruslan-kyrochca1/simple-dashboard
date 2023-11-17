const URL = 'https://jsonplaceholder.typicode.com/todos' 

export default async function request(){
    try {
        const response = await fetch(URL)
        const clientData = await response.json()
        let data = clientData.reduce((accumulator, currentValue) => {
            if(currentValue.userId === accumulator.length){
                accumulator[accumulator.length - 1].card.push({
                    id: currentValue.id,
                    text: currentValue.title
                })
                return accumulator
            } else{
                accumulator.push( {
                    title: `some title${currentValue.userId}`,
                    card: [],
                    userId: currentValue.userId
                })
                return accumulator
            }
            
        },[])
        return data
    } catch (error) {
        return console.log("Error: ", error)
    }
}
