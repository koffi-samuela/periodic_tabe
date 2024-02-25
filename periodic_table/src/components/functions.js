function getBgColor(data) {
    switch (data) {
        case "actinoid":              
            return 'bg-actinoid'
        case "alkali metal":              
            return 'bg-alkali_metal'  
        case 'alkaline earth metal':              
            return 'bg-alkaline_earth_metal'
        case 'halogen':              
            return 'bg-halogen'   
        case 'lanthanoid':              
            return 'bg-lanthanoid'      
        case 'metalloid':              
            return 'bg-metalloid'  
        case 'noble gas':              
            return 'bg-noble_gas' 
        case 'nonmetal':              
            return 'bg-nonmetal' 
        case 'post-transition metal':              
            return 'bg-post-transition_metal' 
        case 'transition metal':              
            return 'bg-transition_metal'
        // default:
        //     return 'bg-light'
    }
}
export default getBgColor 