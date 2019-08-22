/* 
.
Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

//CLASS
class GameObject{
    constructor(GameObjectAttributes){
        this.createdAt = GameObjectAttributes.createdAt;
        this.name = GameObjectAttributes.name;
        this.dimensions = GameObjectAttributes.dimensions;
    }
    destroy(){
        return `${this.name} was removed from the game.`;
    }
}
  
  
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */

  //CLASS
class CharacterStats extends GameObject {
    constructor(CharacterStatsAttributes){
        super(CharacterStatsAttributes);
        this.healthPoints = CharacterStatsAttributes.healthPoints;
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
    constructor(HumanoidAttributes){
        super(HumanoidAttributes);
        this.team = HumanoidAttributes.team;
        this.weapons = HumanoidAttributes.weapons;
        this.language = HumanoidAttributes.language;
    }
    greet(){
        return `${this.name} offers a greeting in ${this.language}.`;
    }
}


  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
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
    });
  
    const swordsman = new Humanoid({
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

    //CLASS
    class HeroHumanoid extends Humanoid {
        constructor (HeroHumanoidAttributes){
            super(HeroHumanoidAttributes);
            this.team = HeroHumanoidAttributes.team;
            this.weapons = HeroHumanoidAttributes.weapons;
            this.language = HeroHumanoidAttributes.language;
        }
        heroSpeak(){
            return `${this.name} speaks in ${this.language}.`;
        }
    }



    class VillainHumanoid extends Humanoid{
        constructor(VillainHumanoidAttributes){
            super(VillainHumanoidAttributes);
            this.team = VillainHumanoidAttributes.team;
            this.weapons = VillainHumanoidAttributes.weapons;
            this.language = VillainHumanoidAttributes.language;
        }
        villainSpeak(){
            return `${this.name} speaks in ${this.language}.`;
        }
    }



          //Stretch Hero
          const Hero = new HeroHumanoid({
            createdAt: new Date(),
            dimensions: {
              length: 25,
              width: 25,
              height: 50,
            },
            healthPoints: 9000,
            name: 'Light',
            team: 'Light Realm',
            weapons: [
              'Spell of life',
              'Book of light',
            ],
            language: 'Lightish.',
          });
    
        //Stretch Villain
        const Villain = new VillainHumanoid({
            createdAt: new Date(),
            dimensions: {
              length: 225,
              width: 225,
              height: 500,
            },
            healthPoints: 9999,
            name: 'Evil',
            team: 'Dark Realm',
            weapons: [
              'Spell of Death',
            ],
            language: 'Unknown.',
          });
      
        // new console logs for hero and villain

        
        //Hero Speak
        console.log(Hero.heroSpeak());

        //Hero Take Damage
        console.log(Hero.takeDamage())

        //Villain Speak
        console.log(Villain.villainSpeak());
        
        //Villain Destroy
        console.log(Villain.destroy())
        
        //Others
        console.log(Hero.createdAt)
        console.log(Hero.takeDamage())
        console.log(Villain.greet())
        console.log(Hero.greet())
        console.log(Villain.takeDamage())
        console.log("The Light Banished Evil from this Realm.")
