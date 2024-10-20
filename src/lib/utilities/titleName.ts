const titleName = (route: string): string => {
  const Name: string = route.slice(1);
  return Name.charAt(0).toUpperCase() + Name.slice(1);
};
export default titleName;
