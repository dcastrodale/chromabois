// small helper function that formats the rgb format from props.colour object into a CSS rgb format
export default (colour) => {
    return `${colour.r}, ${colour.g}, ${colour.b}`;
}