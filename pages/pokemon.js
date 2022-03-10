import ContainerBlock from '../components/ContainerBlock'
import Link from 'next/link'
import Image from 'next/image'


const Pokemon = ({ pokeman }) => {
    return (
        <ContainerBlock title={pokeman.name[0].toUpperCase() + pokeman.name.slice(1)}>
            <div className="bg-gray-100 p-4 rounded">
                <h1 className="text-4xl mb-2 text-center capitalize font-semibold">{pokeman.name}</h1>

                <div className="text-center">
                    <Image src={pokeman.image} alt={pokeman.name} width="250" height="250" layout="intrinsic" />
                </div>

                <p>
                    <span className="font-semibold mr-2">Weight:</span> {Math.round((pokeman.weight * 0.1) * 10) / 10} kg
                </p>

                <p>
                    <span className="font-semibold mr-2">Height:</span> {Math.round((pokeman.height * 0.1) * 10) / 10} m
                </p>

                <h2 className="text-2xl mt-6 mb-2 font-semibold">Types</h2>
                {pokeman.types.map((type, index) => {
                    return <p key={index + Date.now()} className="capitalize">{type.type.name}</p>
                })}

                <Link href="/">
                    <a><p className="text-xl text-center underline">Home</p></a>
                </Link>
            </div>

        </ContainerBlock>
    )
}

export default Pokemon


// To tell Next the page is server side rendered, we export this function
export const getServerSideProps = async ({ query }) => {
    const id = query.id

    
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const pokeman = await res.json()


        return {
            props: {
                pokeman: {
                    ...pokeman,
                    image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`
                }
            }
        }
    }
    catch (err) {
        console.log('Error getting individual Pokémon', err)
    }
}