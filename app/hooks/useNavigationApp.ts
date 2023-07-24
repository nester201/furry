import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TypeRootStackParamList } from '../navigation/typesNavigation';

export const useNavigationApp = () => useNavigation<NavigationProp<TypeRootStackParamList>>();
