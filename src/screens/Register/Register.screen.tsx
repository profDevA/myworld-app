import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import styles from './Register.style';
import {RadioButton} from 'react-native-paper';

const Register = () => {
  const [checked, setChecked] = React.useState('first');

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/Note-1.png')}
        resizeMode="stretch"
        style={styles.background}>
        <ScrollView style={styles.scrollview}>
          <View style={styles.content}>
            <Text style={styles.title}>Register Form</Text>
            <Icon name="person" size={100} />
            <TextInput
              placeholder="First Name:"
              inputMode="text"
              placeholderTextColor="#6B7076"
              style={styles.textInput}
            />
            <Icon name="person" size={100} />
            <TextInput
              placeholder="Last Name:"
              inputMode="text"
              placeholderTextColor="#6B7076"
              style={styles.textInput}
            />
            <Icon name="work" size={100} />
            <TextInput
              placeholder="Work Place:"
              inputMode="text"
              placeholderTextColor="#6B7076"
              style={styles.textInput}
            />
            <Icon name="edit" size={100} />
            <TextInput
              placeholder="Profession:"
              inputMode="text"
              placeholderTextColor="#6B7076"
              style={styles.textInput}
            />
            <Icon name="public" size={100} />
            <TextInput
              placeholder="Native City:"
              inputMode="text"
              placeholderTextColor="#6B7076"
              style={styles.textInput}
            />
            <Icon name="place" size={100} />
            <TextInput
              placeholder="Living Place:"
              inputMode="text"
              placeholderTextColor="#6B7076"
              style={styles.textInput}
            />
            <Icon name="school" size={100} />
            <TextInput
              placeholder="College:"
              inputMode="text"
              placeholderTextColor="#6B7076"
              style={styles.textInput}
            />
            <Icon name="favorite" size={100} />
            <TextInput
              placeholder="Status:"
              inputMode="text"
              placeholderTextColor="#6B7076"
              style={styles.textInput}
            />
            <IonIcon name="glasses-sharp" size={100} />
            <TextInput
              placeholder="Hobby:"
              inputMode="text"
              placeholderTextColor="#6B7076"
              style={styles.textInput}
            />
            <IonIcon name="calendar" size={100} />
            <TextInput
              placeholder="Age:"
              inputMode="text"
              placeholderTextColor="#6B7076"
              style={styles.textInput}
            />
            <IonIcon name="gift-sharp" size={100} />
            <TextInput
              placeholder="Birthday:"
              inputMode="text"
              placeholderTextColor="#6B7076"
              style={styles.textInput}
            />
            <IonIcon name="chatbox" size={100} />
            <TextInput
              placeholder="Phrase:"
              inputMode="text"
              placeholderTextColor="#6B7076"
              style={styles.textInput}
            />
            <View>
              <Text style={styles.genderText}>Gender</Text>
              <View style={styles.radioGroup}>
                <RadioButton
                  value="first"
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('first')}
                  color="#0075ff"
                />
                <IonIcon name="man" size={80} />
                <RadioButton
                  value="second"
                  status={checked === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('second')}
                  color="#0075ff"
                />
                <IonIcon name="woman" size={80} />
              </View>
            </View>
            <Icon name="email" size={100} />
            <TextInput
              placeholder="Email:"
              inputMode="text"
              placeholderTextColor="#6B7076"
              style={styles.textInput}
            />
            <Icon name="lock" size={100} />
            <TextInput
              placeholder="Password:"
              secureTextEntry
              inputMode="text"
              placeholderTextColor="#6B7076"
              style={styles.textInput}
            />
            <TouchableOpacity>
              <Text style={styles.signInTxt}>Sign-In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.back}>
              <Icon name="reply" size={70} color="black" />
              <Text style={styles.signInTxt}>Back!!</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Register;
