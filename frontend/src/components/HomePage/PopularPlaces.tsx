import ImageNewYork from '../../assets/home/popular-places/new-york.jpg';
import ImageRioDeJaneiro from '../../assets/home/popular-places/rio-de-janeiro.jpg';
import ImageParis from '../../assets/home/popular-places/paris.jpg';
import ImageLondres from '../../assets/home/popular-places/londres.jpg';
import ImageSantiago from '../../assets/home/popular-places/santiago.jpg';//
import ImageRome from '../../assets/home/popular-places/rome.jpg';
import ImageBariloche from '../../assets/home/popular-places/bariloche.jpg';
import ImageAthens from '../../assets/home/popular-places/athens.jpg';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';

export const PopularPlaces = () => {

    const places = [
        {
            city: 'New York',
            image: ImageNewYork
        },
        {
            city: 'Rio de Janeiro',
            image: ImageRioDeJaneiro
        },
        {
            city: 'Paris',
            image: ImageParis
        },
        {
            city: 'Londres',
            image: ImageLondres
        },
        {
            city: 'Santiago',
            image: ImageSantiago
        },
        {
            city: 'Rome',
            image: ImageRome
        },
        {
            city: 'Bariloche',
            image: ImageBariloche
        },
        {
            city: 'Athens',
            image: ImageAthens
        },
    ];
    

    return (
        <div className="px-[1.7em] py-5">
            <div>
                <h1 className="text-4xl font-semibold">
                    Popular <strong className='text-green-theme'>
                                Places!
                            </strong> 
                </h1>
            </div>
            <div className='my-5'>
                <Carousel className="w-full max-w-xs">
                    <CarouselContent className=''>
                        {
                            places.map((item: any, index: number) => (
                                <CarouselItem 
                                    key={index}
                                    className='relative basis-[3]'
                                >
                                    <div className='relative z-0'>
                                        <img 
                                            src={ item.image }
                                            className='w-[14em] h-[26em] rounded-3xl z-0'
                                        />
                                    </div>
                                    <div className='absolute bottom-0 z-50 p-4'>
                                        <h1 className='text-3xl font-semibold text-white z-50'>
                                            { item.city }
                                        </h1>
                                    </div>
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}