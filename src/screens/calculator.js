// import React, { useState } from 'react';
// import {
//   Box,
//   Heading,
//   Input,
//   Button,
//   Text,
//   FormControl,
//   NativeBaseProvider,
//   ScrollView,
//   Center,
//   HStack,
// } from 'native-base';
// import { useNavigation } from '@react-navigation/native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Header from '../components/header';

// const Kalkulator = () => {
//   const navigation = useNavigation();

//   const [tinggi, setTinggi] = useState('');
//   const [berat, setBerat] = useState('');
//   const [kategoriBMI, setKategoriBMI] = useState('');
//   const [hasil, setHasil] = useState(null);

//   const hitungBMI = () => {
//     if (tinggi && berat) {
//       const tinggiCM = tinggi / 100;
//       const bmi = (berat / (tinggiCM * tinggiCM)).toFixed(2);
//       const kategori = hasilKategoriBMI(bmi);

//       setHasil(bmi);
//       setKategoriBMI(kategori);
//     }
//   };

//   const resetFields = () => {
//     setTinggi('');
//     setBerat('');
//     setKategoriBMI('');
//     setHasil(null);
//   };

//   const handleShowRecipes = () => {
//     // Navigate to RecommendedRecipes with the calculated category
//     navigation.navigate('RecipesForCategory', { kategoriBMI: kategoriBMI.category });
//   };

//   const hasilKategoriBMI = (bmi) => {
//     if (bmi < 18.5) {
//       return { category: 'Underweight', title: ['High Protein', 'High Fiber', 'Healthy Fats'] };
//     } else if (bmi >= 18.5 && bmi < 24) {
//       return { category: 'Normal', title: ['Low Carbs', 'High Protein', 'Low Fat', 'High Fiber', 'Healthy Fats'] };
//     } else {
//       return { category: 'Overweight', title: ['Low Fat', 'Low Carbs', 'High Protein', 'High Fiber'] };
//     }
//   };

//   return (
//     <>
//       <Header />
//       <Box bg="#FFEEDB" flex={1}>
//         <SafeAreaView>
//           <ScrollView>
//             <NativeBaseProvider>
//               <Box p={4} bg='white'>
//                 <Center>
//                   <Heading mb={4} color='#ED7D31'>
//                     BMI Calculator
//                   </Heading>
//                 </Center>
//                 <FormControl>
//                   <FormControl.Label>Height</FormControl.Label>
//                   <Input
//                     placeholder='Height (cm)'
//                     value={tinggi}
//                     onChangeText={(text) => setTinggi(text)}
//                     mb={2}
//                     borderRadius={15}
//                   />
//                 </FormControl>
//                 <FormControl>
//                   <FormControl.Label>Weight</FormControl.Label>
//                   <Input
//                     placeholder='Weight (kg)'
//                     value={berat}
//                     onChangeText={(text) => setBerat(text)}
//                     mb={2}
//                     borderRadius={15}
//                   />
//                 </FormControl>

//                 <HStack space={2} mt={5}>
//                   <Button
//                     onPress={hitungBMI}
//                     backgroundColor='#ED7D31'
//                     flex={1}
//                     borderRadius={15}
//                     height={46}
//                   >
//                     <Text color='white'>Calculate BMI</Text>
//                   </Button>
//                   <Button
//                     onPress={resetFields}
//                     backgroundColor='white'
//                     flex={1}
//                     borderRadius={15}
//                     borderColor="#A9A9A9"
//                     borderWidth={1}
//                     height={46}
//                   >
//                     <Text color='black'>Reset</Text>
//                   </Button>
//                 </HStack>

//                 {hasil !== null && (
//                   <Box mt={4} p={4} bg='#FFD699' borderRadius={15}>
//                     <Text color='#333' fontSize="md" fontWeight='bold'>
//                       BMI: {hasil}
//                     </Text>
//                     <Text color='#333' fontSize="md" fontWeight='bold' mt={2}>
//                       Category: {kategoriBMI.category}
//                     </Text>
//                     <Text color='#333' fontSize="md" fontWeight='bold' mt={2}>
//                       Recommended Recipes Category: {kategoriBMI.title.join(', ')}
//                     </Text>
//                   </Box>
//                 )}
//               </Box>
//             </NativeBaseProvider>
//           </ScrollView>
//         </SafeAreaView>
//       </Box>
//     </>
//   );
// };

// export default Kalkulator;

import React, { useState } from 'react';
import {
  Box,
  Heading,
  Input,
  Text,
  FormControl,
  ScrollView,
  Center,
  HStack,
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/header';
import Button from '../components/button';

const Kalkulator = () => {
  const navigation = useNavigation();

  const [tinggi, setTinggi] = useState('');
  const [berat, setBerat] = useState('');
  const [kategoriBMI, setKategoriBMI] = useState('');
  const [hasil, setHasil] = useState(null);

  const hitungBMI = () => {
    if (tinggi && berat) {
      const tinggiCM = tinggi / 100;
      const bmi = (berat / (tinggiCM * tinggiCM)).toFixed(2);
      const kategori = hasilKategoriBMI(bmi);

      setHasil(bmi);
      setKategoriBMI(kategori);
    }
  };

  const resetFields = () => {
    setTinggi('');
    setBerat('');
    setKategoriBMI('');
    setHasil(null);
  };

  const handleShowRecipes = () => {
    // Navigate to RecommendedRecipes with the calculated category
    navigation.navigate('RecipesForCategory', { kategoriBMI: kategoriBMI.category });
  };

  const hasilKategoriBMI = (bmi) => {
    if (bmi < 18.5) {
      return { category: 'Underweight', title: ['High Protein', 'High Fiber', 'Healthy Fats'] };
    } else if (bmi >= 18.5 && bmi < 24) {
      return { category: 'Normal', title: ['Low Carbs', 'High Protein', 'Low Fat', 'High Fiber', 'Healthy Fats'] };
    } else {
      return { category: 'Overweight', title: ['Low Fat', 'Low Carbs', 'High Protein', 'High Fiber'] };
    }
  };

  return (
    <>
      <Header />
      <ScrollView flex={1} backgroundColor="#FFEEDC">
        <Box
          alignSelf={"center"}
          justifyContent={"center"}
          backgroundColor={"white"}
          width={"85%"}
          padding={2}
          borderRadius={10}
          shadowOpacity={10}
          elevation={15}
          flexGrow={1}
          mt={4}
          mb={8}
        >
          <Box p={4} bg='white'>
            <Center>
              <Heading mb={4} color='#ED7D31'>
                BMI Calculator
              </Heading>
            </Center>
            <FormControl>
              <FormControl.Label>Height</FormControl.Label>
              <Input
                placeholder='Height (cm)'
                value={tinggi}
                onChangeText={(text) => setTinggi(text)}
                mb={2}
                borderRadius={15}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Weight</FormControl.Label>
              <Input
                placeholder='Weight (kg)'
                value={berat}
                onChangeText={(text) => setBerat(text)}
                mb={2}
                borderRadius={15}
              />
            </FormControl>

            <Box
              mt={5}
              mb={2}
              width={"100%"}
              alignItems={"center"}>
              <Button
                onPress={hitungBMI}
                backgroundColor='#ED7D31'
                flex={1}
                borderRadius={15}
                height={46}
                text="Calculate BMI"
              >
              </Button>
            </Box>

            <Box
              mt={2}
              mb={2}
              width={"100%"}
              alignItems={"center"}>
              <Button
                onPress={resetFields}
                backgroundColor='white'
                flex={1}
                borderRadius={15}
                borderColor="#A9A9A9"
                borderWidth={1}
                height={46}
                text="Reset">
              </Button>
            </Box>

            {hasil !== null && (
              <Box mt={4} p={4} bg='#FFD699' borderRadius={15}>
                <Text color='#333' fontSize="md" fontWeight='bold'>
                  BMI: {hasil}
                </Text>
                <Text color='#333' fontSize="md" fontWeight='bold' mt={2}>
                  Category: {kategoriBMI.category}
                </Text>
                <Text color='#333' fontSize="md" fontWeight='bold' mt={2}>
                  Recommended Recipes Category: {kategoriBMI.title.join(', ')}
                </Text>
              </Box>
            )}
          </Box>
        </Box>
      </ScrollView>
    </>
  );
};

export default Kalkulator;