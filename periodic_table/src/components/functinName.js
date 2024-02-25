    
    function getFrenchName(data) {
        switch (data) {
            case 'actinoid':              
                return 'Actinides'
            case 'alkali metal':              
                return 'Métaux alcalins'  
            case 'alkaline earth metal':              
                return 'Métaux alcalino-terreux'
            case 'halogen':              
                return 'Halogènes'   
            case 'lanthanoid':              
                return 'Lanthanides'      
            case 'metalloid':              
                return 'Métalloïdes'  
            case 'noble gas':              
                return 'Gaz Rares' 
            case 'nonmetal':              
                return 'Non-métaux' 
            case 'post-transition metal':              
                return 'Métaux pauvres' 
            case 'transition metal':              
                return 'Métaux de transition'
            // default:
            //     return 'bg-light'
        }
    }
    export default getFrenchName