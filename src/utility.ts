import { GeoPoint } from "./map/MapSlice";

export const wordToUpperCase = (word : string) => {
    return word.substring(0,1).toUpperCase() + word.substring(1).toLowerCase();
}

export const capitalize = (inString : string) => {
    return inString.split(' ').map((word : string) => wordToUpperCase(word)).join(' ')
}

export const polygonFromBoundingBox = (northeast : GeoPoint, southwest : GeoPoint) => {
    return [
        {lng: northeast.lng, lat: northeast.lat} as GeoPoint,
        {lng: southwest.lng, lat: northeast.lat} as GeoPoint,
        {lng: southwest.lng, lat: southwest.lat} as GeoPoint,
        {lng: northeast.lng, lat: southwest.lat} as GeoPoint,
    ]}
