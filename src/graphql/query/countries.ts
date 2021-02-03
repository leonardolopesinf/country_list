import { DocumentNode, gql } from "@apollo/client"

const getCountries: DocumentNode = (
    gql`
        query GetCountries{
            Country (orderBy: name_asc){
                name,
                capital,
                population,
                area,
                flag {
                    _id,
                    svgFile
                },
                subregion {
                    name
                }
            }
        }
    `
)

export {
    getCountries
}