import World from '/images/world-logo.png'

export default function Navbar(){
    return (
        <div className='flex bg-[#F55A5A] py-3 place-content-center gap-2'>
            <img src={World} alt="world logo" />
            <h4 className='text-white'>my travel journal.</h4>
        </div>
    )

}