import ContainerBlock from '../components/ContainerBlock'
import PokemonList from '../components/PokemonList'

const Home = ({ pokemon }) => {
  return (
    <ContainerBlock title="Next.js Pokédex">
      <h1 className="text-4xl mb-8 text-center font-semibold">Next.js Pokédex</h1>

      <PokemonList pokemon={pokemon} />
    </ContainerBlock>
  )
}

export default Home

// By defining getStaticProps, Next knows its a static page. At build time it will
// run this function, grab the data from the Pokémon API and then pass data to the
// index page
export const getStaticProps = async () => {
  try {
    // Fetch 135 Pokémon starting by 251 (251 is excluded)
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=135&offset=251')
    // Destructure results directly from the response
    const { results } = await res.json()

    const pokemon = results.map((result, index) => {
      return {
        ...result,
        // This will return 252 for the first Pokémon which is number 252 and so on
        image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${(index + 252).toString()}.png`
      }
    })

    return {
      props: { pokemon }
    }
  }
  catch (err) {
    console.log('Error fetching Pokémon from the API:', err)
  }
}