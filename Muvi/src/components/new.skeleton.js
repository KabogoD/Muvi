import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { LinearGradient } from "expo-linear-gradient";

export default function NewSkeleton () {
    return(
        <SkeletonPlaceholder 
            backgroundColor={"#fed130"}>
                <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" >
        <SkeletonPlaceholder.Item flexDirection='column' alignItems="center" marginHorizontal={15} marginTop={20}>
            <SkeletonPlaceholder.Item width={110} height={80} borderRadius={6} />
            <SkeletonPlaceholder.Item width={110} height={10} borderRadius={2} marginTop={10}/>
            <SkeletonPlaceholder.Item width={110} height={15} borderRadius={2} marginTop={5}/>
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item flexDirection='column' alignItems="center" marginRight={15} marginTop={20}>
            <SkeletonPlaceholder.Item width={110} height={80} borderRadius={6} />
            <SkeletonPlaceholder.Item width={110} height={10} borderRadius={2} marginTop={10}/>
            <SkeletonPlaceholder.Item width={110} height={15} borderRadius={2} marginTop={5}/>
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item flexDirection='column' alignItems="center" marginRight={15} marginTop={20}>
            <SkeletonPlaceholder.Item width={110} height={80} borderRadius={6} />
            <SkeletonPlaceholder.Item width={110} height={10} borderRadius={2} marginTop={10}/>
            <SkeletonPlaceholder.Item width={110} height={15} borderRadius={2} marginTop={5}/>
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item flexDirection='column' alignItems="center" marginRight={15} marginTop={20}>
            <SkeletonPlaceholder.Item width={110} height={80} borderRadius={6} />
            <SkeletonPlaceholder.Item width={110} height={10} borderRadius={2} marginTop={10}/>
            <SkeletonPlaceholder.Item width={110} height={15} borderRadius={2} marginTop={5}/>
        </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>                 
                </SkeletonPlaceholder>
    );
}