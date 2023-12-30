import React, { useState } from 'react';
import {
  Box,
  Heading,
  Input,
  Button,
  Text,
  FormControl,
  NativeBaseProvider,
  ScrollView,
  Center,
  HStack,
} from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

const Kalkulator = () => {
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

  const hasilKategoriBMI = (bmi) => {
    if (bmi < 18.5) {
      return { category: 'Kekurangan Berat Badan', title: ['Tinggi Protein'] };
    } else if (bmi >= 18.5 && bmi < 24) {
      return { category: 'Berat Badan Normal', title: ['Rendah Karbo', 'Tinggi Protein', 'Rendah Lemak'] };
    } else {
      return { category: 'Kelebihan Berat Badan', title: ['Rendah Lemak', 'Rendah Karbo'] };
    }
  };

  return (
    <Box bg="#FFEEDB" flex={1}>
      <SafeAreaView>
        <ScrollView>
          <NativeBaseProvider>
              <Box p={4} bg='white'>
                <Center>
                  <Heading mb={4} color='#ED7D31'>
                    BMI Kalkulator
                  </Heading>
                </Center>
                <FormControl>
                  <FormControl.Label>Tinggi Badan</FormControl.Label>
                  <Input
                    placeholder='Tinggi Badan (cm)'
                    value={tinggi}
                    onChangeText={(text) => setTinggi(text)}
                    mb={2}
                    borderRadius={15}
                  />
                </FormControl>
                <FormControl>
                  <FormControl.Label>Berat Badan</FormControl.Label>
                  <Input
                    placeholder='Berat Badan (kg)'
                    value={berat}
                    onChangeText={(text) => setBerat(text)}
                    mb={2}
                    borderRadius={15}
                  />
                </FormControl>

                <HStack space={2} mt={5}>
                  <Button
                    onPress={hitungBMI}
                    backgroundColor='#ED7D31'
                    flex={1}
                    borderRadius={15}
                    height={46}
                  >
                    <Text color='white'>Hitung BMI</Text>
                  </Button>
                  <Button
                    onPress={resetFields}
                    backgroundColor='white'
                    flex={1}
                    borderRadius={15}
                    borderColor="#A9A9A9"
                    borderWidth={1}
                    height={46}
                  >
                    <Text color='black'>Reset</Text>
                  </Button>
                </HStack>

                {hasil !== null && (
                  <Box mt={4} p={4} bg='#FFD699' borderRadius={15}>
                    <Text color='#333' fontSize="md" fontWeight='bold'>
                      BMI Anda: {hasil}
                    </Text>
                    <Text color='#333' fontSize="md" fontWeight='bold' mt={2}>
                      Kategori: {kategoriBMI.category}
                    </Text>
                    <Text color='#333' fontSize="md" fontWeight='bold' mt={2}>
                      Rekomendasi Kategori Resep: {kategoriBMI.title.join(', ')}
                    </Text>
                  </Box>
                )}
              </Box>
          </NativeBaseProvider>
        </ScrollView>
      </SafeAreaView>
    </Box>
  );
};

export default Kalkulator;