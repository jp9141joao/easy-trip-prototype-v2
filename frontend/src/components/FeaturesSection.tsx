import ImageExpense from '../assets/blake-wisz-Xn5FbEM9564-unsplash.jpg'
import ImageItinerary from '../assets/estee-janssens-zni0zgb3bkQ-unsplash.jpg'
import ImageToDoList from '../assets/thomas-bormans-pcpsVsyFp_s-unsplash.jpg'
import ImagePiggyBank from '../assets/pxfuel.jpg'


export const FeaturesSection = () => {

    const features = [
        {
            title: 'Expenses',
            description: 'Easily record and categorize your travel expenses in one place. Stay within budget and make smarter financial decisions throughout your trip.',
            url: ImageExpense
        },
        {
            title: 'Itinerary',
            description: 'Create and customize your travel itinerary with ease. Organize activities, accommodations, and transport to maximize your experience.',
            url: ImageItinerary
        },
        {
            title: 'To-Do List',
            description: 'Keep track of tasks before and during your trip. From packing checklists to sightseeing plans, never miss an important detail.',
            url: ImageToDoList
        },
        {
            title: 'My Piggy Bank',
            description: 'Set savings goals and track your progress toward your dream trip. Make budgeting for travel easy and motivating.',
            url: ImagePiggyBank
        },
    ];

    return (
        <div className="px-[1rem] my-4">
            <div>
                <h1 className="text-3xl text-start font-semibold">
                    <strong className='text-[#00AF87]'>
                        Discover</strong> our tools!
                </h1>
            </div>
            <div className="grid my-4">
                {
                    features.map((item: any, index: number) => (
                        <div 
                            key={index}
                            className={`
                                relative 
                                ${
                                    index != 3 ? 'mb-30' : 
                                    'mb-22' 
                                }
                            `}
                        >
                            <div className='relative'>
                                <img 
                                    src={item.url}
                                    className='rounded-2xl'                                
                                />
                            </div>
                            <div className='absolute bg-gray-100 rounded-2xl shadow-md -mt-14 ml-8 p-3 z-50'>
                                <div>
                                    <h1 className="text-xl font-semibold">
                                        { item.title}
                                    </h1>
                                </div>
                                <div>
                                    <p className='text-gray-800'>
                                        { item.description }
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
