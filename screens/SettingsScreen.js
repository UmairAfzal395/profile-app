import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen() {
  const settings = [
    { icon: 'settings-outline', label: 'General' },
    { icon: 'lock-closed-outline', label: 'Privacy' },
    { icon: 'notifications-outline', label: 'Notifications' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      {settings.map((item, index) => (
        <Pressable
          key={index}
          onPress={() => console.log(`Tapped ${item.label}`)}
          style={({ pressed }) => [
            styles.row,
            { backgroundColor: pressed ? '#aea7a7ff' : '#fff' }, 
          ]}
        >
          <View style={styles.rowLeft}>
            <Ionicons name={item.icon} size={22} color="#333" />
            <Text style={styles.label}>{item.label}</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#888" />
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c2b2bff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#4c4848ff',
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: 12,
    fontSize: 16,
    color: '#444',
  },
});
