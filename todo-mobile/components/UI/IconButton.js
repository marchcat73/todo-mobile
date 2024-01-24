import { Pressable, View, StyleSheet } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

function IconButton({ icon, size, color, onPress }) {
  const materialIconsArr = ['add-alarm'];
  const ioIconsArr = [];
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.buttonContainer}>
        <MaterialIcons name={icon} size={size} color={color} />
        {/* <Ionicons name={icon} size={size} color={color} /> */}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.75,
  },
});

export default IconButton;
