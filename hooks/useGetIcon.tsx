import {
  AntDesign,
  Feather,
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { scale } from "react-native-size-matters";
export const useGetIcon = () => {
  const getIcon = (iconPackage: string, name: any, colors: string, size:number) => {
    switch (iconPackage) {
      case "feather":
        return (
          <Feather
            name={name}
            size={scale(size)}
            color={colors}
          />
        );
      case "fa6":
        return (
          <FontAwesome6
            name={name}
            size={scale(size)}
            color={colors}
          />
        );
      case "ant":
        return (
          <AntDesign
            name={name}
            size={scale(size)}
            color={colors}
          />
        );
      case "material":
        return (
          <MaterialIcons
            name={name}
            size={scale(size)}
            color={colors}
          />
        );
      case "material-community":
        return (
          <MaterialCommunityIcons
            name={name}
            size={scale(size)}
            color={colors}
          />
        );
      default:
        return (
          <Feather
            name={name}
            size={scale(size)}
            color={colors}
          />
        );
    }
  };
  return { getIcon };
};
