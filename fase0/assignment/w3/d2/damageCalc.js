function attack (damage) {
   let result= 0

   result= damage - 2

   return result;
}
  
function damageCalculation (numberOfAttacks, damagePerAttack) {
    let result=0

    let damage= attack(damagePerAttack)
    result= numberOfAttacks * damage

   return result;
}
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90 