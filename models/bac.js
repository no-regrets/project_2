module.exports = function(sex, weight, bac){
    if(sex === "male"){
        if(weight >= 90 && weight < 110){
            bac += .038
        }
        if(weight >= 110 && weight < 130){
            bac += .031
        }
        if(weight >= 130 && weight < 150){
            bac += .027
        }
        if(weight >= 150 && weight < 170){
            bac += .023
        }
        if(weight >= 170 && weight < 190){
            bac += .021
        }
        if(weight >= 190 && weight < 210){
            bac += .019
        }
        if(weight >= 210 && weight < 230){
            bac += .017
        }
        if(weight >= 230){
            bac += .016
        }

    }
    if(sex === "female"){
        if(weight >= 90 && weight < 110){
            bac += .045
        }
        if(weight >= 110 && weight < 130){
            bac += .038
        }
        if(weight >= 130 && weight < 150){
            bac += .032
        }
        if(weight >= 150 && weight < 170){
            bac += .028
        }
        if(weight >= 170 && weight < 190){
            bac += .025
        }
        if(weight >= 190 && weight < 210){
            bac += .023
        }
        if(weight >= 210 && weight < 230){
            bac += .021
        }
        if(weight >= 230){
            bac += .019
        }

    }
}