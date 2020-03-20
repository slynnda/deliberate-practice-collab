function londonCityHacker(journey) {
  let totalValue = 0;
  let numberCount = 0;
  let previousType = '';
  for(let journeyIndex = 0; journeyIndex < journey.length; journeyIndex++){
    if(typeOf journey[journeyIndex] === 'string'){
      totalValue += 2.40;
      previousType = typeOf journey[journeyIndex];
    }
    else if(typeOf journey[journeyIndex] === 'number'){
      numberCount++;
      if(previousType === 'number' && numberCount == 2){
        totalValue += 0;
      }
      else{
        totalValue += 1.50;
      }
    }
  }
  let prettyString = '£' + totalValue.toFixed();
  return prettyString;
}
