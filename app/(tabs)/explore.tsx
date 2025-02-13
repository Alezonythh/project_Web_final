import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import tw from "twrnc";
import { Link } from 'expo-router';

const images = [
  require('@/assets/images/nashatbk.jpeg'),
  require('@/assets/images/smk1.jpg'),
  require('@/assets/images/smk2.jpg'),
  require('@/assets/images/smk3.jpg'),
  require('@/assets/images/smk4.jpg'),
];

const UserProfile = () => {
  return (
    <View style={tw`flex-1 bg-gray-100`}>
      {/* Header Section */}
      <View style={tw`items-center bg-white py-5 rounded-b-3xl`}>
        <Image
          source={require('@/assets/images/smk.png')}
          style={tw`w-50 h-32 mt-5`}
        />
        <Text style={tw`text-xl font-bold mt-2`}>SMK PESAT IT XPRO</Text>
        <Text style={tw`text-gray-500 text-sm mt-1`}>UI/UX Designer | Daily UI</Text>

        {/* Social Icons */}
        <View style={tw`flex-row mt-3`}>
          <AntDesign name="wechat" size={24} style={tw`text-blue-500 mx-2`} />
          <AntDesign name="twitter" size={24} style={tw`text-pink-600 mx-2`} />
          <AntDesign name="github" size={24} style={tw`text-blue-700 mx-2`} />
          <AntDesign name="instagram" size={24} style={tw`text-blue-700 mx-2`} />
        </View>

        {/* Stats Section */}
        <View style={tw`flex-row justify-around w-[90%] my-5`}>
          <View style={tw`items-center`}>
            <Text style={tw`text-lg font-bold`}>542</Text>
            <Text style={tw`text-gray-500 text-sm`}>DKV</Text>
          </View>
          <View style={tw`items-center`}>
            <Text style={tw`text-lg font-bold`}>98K</Text>
            <Text style={tw`text-gray-500 text-sm`}>TKJ</Text>
          </View>
          <View style={tw`items-center`}>
            <Text style={tw`text-lg font-bold`}>100K</Text>
            <Text style={tw`text-gray-500 text-sm`}>RPL</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={tw`flex-row mt-5`}>
          <TouchableOpacity style={tw`bg-gray-300 py-2 px-4 rounded-lg mr-3`}>
            <Link href={"/project/karya"}>
              <Text style={tw`text-black font-bold`}>Karyaa Terbaik</Text>
            </Link>
          </TouchableOpacity>
          <TouchableOpacity style={tw`bg-blue-500 py-2 px-4 rounded-lg`}>
          <Link href={"/siswa/murid"}>
            <Text style={tw`text-white font-bold`}>Siswa XI RPL 1</Text>
          </Link>
          </TouchableOpacity>
        </View>
      </View>

      {/* Gallery Section */}
      <ScrollView>
        <View style={tw`flex-row flex-wrap justify-start p-4`}>
          {images.map((img, index) => (
            <Image
              key={index}
              source={img}
              style={tw`w-24 h-24 m-2 rounded-lg`}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default UserProfile;
