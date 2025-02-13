import { Link } from 'expo-router';
import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import tw from 'twrnc';

const cardsData = [
  {
    id: 1,
    image: require('@/assets/images/smk1.jpg'), // Ganti dengan path gambar yang sesuai
    title: 'Explore the Mountains',
    description: 'Discover breathtaking views and adventurous trails in the heart of nature.',
  },
  {
    id: 2,
    image: require('@/assets/images/smk2.jpg'), // Ganti dengan path gambar yang sesuai
    title: 'Relax at the Beach',
    description: 'Unwind with serene waves, golden sands, and unforgettable sunsets.',
  },
  {
    id: 3,
    image: require('@/assets/images/smk3.jpg'), // Ganti dengan path gambar yang sesuai
    title: 'City Lights Adventure',
    description: 'Experience the vibrant life and iconic landmarks of the bustling city.',
  },
  {
    id: 4,
    image: require('@/assets/images/smk4.jpg'), // Ganti dengan path gambar yang sesuai
    title: 'Journey Through the Forest',
    description: 'Immerse yourself in the tranquility and beauty of lush green forests.',
  },
];

const CardList = () => {
  return (
    <ScrollView style={tw`flex-1 bg-gray-100`}>
      <View style={tw`p-4`}>
        <Text style={tw`text-2xl font-bold mb-4`}>Discover Destinations</Text>
        {cardsData.map((card) => (
          <View
            key={card.id}
            style={tw`bg-white rounded-lg shadow-md mb-4 overflow-hidden`}
          >
            <Image
              source={card.image}
              style={tw`w-full h-40`}
              resizeMode="cover"
            />
            <View style={tw`p-4`}>
              <Text style={tw`text-lg font-bold mb-2`}>{card.title}</Text>
              <Text style={tw`text-gray-500 mb-4`}>{card.description}</Text>
              <TouchableOpacity style={tw`bg-blue-500 py-2 px-4 rounded-lg`}>
                <Link href={"/project/detail"}>
                    <Text style={tw`text-white font-bold text-center`}>Learn More</Text>
                </Link>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default CardList;
