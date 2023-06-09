import axios from 'axios';

export const consulta = async (ingredients, ingredientsSelected, callbackConsulta) => {
    let listIngredients = ''
    ingredients.data.forEach(data => {
        data.forEach(ingredient => {
            if (ingredientsSelected.includes(ingredient.id)) listIngredients += ingredient.name + ', '
        })
    });
    let config = {
        headers: {
            Authorization: `Bearer ${process.env.OPEN_AI_AUTH}`,
        }
    }
    callbackConsulta('loading')
    axios.post('https://api.openai.com/v1/completions', {
        model: "text-davinci-003",
        prompt: `Generame una receta que utilice algunos de estos ingredientes: ${listIngredients} puedes agregar ingredientes que no estan en la lista, quiero que la respuesta este escrita en formato markdown`,
        temperature: 1,
        max_tokens: 1000
    }, config)
        .then(({ data }) => {
            if (data.choices && data.choices.length > 0) callbackConsulta(data.choices[0].text)
        })
}