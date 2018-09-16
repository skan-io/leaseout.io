

export const googleKey = 'AIzaSyBxiU8D895DI2XpDm-9zIfsDsDE0xKSrNg';

const defaultStaticMapZoom = 15;

const processLocationName = (name, replacement = '+')=> (
  name.replace(/\s/g, replacement)
);

export const staticMapByName = (
    locationName, width, height, zoom = defaultStaticMapZoom
)=> {
  const processed = processLocationName(locationName);
  return `https://maps.googleapis.com/maps/api/staticmap?center=${processed}&zoom=${zoom}&size=${height}x${width}&maptype=roadmap&key=${googleKey}`;
};


export const placeGeometry = (locationName)=> {
  const processed = processLocationName(locationName, '%20');
  return `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${processed}&inputtype=textquery&fields=geometry&key=${googleKey}`;
};
