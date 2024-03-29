import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import {scale, verticalScale} from "react-native-size-matters"
import { LinearGradient } from "expo-linear-gradient";


export default function TrendingSkeleton () {
    return(
        <SkeletonPlaceholder
                backgroundColor={"#fed130"}
                highlightColor={"#000"}>
                <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
                    <SkeletonPlaceholder.Item
                      marginLeft={scale(15)}
                      marginTop={verticalScale(15)}
                      width={scale(300)}
                      height={verticalScale(200)}
                      borderRadius={scale(10)}
                    />
                    <SkeletonPlaceholder.Item
                      marginLeft={scale(15)}
                      marginTop={verticalScale(15)}
                      width={scale(300)}
                      height={verticalScale(200)}
                      borderRadius={scale(10)}
                    />
                  </SkeletonPlaceholder.Item>
              </SkeletonPlaceholder>
    );
}