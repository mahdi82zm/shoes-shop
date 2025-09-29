'use client';




interface ProductCartProps{
    id:number;
    name:string;
    description:string;
    price:number;
    image:string;
}

export default function ProductCart({id,name,description,price,image}:ProductCartProps){
    return (
        <div className={`flex flex-col items-center w-1/4 mb-36 bottom-28`}>
            <img className="rounded-3xl border-8 border-white" src={image} alt={name} />
            <h3 className="font-[500] py-4 text-xl">{name}</h3>
            <button className="bg-[#232321] text-white w-full rounded-xl p-3">View Product - <span className="text-[#FFA52F]">${price}</span> </button>

        </div>
    )
}