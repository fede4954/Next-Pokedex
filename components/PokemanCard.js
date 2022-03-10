import Image from 'next/image'

const PokemanCard = ({ pokeman }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <Image src={pokeman.image} alt={pokeman.name} width="250" height="250" layout="intrinsic" />

            <span className="text-2xl">{pokeman.number} - {pokeman.name[0].toUpperCase() + pokeman.name.slice(1)}</span>
        </div>
    )
}

export default PokemanCard