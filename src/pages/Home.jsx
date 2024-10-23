import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import BannerImage from '../assets/banner.jpg'

function Home() {
    const [cities, setCities] = useState([]);
    const [counter, setCounter] = useState(0);
    const [emojis, setEmojis] = useState({});

    const getEmojies = async () => {
        const response = await fetch(`https://api.github.com/emojis/${defaultCategory}`);
        const data = await response.json();
        setEmojis(data);
    }

    const defaultCategory = "flags";
    useEffect(() => {
        const getEmojies = async () => {
            const response = await fetch(`https://api.github.com/emojis/${defaultCategory}`);
            const data = await response.json();
            setEmojis(data);
        }

        getEmojies();
    }, [defaultCategory]);

    const citiesFromItaly = [{
        name: 'Rome',
        description: 'The capital city of Italy, Rome has a rich history that dates back to 753 BC. It is known for its ancient ruins, art, and architecture.',
        location: 'Lazio',
        image: 'https://images.unsplash.com/photo-1676840451091-52e9ee85731c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }, {
        name: 'Venice',
        description: 'Venice is a city in northeastern Italy and the capital of the Veneto region. It is built on more than 100 small islands in a lagoon in the Adriatic Sea.',
        location: 'Veneto',
        image: 'https://plus.unsplash.com/premium_photo-1677646868814-862d6b4a77e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }, {
        name: 'Florence',
        description: 'Florence, capital of Italy’s Tuscany region, is home to many masterpieces of Renaissance art and architecture.',
        location: 'Tuscany',
        image: 'https://plus.unsplash.com/premium_photo-1676652987601-734d5a34633f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }];

    if (citiesFromItaly.length > 0 && cities.length === 0) {
        setCities(citiesFromItaly);
    }

    return (
        <div>
            <Navbar />

            <div class="container mx-auto">
                <img src={BannerImage} alt="" />
            </div>

            <div class="container mx-auto mb-8">
                <h2 class="text-3xl font-semibold mt-8 p-4">Popular Cities in Italy &#128513;</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    {cities.map(city => (
                        <div class="bg-white rounded-lg shadow-lg p-4">
                            <img src={city.image} alt="" class="h-48 w-full object-cover rounded-lg shadow-xl" />
                            <h3 class="text-xl font-semibold mt-4">{city.name}</h3>
                            <p class="text-gray-500">{city.description}</p>
                            <p class="text-blue-500">{city.location}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div class="container mx-auto mb-8">
                <h2 class="text-3xl font-semibold mt-8 p-4">Emojies</h2>
                <div className='flex flex-wrap'>
                    {emojis && Object.keys(emojis).map((emoji, index) => (
                        <div key={index} class="bg-white rounded-lg shadow-lg p-4">
                            < img src={emojis[emoji]} alt="" class="h-10 w-10  object-cover rounded-lg shadow-xl" />

                            <h3 class="text-xl font-semibold mt-4">{emoji}</h3>
                        </div>
                    ))}
                </div>

            </div>




            {/* flex */}
            {/* categories - use onclick (call function getEmogies) - and call the emogies by category API */}
            {/* categories */}
            {/* categories */}







        </div>
    )
}

export default Home