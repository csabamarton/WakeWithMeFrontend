import {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import type {NavigationProps} from '../../types/navigation.types';

type AlarmData = {
  time: string;
  repeatDays: boolean[]; // [Sun,Mon,Tue,Wed,Thu,Fri,Sat]
  isEnabled: boolean; // Whether alarm is active
  label?: string; // Optional alarm label/name
};

const CreateAlarmScreen = ({navigation}: NavigationProps) => {
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

  const handleSaveAlarm = async () => {
    try {
      const alarmData: AlarmData = {
        time: time.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }),
        repeatDays: days,
        isEnabled: true,
        label: 'My Alarm', // Optional: Add label input field later
      };

      // TODO: Make API call
      // await api.post('/api/alarm/create', alarmData);

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

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveAlarm}>
        <Text style={styles.saveButtonText}>Save Alarm</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  timeContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  timeText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#007AFF',
  },
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
  dayButtonSelected: {
    backgroundColor: '#007AFF',
  },
  dayText: {
    fontSize: 16,
    color: '#666',
  },
  dayTextSelected: {
    color: '#fff',
  },
  saveButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreateAlarmScreen;
