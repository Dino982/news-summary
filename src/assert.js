var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck){
      throw new Error('Fail :(');
    } else {
      console.log('Code looks good!');
    };
  }
};
