function minEnergy(start: number, shops: number[], stations: number[], target: number): number {
    // return the minimum energy needed to visit all shops then go to the target.
    
    let isCome = Array.from({length:shops.length},()=>false);
    let diffStartTarget = target-start; //abs in case target before start
    let position = diffStartTarget>0? 'positive':'negative';
    let diffStartShop = shops.map(item=>[item-start,item-start>0? 'positive':'negative']);

    let isDifferenceDirection = diffStartShop.filter(item=>item[1]!==position)

    if(isDifferenceDirection.length>0){
        for(let item of isDifferenceDirection){
            let selectedTarget = item
        }
    }




    let selectedTarget;

    return 0;
    }