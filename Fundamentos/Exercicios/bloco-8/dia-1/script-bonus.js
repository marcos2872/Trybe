const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const danoDragon = (obj) => {
  return parseInt((Math.random() * obj.strength) + 15);
};

const danoWarrior = (obj) => {
  return parseInt((Math.random() * obj.strength) + obj.strength * obj.weaponDmg);
};

const danoManamago = (mage) => {
  let dano =  parseInt((Math.random() * mage.intelligence) + mage.intelligence * 2);
  let mag = mage.mana -15
  if (mage.mana < 15) {
    dano = "Não possui mana suficiente";
    mag = 'mana gasta é 0'
  };
  const ob = {
    damage: dano,
    mana: mag
  }
return ob;
}
// console.log(danoManamago(mage));
// console.log(danoWarrior(warrior));
// console.log(danoDragon(dragon));

const gameActions = {
  warrio: (fun1) => {
    const val = dragon.healthPoints;
    const dano = fun1(warrior)
    dragon.healthPoints = val - dano;
    warrior.damage = dano
  },
  mago: (param) => {
    const dado = param(mage);
    const val = dragon.healthPoints;
    dragon.healthPoints = val - dado.damage;
    mage.mana = dado.mana;
    mage.damage = dado.damage;
  },
  drag: (par) => {
    const danod = par(dragon);
    dragon.damage = danod;
    mage.healthPoints = mage.healthPoints - danod;
    warrior.healthPoints = warrior.healthPoints - danod;
  },
  battle: (batt) => {
    gameActions.warrio(danoWarrior);
    gameActions.mago(danoManamago);
    gameActions.drag(danoDragon);
    return batt
  }

};

console.log(gameActions.battle(battleMembers));