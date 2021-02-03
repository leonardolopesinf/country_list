interface Country {
    name: string,
    capital: string,
    subregion: {
        name: string
    },
    area: number,
    population: number,
    flag: {
        _id: number,
        svgFile: string
    }
}

export default Country;