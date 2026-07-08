const getData = async (url) => {

    const response = await fetch(url);
    const data = await response.json();

    return data;

};



const main = async ( ) => {

    try {
        let data = await getData("https://rickandmortyapi.com/api/character");
        console.log(data);
    } catch (error) {
        console.log("error:", error);
    }

}
main();