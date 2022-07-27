const colorType = type => {
    if(type === "grass"){
        return "lightgreen";
    } else if(type === "fire"){
        return "red";
    } else if(type === "water"){
        return "lightblue";
    } else if(type === "bug"){
        return "#228b22";
    } else if(type === "normal"){
        return "#696969";
    } else if(type === "poison"){
        return "#9400d3";
    } else if(type === "electric"){
        return "#ffd700";
    } else if(type === "ground"){
        return "#8b4513";
    } else if(type === "fairy"){
        return "#f5deb3";
    } else if(type === "fighting"){
        return "#cd853f";
    } else if(type === "flying"){
        return "#f5f5f5";
    } else if(type === "rock"){
        return "#a52a2a";
    } else if(type === "ghost"){
        return "#31336A";
    } else if(type === "steel"){
        return "#5D736C";
    } else if(type === "psychic"){
        return "#FFEB3B";
    } else if(type === "ice"){
        return "#86D2F4";
    } else if(type === "dragon"){
        return "#ffa500";
    } else if(type === "dark"){
        return "#030706";
    }
}

export default colorType;