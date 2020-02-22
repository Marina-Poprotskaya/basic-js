module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) {
       return false;
      }
  function getString(value) {
    return typeof(value) === 'string';
  }
  let newMembers = members.filter(getString);
  
  let string=newMembers.join(', ').replace(/\s/g, '').replace(/(,)/g, ' ');
  string = string.toUpperCase();
  function firstChar(value, index, arr) {  
    if (index == 0)  
        return true;  
    else  
        return arr[index - 1] === " ";  
  }  
  let array = [].filter.call(string, firstChar).sort().join('');
return array;

};
