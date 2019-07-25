/* 
Prototype Refactor
1. Copy and paste your code or the solution from yesterday
2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.
*/

/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
    class GameObject{
        constructor(attr){
        this.createdAt=attr.createdAt,
        this.name=attr.name,
        this.dimensions=attr.dimensions
        }
        destroy(){
            return `${this.name} was removed from the game`;
          };
    }

  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  class CharacterStats extends GameObject{
      constructor(attr){
        super(attr),
        this.healthPoints=attr.healthPoints
      }
      takeDamage(){
        return `${this.name} took damage.`;
      }

  }

  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
  
  class Humanoid extends CharacterStats{
      constructor(attr){
          super(attr),
        this.team=attr.team,
        this.weapons=attr.weapons,
        this.language=attr.language 
      }
      greet(){
        return `${this.name} offers a greeting in ${this.language}`
      };
  }
  
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  class Hero extends Humanoid{
    constructor(attr){
    super(attr),
    this.win=`${this.name} Grins smuggly.`,
    this.lose=`${this.name} Weeps inconsoleably in defeat.`,
    this.typeOfAttack=attr.typeOfAttack
    }
    

    attack(){
        let attackType= roll(3);
        // console.log(this.typeOfAttack[attackType].damage);
        let damage=roll(this.typeOfAttack[attackType].damage);
        console.log(`${this.name} ${this.typeOfAttack[attackType].move} for ${damage}`);
        // console.log("!!!SHeal",swordsman.healthPoints,"!!!MHeal",mage.healthPoints,"!!!DAM",damage);
        mage.healthPoints=mage.healthPoints-damage;
        // console.log("!!!SHeal",swordsman.healthPoints,"!!!MHeal",mage.healthPoints,"!!!DAM",damage);
        if (mage.healthPoints<1){
        flag=false;
        return `${mage.name} was defeated! ${this.win}. ${mage.lose}.`;
        } else{
        return `${mage.name} took ${damage} damage.`;
        }
    }    
  }

  
  class Villain extends Humanoid{
    constructor(attr){
        super(attr),
        this.win=`${this.name} Cackles maniacally`,
        this.lose=`${this.name} Screams "I will return!`,
        this.typeOfAttack=attr.typeOfAttack
    }
    attack(){
        let attackType= roll(3);
        let damage=roll(this.typeOfAttack[attackType].damage);
        console.log(`${this.name} ${this.typeOfAttack[attackType].move} for ${damage}`);
        // console.log("!!!SHeal",swordsman.healthPoints,"!!!MHeal",mage.healthPoints,"!!!DAM",damage);
        swordsman.healthPoints=swordsman.healthPoints-damage;
        // console.log("!!!SHeal",swordsman.healthPoints,"!!!MHeal",mage.healthPoints,"!!!DAM",damage);
        if (swordsman.healthPoints<1){
        flag=false;
        return `${swordsman.name} was defeated! ${this.win}. ${swordsman.lose}.`;
        } else{
        return `${swordsman.name} took ${damage} damage.`;
        }
    }
  }


  
  //roll a die
  function roll(sides){
    let result= Math.floor(Math.random() * (sides - 1)) + 1;
    // console.log("!",result);
    return result;
  }
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
    const mage = new Villain({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
      typeOfAttack:[{move:"One word. Fireball",damage:30},{move:"Magic missle's the darkness",damage:10},{move:"Slaps with a fish",damage:2}]
    });
  
    const swordsman = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
      typeOfAttack:[{move:"Slashes with his Giant Sword",damage:6},{move:"Shield bashes",damage:2},{move:"Does an intinidating Boogie Woogie dance",damage:1}]
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
      typeOfAttack:[{move:"Fires a vicious fire arrow",damage:6},{move:"Stabs with a hidden blade",damage:4},{move:"Whacks with the bow",damage:2}]
    });
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
    //The Arena
  
    //Setup
    let turnList=[swordsman, mage];
    let currentPlayer={};
    let flag=true;
    let rounds=10;
    let currRound=0;
  
    //GET READY TO RUUUMMMMMBLLLLLLE!!!
    while (flag){
    if (currRound==rounds){flag=false;};
    if (currRound>0){console.log("*** *** NEW ROUND:"+currRound+" *** ***")}
    else {console.log("*** *** FIRST ROUND!!! *** ***")};
    //START OF TURN
      currentPlayer=turnList.shift();
      console.log(currentPlayer.name+"'s turn");
      console.log(currentPlayer.attack());
      turnList.push(currentPlayer);
    //END OF TURN
      if (flag){turnList.forEach(function(item){console.log(`${item.name} has ${item.healthPoints} healthPoints.`);});};
      
      currRound++
    }
  