const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const fetchCocktail = async () => {
    try {
        console.log("Fetching data");
        const response = await fetch(url);
        const data = await response.json();
        console.log("Fetching success");
        console.log(data);
        return data.drinks;
    } catch (error) {
        throw new Error(error.message);
    }
}

