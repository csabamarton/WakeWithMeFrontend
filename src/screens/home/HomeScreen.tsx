import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {alarmApi} from '../../api/auth';
import type {NavigationProps} from '../../types/navigation.types';
import {AlarmResponse} from '../../types/auth.types';
import {RootState, store} from '../../store';

const HomeScreen = ({navigation}: NavigationProps) => {
  const [alarms, setAlarms] = useState<AlarmResponse[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const isFocused = useIsFocused(); // Check if screen is focused

  const fetchAlarms = async () => {
    try {
      setIsLoading(true);

      // Retrieve userId from Redux state
      const state = store.getState() as RootState;
      const userId = state.auth.user?.id;

      if (!userId) {
        throw new Error('User ID not available in Redux state');
      }

      // Fetch alarms using userId
      const fetchedAlarms = await alarmApi.getAlarmsByUserId(userId);
      setAlarms(fetchedAlarms);
    } catch (error) {
      console.error('Failed to fetch alarms:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isFocused) {
      fetchAlarms(); // Refresh alarms when screen is focused
    }
  }, [isFocused]);

  const renderNextAlarm = () => {
    if (alarms.length === 0) {
      return null;
    }

    const nextAlarm = alarms[0];
    return (
        <View style={styles.nextAlarmCard}>
          <Text style={styles.cardLabel}>Next Alarm</Text>
          <Text style={styles.timeText}>
            {new Date(nextAlarm.datetime).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </Text>
          <Text style={styles.dateText}>
            {new Date(nextAlarm.datetime).toLocaleDateString()}
          </Text>
          <Text style={styles.sharedInfo}>
            {nextAlarm.visibility === 'SHARED' ? '👥 Shared Alarm' : '🔒 Private'}
          </Text>
        </View>
    );
  };

  const renderUpcomingAlarms = () => {
    if (alarms.length <= 1) {
      return null;
    }

    return alarms.slice(1).map(alarm => (
        <View key={alarm.id} style={styles.upcomingAlarm}>
          <Text style={styles.dayLabel}>
            {new Date(alarm.datetime).toLocaleDateString()}
          </Text>
          <View style={styles.alarmRow}>
            <Text style={styles.alarmTime}>
              {new Date(alarm.datetime).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Text>
            <Text
                style={
                  alarm.visibility === 'SHARED'
                      ? styles.sharedLabel
                      : styles.privateLabel
                }>
              {alarm.visibility === 'SHARED' ? '👥 Shared' : '🔒 Private'}
            </Text>
          </View>
        </View>
    ));
  };

  return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Alarms</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.profileButton}>Profile 👤</Text>
          </TouchableOpacity>
        </View>

        {isLoading ? (
            <ActivityIndicator size="large" color="#007AFF" />
        ) : (
            <ScrollView style={styles.content}>
              {renderNextAlarm()}
              {renderUpcomingAlarms()}
            </ScrollView>
        )}

        {/* Add Alarm Button */}
        <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate('CreateAlarm')}>
          <Text style={styles.addButtonText}>+ Add New Alarm</Text>
        </TouchableOpacity>

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navItemActive}>⏰ Alarms</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navItemInactive}>👥 Friends</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navItemInactive}>⚙️ Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileButton: {
    color: '#2196F3',
  },
  content: {
    flex: 1,
  },
  nextAlarmCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  cardLabel: {
    color: '#666',
    marginBottom: 5,
  },
  timeText: {
    fontSize: 24,
    marginBottom: 5,
  },
  dateText: {
    color: '#666',
  },
  sharedInfo: {
    marginTop: 10,
    fontSize: 12,
    color: '#2196F3',
  },
  upcomingAlarm: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  dayLabel: {
    color: '#666',
    fontSize: 12,
  },
  alarmRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  alarmTime: {
    fontSize: 16,
  },
  privateLabel: {
    color: '#666',
  },
  sharedLabel: {
    color: '#2196F3',
  },
  addButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
  },
  navItem: {
    alignItems: 'center',
  },
  navItemActive: {
    color: '#2196F3',
  },
  navItemInactive: {
    color: '#666',
  },
});

export default HomeScreen;
