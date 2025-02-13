import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import tw from 'twrnc';

const TwoRowGrid = () => {
  const items = [
    { id: 1, title: 'Mountain', image: require('@/assets/images/smk1.jpg') },
    { id: 2, title: 'Beach', image: require('@/assets/images/smk1.jpg') },
    { id: 3, title: 'Forest', image: require('@/assets/images/smk1.jpg') },
    { id: 4, title: 'Desert', image: require('@/assets/images/smk1.jpg') },
    { id: 5, title: 'City', image: require('@/assets/images/smk1.jpg') },
    { id: 6, title: 'Village', image: require('@/assets/images/smk1.jpg') },
    { id: 7, title: 'Desert', image: require('@/assets/images/smk1.jpg') },
    { id: 8, title: 'City', image: require('@/assets/images/smk1.jpg') },
    { id: 9, title: 'Village', image: require('@/assets/images/smk1.jpg') },
    { id: 10, title: 'Desert', image: require('@/assets/images/smk1.jpg') },
    { id: 11, title: 'City', image: require('@/assets/images/smk1.jpg') },
    { id: 12, title: 'Village', image: require('@/assets/images/smk1.jpg') },
  ];

  return (
    <ScrollView style={tw`flex-1 bg-gray-100`}>
      <Text style={tw`text-2xl font-bold text-center mt-4 mb-6`}>Photo Grid</Text>

      <View style={tw`flex flex-col px-4`}>
        {/* Row 1 */}
        <View style={tw`flex flex-row justify-between mb-4`}>
          {items.slice(0, 3).map((item) => (
            <TouchableOpacity key={item.id} style={tw`w-[30%]`}>
              <View style={tw`bg-white rounded-lg overflow-hidden shadow-md`}>
                <Image
                  source={item.image}
                  style={tw`w-full h-32`}
                  resizeMode="cover"
                />
                <Text style={tw`text-center mt-2 text-sm font-bold`}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Row 2 */}
        <View style={tw`flex flex-row justify-between`}>
          {items.slice(3, 6).map((item) => (
            <TouchableOpacity key={item.id} style={tw`w-[30%]`}>
              <View style={tw`bg-white rounded-lg overflow-hidden shadow-md`}>
                <Image
                  source={item.image}
                  style={tw`w-full h-32`}
                  resizeMode="cover"
                />
                <Text style={tw`text-center mt-2 text-sm font-bold`}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
         {/* Row 2 */}
         <View style={tw`flex flex-row justify-between`}>
          {items.slice(6, 9).map((item) => (
            <TouchableOpacity key={item.id} style={tw`w-[30%]`}>
              <View style={tw`bg-white rounded-lg overflow-hidden shadow-md`}>
                <Image
                  source={item.image}
                  style={tw`w-full h-32`}
                  resizeMode="cover"
                />
                <Text style={tw`text-center mt-2 text-sm font-bold`}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default TwoRowGrid;
