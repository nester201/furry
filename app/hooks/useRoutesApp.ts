import { RouteProp, useRoute } from '@react-navigation/native';
import { TypeRootStackParamList } from '@app/navigation/typesNavigation';

export const useTypedRoute = <N extends keyof TypeRootStackParamList>() =>
  useRoute<RouteProp<TypeRootStackParamList, N>>();
