    
    function getbonding(data) {
        switch (data) {
            case 'metallic':              
                return 'Métallique'
            case 'atomic':              
                return 'Atomique'  
            case 'covalent network':              
                return ' Réseau covalent'
            case 'diatomic':              
                return 'Diatomique'   
        
        }
    }
    export default getbonding