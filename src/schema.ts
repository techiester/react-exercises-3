import { gql } from "@apollo/client";


const GET_COUNTRY = gql`
query getCountry($code: ID!) {
  country(code: $code) {
    name
    code
    emoji
    emojiU
    currency
    languages {
      code
      name
    }
  }
}
`;

const GET_CONTINENT = gql`
query getContinent($code: ID!) {
  continent(code: $code) {
    name
    countries{
      name
      code
    }
  }
}
`;
export {
  GET_COUNTRY,
  GET_CONTINENT
}