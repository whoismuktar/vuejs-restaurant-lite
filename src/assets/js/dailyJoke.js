const dailyJoke = async () => {
    let data = await fetch("https://api.jokes.one/jod?category=knock-knock")
    .then(response => response.json())
    .then(response => {
        return response.contents.jokes[0].joke.text;
    })
    return data
}
export default dailyJoke;