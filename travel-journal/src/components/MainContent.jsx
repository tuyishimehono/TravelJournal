import Location from '/images/location.svg'
export default function MainContent(props){
    return (
        <div className="flex gap-5 py-8 px-10">
            <img src={props.item.imageUrl} alt="" />
            <div className="flex flex-col flex-wrap gap-4">
                <div className="flex gap-3"> 
                    <div className='flex flex-wrap gap-2'>
                        <img src={Location} alt="location icon" />
                        <h4 className='text-base font-medium'>{props.item.location}</h4>
                    </div>
                    <a href={props.item.googlMapsUrl} className='underline text-stone-700'>View google maps</a>
                </div>
                <div>
                    <h1 className='text-3xl font-bold'>{props.item.title}</h1>
                </div>
                <div>
                    <p className='text-sm font-bold'>{props.item.startDate} - {props.item.endDate}</p>
                </div>
                <div>
                    <p className='w-1/2 text-sm'>{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}