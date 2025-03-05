import { JSX, useState } from 'react';
import ImageNewYorkCard from '../../assets/home/new-york-card.jpg';
import ImageNewYorkDialog from '../../assets/home/new-york-dialog.jpg';
import ImageRioDeJaneiroCard from '../../assets/home/rio-de-janeiro-card.jpg';
import ImageRioDeJaneiroDialog from '../../assets/home/rio-de-janeiro-dialog.jpg';
import ImageParisCard from '../../assets/home/paris-card.jpg';
import ImageParisDialog from '../../assets/home/paris-dialog.jpg';
import ImageLondonCard from '../../assets/home/london-card.jpg';
import ImageLondonDialog from '../../assets/home/london-dialog.jpg';
import ImageSantiagoCard from '../../assets/home/santiago-card.jpg';
import ImageSantiagoDialog from '../../assets/home/santiago-dialog.jpg';
import ImageRomeCard from '../../assets/home/rome-card.jpg';
import ImageRomeDialog from '../../assets/home/rome-dialog.jpg';
import ImageBarilocheCard from '../../assets/home/bariloche-card.jpg';
import ImageBarilocheDialog from '../../assets/home/bariloche-dialog.jpg';
import ImageAthensCard from '../../assets/home/athens-card.jpg';
import ImageAthensDialog from '../../assets/home/athens-dialog.jpg';
import { TbHandClick } from "react-icons/tb";
import { 
    Carousel, 
    CarouselContent, 
    CarouselItem 
} from '../ui/carousel';
import { Button } from '../ui/button';
import { Sheet, SheetContent } from '../ui/sheet';

export const PopularPlaces = () => {
    const [ selectedPlace, setSelectedPlace ] = useState<number>(0);
    const [ showSheet, setShowSheet ] = useState<boolean>(false);

    const places = [
        {
            city: 'New York',
            about:
                'New York City, known as the "Big Apple," is a vibrant metropolis famous for its iconic landmarks like Times Square, Central Park, and the Statue of Liberty. ' +
                'Visitors can enjoy Broadway shows, world-class museums, and an incredible culinary scene with everything from street food to Michelin-starred restaurants. ' +
                'A fun fact: In New York, it is illegal to honk your horn unnecessarily, though this rule is widely ignored!',
            cardImage: ImageNewYorkCard,
            sheetImage: ImageNewYorkDialog,
        },
        {
            city: 'Rio de Janeiro',
            about:
                'Rio de Janeiro is a city of breathtaking landscapes, from the iconic Christ the Redeemer statue to the lively Copacabana and Ipanema beaches. ' +
                'It is home to the world-famous Carnival, featuring samba parades and colorful costumes. ' +
                'Food lovers can savor Brazilian barbecue and feijoada. ' +
                'A fun fact: It is illegal to drive a car wearing flip-flops in Rio!',
            cardImage: ImageRioDeJaneiroCard,
            sheetImage: ImageRioDeJaneiroDialog,
        },
        {
            city: 'Paris',
            about:
                'Paris, the "City of Light," is synonymous with romance, art, and fashion. ' +
                'The Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral are must-visit attractions. ' +
                'Enjoy a stroll along the Seine River, sip coffee at a sidewalk café, and indulge in French delicacies like croissants and escargots. ' +
                'A fun fact: In France, it was once illegal to name a pig "Napoleon"!',
            cardImage: ImageParisCard,
            sheetImage: ImageParisDialog,
        },
        {
            city: 'London',
            about:
                'London, known for its rich history and modern culture, is home to landmarks such as Big Ben, the Tower of London, and Buckingham Palace. ' +
                'Enjoy world-class theater in the West End, explore vibrant markets, and savor a traditional English breakfast. ' +
                'A fun fact: It is popularly said that it is illegal to die in the Houses of Parliament!',
            cardImage: ImageLondonCard,
            sheetImage: ImageLondonDialog,
        },
        {
            city: 'Santiago',
            about:
                'Santiago, the capital of Chile, is a city nestled between modernity and tradition, surrounded by the stunning Andes mountains. ' +
                'Discover historic neighborhoods, vibrant markets, and a growing art scene. ' +
                'Enjoy Chilean specialties like empanadas and pastel de choclo. ' +
                'A fun fact: In Santiago, it is illegal to keep the light on in a parked car!',
            cardImage: ImageSantiagoCard,
            sheetImage: ImageSantiagoDialog,
        },
        {
            city: 'Rome',
            about:
                'Rome, the Eternal City, is rich in history and home to landmarks like the Colosseum, Vatican City, and the Trevi Fountain. ' +
                'The Italian capital offers a delicious culinary experience with pasta, pizza, and gelato. ' +
                'A fun fact: In Rome, it is illegal to eat or drink near historic monuments to preserve their beauty!',
            cardImage: ImageRomeCard,
            sheetImage: ImageRomeDialog,
        },
        {
            city: 'Bariloche',
            about:
                'Bariloche, Argentina, is a picturesque town surrounded by the Andes, renowned for its Swiss-style architecture and famous chocolate shops. ' +
                'It is a top destination for outdoor activities like hiking and skiing, with breathtaking natural landscapes. ' +
                'A fun fact: In Argentina, it is illegal to name your child "Messi" to prevent overuse of the football star’s name!',
            cardImage: ImageBarilocheCard,
            sheetImage: ImageBarilocheDialog,
        },
        {
            city: 'Athens',
            about:
                'Athens, the birthplace of democracy, is a city steeped in ancient history with iconic sites like the Acropolis and the Parthenon. ' +
                'Experience rich Greek culture through its lively streets, traditional tavernas, and historic ruins. ' +
                'A fun fact: In Greece, it is illegal to wear high heels at ancient monuments to protect the ruins!',
            cardImage: ImageAthensCard,
            sheetImage: ImageAthensDialog,
        },
    ];

    const renderParagraphs = (text: string): JSX.Element[] => {
        return text
            .split('.')
            .filter(sentence => sentence.trim())
            .map((sentence: string, index: number) => {
                return (
                    <span key={index}>
                        {sentence.trim()}.
                    </span>
                );           
            });
    }
    
    return (
        <div className="px-[1.7em] py-5">
            <div className='grid gap-1'>
                <h1 className="text-4xl font-semibold">
                    <strong className='text-green-theme'>
                        Popular
                    </strong> Places!
                </h1>
                <p className='text-gray-800'>
                    Explore the most popular destinations and plan unforgettable experiences.
                </p>
            </div>
            <div className='my-5'>
                <Carousel className="w-full">
                    <CarouselContent className=''>
                        {
                            places.map((item: any, index: number) => (
                                <CarouselItem 
                                    key={index}
                                    className='basis-[68vw]'
                                    onClick={() => {
                                        setSelectedPlace(index);
                                        setShowSheet(true);
                                    }}
                                >
                                    <div className='relative z-0'>
                                        <img 
                                            src={ item.cardImage }
                                            alt={ item.city }
                                            loading='eager'
                                            className='w-[64vw] h-[122vw] rounded-3xl z-0'
                                        />
                                    </div>
                                    <div className='absolute top-0 pl-[51vw]  py-5 z-10'>
                                        <TbHandClick className='icon-responsive text-white'/>
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
                <Sheet
                    open={showSheet}
                    onOpenChange={(open) => {

                        if (!open) {
                            setSelectedPlace(0);
                            setShowSheet(false);
                        }
                    }}
                    
                >
                    <SheetContent 
                        side='bottom'
                        className='rounded-3xl'
                    >
                        {/*className="h-[calc(var(--vw,1vw)*80)] h-[calc(var(--vh,1vh)*90)] rounded-3xl" */}
                        <div className='grid place-items-start gap-1 px-6 pt-6'>
                                <div>
                                    <h1 className='text-xl font-semibold'>
                                        { places[selectedPlace].city }
                                    </h1>
                                </div>
                                <div>
                                    <p className='text-sm'>
                                        { renderParagraphs(places[selectedPlace].about) }
                                    </p>
                                </div>
                        </div>
                        <div className='w-full px-6 pb-1'>
                            <Button
                                size={'lg'}
                                type="submit"
                                className='w-1/2 font-semibold focus:outline-none'
                            >
                                    Go to this place
                            </Button>
                        </div>
                        <div>
                            <img 
                                src={ places[selectedPlace].sheetImage }
                                alt={ places[selectedPlace].city }
                                loading='eager'
                                className='w-[100vw] h-[50vh] rounded-t-3xl'
                            />
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
            <div className="flex gap-2 py-7">
                <h1 className="text-2xl text-center font-semibold">
                    "No more counting <span className="underline text-green-theme">dollars</span>, we'll be counting <span className="underline text-green-theme inline-flex items-center whitespace-nowrap">stars</span>"
                </h1>
            </div>
        </div>
    )
}

/*
https://www.freepik.com/free-photo/close-up-people-planning-trip_16688728.htm
import { JSX, useState } from 'react';
import ImageNewYorkCard from '../../assets/home/new-york-card.jpg';
import ImageNewYorkDialog from '../../assets/home/new-york-dialog.jpg';
import ImageRioDeJaneiroCard from '../../assets/home/rio-de-janeiro-card.jpg';
import ImageRioDeJaneiroDialog from '../../assets/home/rio-de-janeiro-dialog.jpg';
import ImageParisCard from '../../assets/home/paris-card.jpg';
import ImageParisDialog from '../../assets/home/paris-dialog.jpg';
import ImageLondonCard from '../../assets/home/london-card.jpg';
import ImageLondonDialog from '../../assets/home/london-dialog.jpg';
import ImageSantiagoCard from '../../assets/home/santiago-card.jpg';
import ImageSantiagoDialog from '../../assets/home/santiago-dialog.jpg';
import ImageRomeCard from '../../assets/home/rome-card.jpg';
import ImageRomeDialog from '../../assets/home/rome-dialog.jpg';
import ImageBarilocheCard from '../../assets/home/bariloche-card.jpg';
import ImageBarilocheDialog from '../../assets/home/bariloche-dialog.jpg';
import ImageAthensCard from '../../assets/home/athens-card.jpg';
import ImageAthensDialog from '../../assets/home/athens-dialog.jpg';
import { TbHandClick } from "react-icons/tb";
import { 
    Carousel, 
    CarouselContent, 
    CarouselItem 
} from '../ui/carousel';
import { 
    Dialog, 
    DialogContent, 
    DialogDescription, 
    DialogHeader, 
    DialogTitle 
} from '../ui/dialog';
import { Button } from '../ui/button';

export const PopularPlaces = () => {
    const [ selectedPlace, setSelectedPlace ] = useState<number>(0);
    const [ showDialog, setShowDialog ] = useState<boolean>(false);

    const places = [
        {
            city: 'New York',
            about:
                'New York City, known as the "Big Apple," is a vibrant metropolis famous for its iconic landmarks like Times Square, Central Park, and the Statue of Liberty. ' +
                'Visitors can enjoy Broadway shows, world-class museums, and an incredible culinary scene with everything from street food to Michelin-starred restaurants. ' +
                'A fun fact: In New York, it is illegal to honk your horn unnecessarily, though this rule is widely ignored!',
            cardImage: ImageNewYorkCard,
            sheetImage: ImageNewYorkDialog,
        },
        {
            city: 'Rio de Janeiro',
            about:
                'Rio de Janeiro is a city of breathtaking landscapes, from the iconic Christ the Redeemer statue to the lively Copacabana and Ipanema beaches. ' +
                'It is home to the world-famous Carnival, featuring samba parades and colorful costumes. ' +
                'Food lovers can savor Brazilian barbecue and feijoada. ' +
                'A fun fact: It is illegal to drive a car wearing flip-flops in Rio!',
            cardImage: ImageRioDeJaneiroCard,
            sheetImage: ImageRioDeJaneiroDialog,
        },
        {
            city: 'Paris',
            about:
                'Paris, the "City of Light," is synonymous with romance, art, and fashion. ' +
                'The Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral are must-visit attractions. ' +
                'Enjoy a stroll along the Seine River, sip coffee at a sidewalk café, and indulge in French delicacies like croissants and escargots. ' +
                'A fun fact: In France, it was once illegal to name a pig "Napoleon"!',
            cardImage: ImageParisCard,
            sheetImage: ImageParisDialog,
        },
        {
            city: 'London',
            about:
                'London, known for its rich history and modern culture, is home to landmarks such as Big Ben, the Tower of London, and Buckingham Palace. ' +
                'Enjoy world-class theater in the West End, explore vibrant markets, and savor a traditional English breakfast. ' +
                'A fun fact: It is popularly said that it is illegal to die in the Houses of Parliament!',
            cardImage: ImageLondonCard,
            sheetImage: ImageLondonDialog,
        },
        {
            city: 'Santiago',
            about:
                'Santiago, the capital of Chile, is a city nestled between modernity and tradition, surrounded by the stunning Andes mountains. ' +
                'Discover historic neighborhoods, vibrant markets, and a growing art scene. ' +
                'Enjoy Chilean specialties like empanadas and pastel de choclo. ' +
                'A fun fact: In Santiago, it is illegal to keep the light on in a parked car!',
            cardImage: ImageSantiagoCard,
            sheetImage: ImageSantiagoDialog,
        },
        {
            city: 'Rome',
            about:
                'Rome, the Eternal City, is rich in history and home to landmarks like the Colosseum, Vatican City, and the Trevi Fountain. ' +
                'The Italian capital offers a delicious culinary experience with pasta, pizza, and gelato. ' +
                'A fun fact: In Rome, it is illegal to eat or drink near historic monuments to preserve their beauty!',
            cardImage: ImageRomeCard,
            sheetImage: ImageRomeDialog,
        },
        {
            city: 'Bariloche',
            about:
                'Bariloche, Argentina, is a picturesque town surrounded by the Andes, renowned for its Swiss-style architecture and famous chocolate shops. ' +
                'It is a top destination for outdoor activities like hiking and skiing, with breathtaking natural landscapes. ' +
                'A fun fact: In Argentina, it is illegal to name your child "Messi" to prevent overuse of the football star’s name!',
            cardImage: ImageBarilocheCard,
            sheetImage: ImageBarilocheDialog,
        },
        {
            city: 'Athens',
            about:
                'Athens, the birthplace of democracy, is a city steeped in ancient history with iconic sites like the Acropolis and the Parthenon. ' +
                'Experience rich Greek culture through its lively streets, traditional tavernas, and historic ruins. ' +
                'A fun fact: In Greece, it is illegal to wear high heels at ancient monuments to protect the ruins!',
            cardImage: ImageAthensCard,
            sheetImage: ImageAthensDialog,
        },
    ];

    const renderParagraphs = (text: string): JSX.Element[] => {
        return text
            .split('.')
            .filter(sentence => sentence.trim())
            .map((sentence: string, index: number) => {
                return (
                    <span key={index}>
                        {sentence.trim()}.
                    </span>
                );           
            });
    }
    
    return (
        <div className="px-[1.7em] py-5">
            <div className='grid gap-1'>
                <h1 className="text-4xl font-semibold">
                    <strong className='text-green-theme'>
                        Popular
                    </strong> Places!
                </h1>
                <p className='text-gray-800'>
                    Explore the most popular destinations and plan unforgettable experiences.
                </p>
            </div>
            <div className='my-5'>
                <Carousel className="w-full">
                    <CarouselContent className=''>
                        {
                            places.map((item: any, index: number) => (
                                <CarouselItem 
                                    key={index}
                                    className='basis-[68vw]'
                                    onClick={() => {
                                        setSelectedPlace(index);
                                        setShowDialog(true);
                                    }}
                                >
                                    <div className='relative z-0'>
                                        <img 
                                            src={ item.cardImage }
                                            className='w-[63vw] h-[122vw] rounded-3xl z-0'
                                        />
                                    </div>
                                    <div className='absolute top-0 pl-[51vw]  py-5 z-10'>
                                        <TbHandClick className='icon-responsive text-white'/>
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
                <Dialog
                    open={showDialog}
                    onOpenChange={(open) => {

                        if (!open) {
                            setSelectedPlace(0);
                            setShowDialog(false);
                        }
                    }}
                    
                >
                    <DialogContent className="h-[101vh] w-[101vw] rounded-none">
                        <div className='grid place-items-start mt-[5vh] p-6'>
                            <DialogHeader>
                                <DialogTitle>                        
                                    { places[selectedPlace].city }
                                </DialogTitle>
                                <DialogDescription> 
                                    { renderParagraphs(places[selectedPlace].about) }
                                </DialogDescription>
                                <div className='w-full'>
                                    <Button
                                        size={'lg'}
                                        type="submit"
                                        className='w-full font-semibold'
                                    >
                                            Go to this place
                                    </Button>
                                </div>
                            </DialogHeader>
                            
                        </div>
                        <div>
                            <img 
                                src={places[selectedPlace].dialogImage }
                                className='w-[100vw] h-[140vw] rounded-3xl'
                            />
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}
*/