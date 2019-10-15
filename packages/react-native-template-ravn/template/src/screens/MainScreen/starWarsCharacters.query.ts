import gql from 'graphql-tag'

const StarWarsCharactersQuery = gql`
  query StarWarsCharacters {
    allPersons {
      id
      name
      gender
      birthYear
      skinColor
      eyeColor
      hairColor
      films {
        title
      }
    }
  }
`

export default StarWarsCharactersQuery
