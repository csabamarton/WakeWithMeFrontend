import {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {alarmApi} from '../../api/auth.ts';
import {AlarmRequest} from '../../types/auth.types.ts';

const CreateAlarmScreen = () => {
  const navigation = useNavigation();
  const [time, setTime] = useState(new Date());
  const [days, setDays] = useState([
    false,
    true,
    true,
    true,
    true,
    true,
    false,
  ]);
  const [label, setLabel] = useState('');
  const [visibility, setVisibility] = useState<'PRIVATE' | 'SHARED' | 'PUBLIC'>(
    'PRIVATE',
  ); // Type-safe visibility

  const handleSaveAlarm = async () => {
    try {
      const alarmRequest = {
        datetime: time.toISOString(), // Convert to ISO string for backend
        recurringDays: JSON.stringify(days), // Convert to JSON string
        isRecurring: days.some(day => day), // Check if any day is true
        isEnabled: true,
        label,
        visibility, // Already typed correctly
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone, // Get the user's timezone
      };

      await alarmApi.createAlarm(alarmRequest);

      navigation.goBack();
    } catch (error) {
      console.error('Failed to save alarm:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Create New Alarm</Text>

      {/* Time Picker */}
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>
          {time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
        </Text>
      </View>

      {/* Repeat Days */}
      <View style={styles.daysContainer}>
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.dayButton, days[index] && styles.dayButtonSelected]}
            onPress={() => {
              const newDays = [...days];
              newDays[index] = !newDays[index];
              setDays(newDays);
            }}>
            <Text
              style={[styles.dayText, days[index] && styles.dayTextSelected]}>
              {day}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Label Input */}
      <TextInput
        style={styles.input}
        placeholder="Alarm Label"
        value={label}
        onChangeText={setLabel}
      />

      {/* Visibility Options */}
      <View style={styles.visibilityContainer}>
        {['PRIVATE', 'SHARED', 'PUBLIC'].map(option => (
          <TouchableOpacity
            key={option}
            style={[
              styles.visibilityButton,
              visibility === option && styles.visibilityButtonSelected,
            ]}
            onPress={() =>
              setVisibility(option as 'PRIVATE' | 'SHARED' | 'PUBLIC')
            }>
            <Text
              style={[
                styles.visibilityText,
                visibility === option && styles.visibilityTextSelected,
              ]}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveAlarm}>
        <Text style={styles.saveButtonText}>Save Alarm</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  title: {fontSize: 24, fontWeight: 'bold', marginBottom: 30},
  timeContainer: {alignItems: 'center', marginBottom: 30},
  timeText: {fontSize: 48, fontWeight: 'bold', color: '#007AFF'},
  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  dayButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  dayButtonSelected: {backgroundColor: '#007AFF'},
  dayText: {fontSize: 16, color: '#666'},
  dayTextSelected: {color: '#fff'},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  visibilityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  visibilityButton: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  visibilityButtonSelected: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  visibilityText: {fontSize: 16, color: '#666'},
  visibilityTextSelected: {color: '#fff'},
  saveButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {color: '#FFFFFF', fontSize: 16, fontWeight: 'bold'},
});

export default CreateAlarmScreen;
