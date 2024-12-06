import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import type {NavigationProps} from '../../types/navigation.types';

const HomeScreen = ({navigation}: NavigationProps) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Alarms</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.profileButton}>Profile 👤</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {/* Next Alarm Card */}
        <View style={styles.nextAlarmCard}>
          <Text style={styles.cardLabel}>Next Alarm</Text>
          <Text style={styles.timeText}>7:30 AM</Text>
          <Text style={styles.dateText}>Tomorrow</Text>
          <Text style={styles.sharedInfo}>📢 2 friends shared this alarm</Text>
        </View>

        {/* Upcoming Alarms */}
        <View style={styles.upcomingAlarm}>
          <Text style={styles.dayLabel}>Thursday</Text>
          <View style={styles.alarmRow}>
            <Text style={styles.alarmTime}>6:00 AM</Text>
            <Text style={styles.privateLabel}>Private</Text>
          </View>
        </View>

        <View style={styles.upcomingAlarm}>
          <Text style={styles.dayLabel}>Friday</Text>
          <View style={styles.alarmRow}>
            <Text style={styles.alarmTime}>8:00 AM</Text>
            <Text style={styles.sharedLabel}>👥 Shared</Text>
          </View>
        </View>
      </ScrollView>

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
