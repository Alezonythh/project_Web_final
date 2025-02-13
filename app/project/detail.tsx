import { Link } from 'expo-router';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const DetailPage = () => {
  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Gambar Header */}
      <Image
        source={require('@/assets/images/smk1.jpg')} // Ganti dengan path gambar Anda
        style={tw`w-full h-60`}
        resizeMode="cover"
      />
      {/* Konten Detail */}
      <View style={tw`p-4`}>
        <Text style={tw`text-2xl font-bold mb-2`}>Explore the Mountains</Text>
        <Text style={tw`text-gray-500 mb-4`}>
          Discover breathtaking views and adventurous trails in the heart of nature. Hiking and camping in the mountains
          offer unmatched serenity and adventure. Experience majestic landscapes and connect with nature like never
          before.
        </Text>
        <TouchableOpacity style={tw`bg-blue-500 py-2 px-4 rounded-lg mt-4`}>
            <Link href={"/project/karya"}>
                <Text style={tw`text-white font-bold text-center`}>Go Back</Text>
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailPage;
