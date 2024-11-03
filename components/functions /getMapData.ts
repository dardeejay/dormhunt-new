import { Region } from "react-native-maps";
export function getRegionForCoordinates(points: [{latitude: number, longitude: number}]): Region {
    // points should be an array of { latitude: X, longitude: Y }
    let minX: number, maxX: number, minY: number, maxY: number;
  
    // init first point
    ((point) => {
      minX = point.latitude;
      maxX = point.latitude;
      minY = point.longitude;
      maxY = point.longitude;
    })(points[0]);
  
    // calculate rect
    points.map((point: { latitude: number; longitude: number; }) => {
      minX = Math.min(minX, point.latitude);
      maxX = Math.max(maxX, point.latitude);
      minY = Math.min(minY, point.longitude);
      maxY = Math.max(maxY, point.longitude);
    });
  
    const midX = (minX + maxX) / 2;
    const midY = (minY + maxY) / 2;
    const deltaX = (maxX - minX);
    const deltaY = (maxY - minY);
  
    return {
      latitude: midX,
      longitude: midY,
      latitudeDelta: deltaX,
      longitudeDelta: deltaY
    };
  }
