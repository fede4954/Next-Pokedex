import Link from 'next/link'
import PokemanCard from './PokemanCard'


const PokemonList = ({ pokemon }) => {
    return (
        <ul>
            {pokemon.map((pokeman, index) => {
                return <li key={index + Date.now()}>
                    <Link href={`/pokemon?id=${index + 252}`} passHref>
                        <PokemanCard pokeman={{ ...pokeman, number: index + 252 }} />
                    </Link>
                </li>
            })}
        </ul>
    )
}

export default PokemonList