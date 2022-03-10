import ContainerBlock from '../components/ContainerBlock'

const Pokemon = ({ pokeman }) => {
    console.log(pokeman)
    return null
}

export default Pokemon

// To tell the page it's server side rendered, we export this function
export const getServerSideProps = async ({ query }) => {
    const id = query.id

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const pokeman = await res.json()

        return {
            props: {
                pokeman: {
                    ...pokeman,
                    image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id + 252}.png`
                }
            }
        }
    }
    catch (err) {
        console.log('Error getting individual Pokémon', err)
    }
}