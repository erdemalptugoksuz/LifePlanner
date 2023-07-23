import React, {useState} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import DatePicker from 'react-native-date-picker';

import styles from './AddTask.style';
import {colors} from '../../../assets';
import {InputField, DarkButton, DateInput} from '../../../components';

const AddTask = (props: any) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState<Date | undefined>(undefined);
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const createTask = async () => {
    if (taskName === '' || taskDescription === '' || taskDate === undefined) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurunuz.');
      return;
    }

    const user = auth().currentUser;
    const task = {
      name: taskName,
      description: taskDescription,
      date: taskDate,
      complete: false,
    };
    await firestore()
      .collection('users')
      .doc(user?.uid)
      .collection('tasks')
      .add(task);
    props.closeModal();
    setTaskName('');
    setTaskDescription('');
    setTaskDate(undefined);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={props.closeModal}>
          <Icon name="arrow-left" size={24} color={colors.snow} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Görev Ekle</Text>
      </View>
      <InputField
        title="Adı"
        placeholder="Görev adını giriniz..."
        onChangeText={setTaskName}
      />
      <InputField
        title="Açıklama"
        placeholder="Görev açıklaması giriniz..."
        onChangeText={setTaskDescription}
      />
      <DateInput
        taskDate={taskDate}
        setTaskDate={setTaskDate}
        setDatePickerVisible={setDatePickerVisible}
      />
      <DatePicker
        modal
        locale="tr"
        open={datePickerVisible}
        mode="datetime"
        date={taskDate === undefined ? new Date() : taskDate}
        onConfirm={date => {
          setTaskDate(date);
          setDatePickerVisible(false);
        }}
        onCancel={() => setDatePickerVisible(false)}
        minimumDate={new Date()}
      />
      <DarkButton title="Görev Ekle" onPress={createTask} loading={undefined} />
    </SafeAreaView>
  );
};

export default AddTask;
