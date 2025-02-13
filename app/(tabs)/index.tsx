// import { Image, StyleSheet, Platform, View, Text,  } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import { SafeAreaFrameContext, SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import { AntDesign } from '@expo/vector-icons';

// export default function HomeScreen() {
//   return (
//       <SafeAreaView>
//         <View style={{ alignItems:'center' }} >
//           <Image source={require('@/assets/images/pp.jpg')} style={styles.profile}></Image>
//             <Text style={{ fontWeight:'bold',fontSize:20,textAlign:'center' }}>
//               Revatuvasi Basing
//             </Text>
//             <Text  style={styles.descriptiontext}>
//                 Saya Merupakan seorang naga hitam yang menajaga ngawi selatan.
//                 dimana di sana banyak sekali tindak kriminal yang sangat membahayakan
//                 penduduk setempat. sehingga penduduk sering kali sampai sulit berjalan
//                 bahkan tidak bisa berjalan.
//             </Text>
//             <View style={{  flexDirection: 'row', gap:10, marginTop:12 }}>
//               <AntDesign name='instagram' size={24}></AntDesign>
//               <AntDesign name='wechat' size={24}></AntDesign>
//               <AntDesign name='twitter' size={24}></AntDesign>
//             </View>
            
//         </View>
//       </SafeAreaView>
      
//     );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
//   profile: {
//     height: 200,
//     width: 200,
//     borderRadius:100,
//     marginTop:4,
//     alignSelf: 'center',
//   },  
//   descriptiontext: {
//     fontSize:15,
//     marginTop:12,
//     marginEnd:12,
//     marginStart:12,
//     textAlign: 'center',
//   },

// });
// import { Image, StyleSheet, View, Text, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import { SafeAreaFrameContext, SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import tw from "twrnc"
// import { AntDesign } from '@expo/vector-icons';

// export default function HomeScreen() {
//   return (
//     <SafeAreaView >
//       <ImageBackground source={require('@/assets/images/pp.jpg')} style={styles.profileImage}></ImageBackground>
//       <ScrollView contentContainerStyle={styles.scrollViewContent}>
 
//         {/* Header Section */}
//         <View style={styles.headerContainer}>
//           <Text style={styles.nameText}>Revan Fahriansyah</Text>
//           <Text style={styles.roleText}>UI/UX Programer @ Indonesia</Text>
        

//             {/* Stats Section */}
//             <View style={styles.statsContainer}>
//               <View style={styles.statBox}>
//                 <Text style={styles.statNumber}>10</Text>
//                 <Text style={styles.statLabel}>Project</Text>
//               </View>
//               <View style={styles.statBox}>
//                 <Text style={styles.statNumber}>XI</Text>
//                 <Text style={styles.statLabel}>Kelas</Text>
//               </View>
//               <View style={styles.statBox}>
//                 <Text style={styles.statNumber}>RPL</Text>
//                 <Text style={styles.statLabel}>Jurusan</Text>
//               </View>
//             </View>

//             {/* Hire Me Button */}
//             <TouchableOpacity style={styles.hireMeButton}>
//               <Text style={styles.hireMeText}>Hire Me</Text>
//             </TouchableOpacity>
//             {/* Social Icons Section */}
//             <View style={styles.socialIconsContainer}>
//               <AntDesign name="wechat" size={24} style={styles.icon} />
//               <AntDesign name="twitter" size={24} style={styles.icon} />
//               <AntDesign name="github" size={24} style={styles.icon} />
//             </View>
//             {/* About Section */}
//             <View style={styles.aboutSection}>
//               <Text style={styles.sectionTitle}>About</Text>
//               <Text style={styles.sectionText}>
//                 Fashion designer and stylist with 3 years of experience in the fashion industry. I am passionate about helping people who are truly willing to achieve their goals.
//               </Text>
//             </View>

//             {/* Projects Section */}
//             <View style={styles.aboutSection}>
//               <Text style={styles.sectionTitle}>Projects</Text>
//               <Text style={styles.sectionText}>
//                 Project design is a critical step toward a successful goal. I focus on strategic organization of ideas and materials to create meaningful outcomes.
//               </Text>
//             </View>

//             {/* Tools Section */}
//             <View style={styles.aboutSection}>
//               <Text style={styles.sectionTitle}>Tools</Text>
//               <Text style={styles.sectionText}>VS CODE, ANDROID STUDIO </Text>
//             </View>
//         </View>
        
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
  
   
//   },
//   scrollViewContent: {
//     alignItems: 'center',
//     paddingVertical: 20,
//   },
//   headerContainer: {
//     alignItems: 'center',
//     backgroundColor: '#1c1c1c',
//     marginTop:320,
//     width:415,
//     borderTopRightRadius:50,
//     borderTopLeftRadius:50
//   },
//   profileImage: {
//     height: 500,
//     width: 420,
//     position:'absolute',
//     top:40
  

//   },
//   nameText: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginTop:20
//   },
//   roleText: {
//     fontSize: 16,
//     color: '#b0b0b0',
//   },
//   statsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '90%',
//     marginBottom: 20,
//   },
//   statBox: {
//     alignItems: 'center',
//   },
//   statNumber: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   statLabel: {
//     fontSize: 14,
//     color: '#b0b0b0',
//   },
//   hireMeButton: {
//     backgroundColor: '#ff9500',
//     borderRadius: 25,
//     paddingVertical: 10,
//     paddingHorizontal: 40,
//     marginBottom: 20,
//   },
//   hireMeText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   aboutSection: {
//     width: '90%',
//     marginBottom: 20,
//     backgroundColor: '#2e2e2e',
//     padding: 15,
//     borderRadius: 10,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 10,
//   },
//   sectionText: {
//     fontSize: 14,
//     color: '#b0b0b0',
//     textAlign: 'justify',
//   },
//   socialIconsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     gap: 20,
//     marginBottom: 20,
//   },
//   icon: {
//     color: '#fff',
//   },
// });
import { Image, View, Text, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import tw from "twrnc";

export default function HomeScreen() {
  return (
    <View style={tw`flex-1 bg-black`}>
      <ImageBackground source={require('@/assets/images/pp.jpg')} style={tw`absolute top-10 h-[500px] w-full`} />
      <ScrollView contentContainerStyle={tw`items-center py-5`}>
        {/* Header Section */}
        <View style={tw`items-center bg-[#1c1c1c] mt-[320px] w-full rounded-t-[50px] pt-5 pb-10`}>
          <Text style={tw`text-white text-[28px] font-bold mt-2`}>Revan Fahriansyah</Text>
          <Text style={tw`text-gray-400 text-[16px]`}>UI/UX Programmer @ Indonesia</Text>

          {/* Stats Section */}
          <View style={tw`flex-row justify-around w-[90%] my-5`}>
            <View style={tw`items-center`}>
              <Text style={tw`text-white text-[22px] font-bold`}>10</Text>
              <Text style={tw`text-gray-400 text-[14px]`}>Project</Text>
            </View>
            <View style={tw`items-center`}>
              <Text style={tw`text-white text-[22px] font-bold`}>XI</Text>
              <Text style={tw`text-gray-400 text-[14px]`}>Kelas</Text>
            </View>
            <View style={tw`items-center`}>
              <Text style={tw`text-white text-[22px] font-bold`}>RPL</Text>
              <Text style={tw`text-gray-400 text-[14px]`}>Jurusan</Text>
            </View>
          </View>

          {/* Hire Me Button */}
          <TouchableOpacity style={tw`bg-[#ff9500] rounded-[25px] px-10 py-2 mb-5`}>
            <Text style={tw`text-white text-[16px] font-bold`}>Hire Me</Text>
          </TouchableOpacity>

          {/* Social Icons Section */}
          <View style={tw`flex-row justify-center gap-5 mb-5`}>
            <AntDesign name="wechat" size={24} style={tw`text-white`} />
            <AntDesign name="twitter" size={24} style={tw`text-white`} />
            <AntDesign name="github" size={24} style={tw`text-white`} />
          </View>

          {/* About Section */}
          <View style={tw`w-[90%] mb-5 bg-[#2e2e2e] p-4 rounded-[10px]`}>
            <Text style={tw`text-white text-[20px] font-bold mb-2`}>About</Text>
            <Text style={tw`text-gray-400 text-[14px] text-justify`}>
              Fashion designer and stylist with 3 years of experience in the fashion industry. I am passionate about helping people who are truly willing to achieve their goals.
            </Text>
          </View>

          {/* Projects Section */}
          <View style={tw`w-[90%] mb-5 bg-[#2e2e2e] p-4 rounded-[10px]`}>
            <Text style={tw`text-white text-[20px] font-bold mb-2`}>Projects</Text>
            <Text style={tw`text-gray-400 text-[14px] text-justify`}>
              Project design is a critical step toward a successful goal. I focus on strategic organization of ideas and materials to create meaningful outcomes.
            </Text>
          </View>

          {/* Tools Section */}
          <View style={tw`w-[90%] mb-5 bg-[#2e2e2e] p-4 rounded-[10px]`}>
            <Text style={tw`text-white text-[20px] font-bold mb-2`}>Tools</Text>
            <Text style={tw`text-gray-400 text-[14px]`}>VS CODE, ANDROID STUDIO</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}