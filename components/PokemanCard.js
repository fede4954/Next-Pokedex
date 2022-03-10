import Image from 'next/image'

const PokemanCard = ({ pokeman }) => {
    return (
        <div className="flex items-center p-4 rounded bg-gray-100 mb-4">
            <Image src={pokeman.image} alt={pokeman.name} width="150" height="150" layout="intrinsic" />

            <span className="text-xl capitalize">{pokeman.number} - {pokeman.name}</span>
        </div>
    )
}

export default PokemanCard