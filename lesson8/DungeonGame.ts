const prompts = require('prompts');
const { list } = require('prompts/dist/prompts');

class Room {
  name : string;
  description : string;
  connectingRooms : Room[];
  enemies : Enemy[];

  constructor(name : string, description : string) {
    this.name = name; // string
    this.description = description; // string
    this.connectingRooms = [];
    this.enemies = [];
  }

  addNewRoomConnection(roomToAdd : Room) {
    this.connectingRooms.push(roomToAdd);
  }

  // this will return an array of string (the names)
  getNamesOfConnectingRooms() {
    let resultingNames : string[] = [];
    for(let i = 0; i < this.connectingRooms.length; i++) {
      resultingNames.push(this.connectingRooms[i].name)
    }
    return resultingNames;
  }

  // returns an array of room objects
  getConnectingRooms() {
    return this.connectingRooms;
  }

  addEnemy(enemy : Enemy) {
    this.enemies.push(enemy)
  }

  getNamesOfEnemies() {
    let resultingNames : string[] = [];
    for(let i = 0; i < this.enemies.length; i++) {
      resultingNames.push(this.enemies[i].name)
    }
    return resultingNames;
  }
}

class Player {
  location : Room | undefined; 

  constructor() {
    this.location = undefined; 
  }

  setLocation(room : Room) // parameter is of type Room object
  {
    this.location = room;
  }

  // returns reference to the room object where player is currently located
  getLocation() {
    return this.location;
  }

  lookAround() {
    if(this.location == undefined) {
      console.log('Player location is undefined');
      return;
    }

    console.log('You are in ' + this.location.description.toLowerCase());

    console.log('\nEnemies in the room:')
    const enemyNames = this.location.getNamesOfEnemies();
    for(let i = 0; i < enemyNames.length; i++){
      console.log(enemyNames[i])
    }


    console.log('\nThere are doorways leading to:');
    // print the list of names of rooms where doorways are leading to
    const roomNames = this.location.getNamesOfConnectingRooms();
    for(let i = 0; i < roomNames.length; i++){
      console.log(roomNames[i])
    }
  }

  /* if this function returns true, the game continues.
     if this function returns false, the game is finished. */
  moveToRoomWithName(roomName : string) {
    if(this.location == undefined) {
      console.log('Player location is undefined');
      return false;
    }

    if(roomName == "Portal") {
      return false;
    }



    const listOfConnectingRoomsFromCurrentLocation = this.location.getConnectingRooms();
    for(let i = 0; i < listOfConnectingRoomsFromCurrentLocation.length; i++) {
      if(listOfConnectingRoomsFromCurrentLocation[i].name == roomName) {
        this.setLocation(listOfConnectingRoomsFromCurrentLocation[i])
        return true;
      }
    }
  }
}

class Enemy {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const entrance = new Room('Entrance to dungeon', 'A cavern with stone stairs leading downwards into darkness');
const hallway = new Room('Hallway', 'A hallway and it is a long and dark hallway with dark pools of water on the floor and some fungus growing on the walls');
const chamber = new Room('Chamber', 'A big cavernous chamber with a high ceiling clouded in mist');
const portal = new Room('Portal', 'A portal to another dimension');

entrance.addNewRoomConnection(hallway);
hallway.addNewRoomConnection(chamber);
chamber.addNewRoomConnection(hallway);
chamber.addNewRoomConnection(portal);

const player = new Player();
player.setLocation(entrance);

const rat1 = new Enemy("Sewer Rat");
const rat2 = new Enemy("Sewer Rat");
hallway.addEnemy(rat1);
hallway.addEnemy(rat2);



async function gameLoop() {
    let continueGame = true;

    // Example set of UI options for the user to select
    const initialActionChoices = [
        { title: 'Look around', value: 'look' },
        { title: 'Go to Room', value: 'move' },
        { title: 'Attack', value: 'attack'},
        { title: 'Exit game', value: 'exit'}
    ];

    // Show the list of options for the user.
    // The execution does not proceed from here until the user selects an option.
    const response = await prompts({
      type: 'select',
      name: 'value',
      message: 'Choose your action',
      choices: initialActionChoices
    });

    // Deal with the selected value
    switch(response.value) {
      case 'look':
        console.log('You look around');
        player.lookAround();
        break;
      
      case 'move':
        const moveActionChoices = [
          // { title: 'A', value: 'a' },
          // { title: 'B', value: 'b' },                
        ];

        const listOfRoomNames = player.getLocation()?.getNamesOfConnectingRooms();
        if(listOfRoomNames == undefined) {
          console.log('Error: No connecting rooms found');
          break;
        }
        for(let i = 0; i < listOfRoomNames.length; i++) {
            const newMovementOption = {
              title: listOfRoomNames[i],
              value: listOfRoomNames[i]
            }

            moveActionChoices.push(newMovementOption);
        }

        // Show the list of options for the user.
        // The execution does not proceed from here until the user selects an option.
        const moveResponse = await prompts({
          type: 'select',
          name: 'value',
          message: 'To which room you want to go to?',
          choices: moveActionChoices
        });

        console.log(moveResponse);
        const movementReturnVal = player.moveToRoomWithName(moveResponse.value);

        if(movementReturnVal == false) {
          console.log('You have reached the end of the game');
          continueGame = false;
        }

        // if something eg. player wins, then game is finished
        break;
      
      case 'attack':
        console.log('Not yet implemented');
        break;
      
      case 'exit':
        continueGame = false;
        break;
    }
    
    if(continueGame) {
      gameLoop();
    }    
}

process.stdout.write('\x1b'); // clear screen on windows

console.log('WELCOME TO THE DUNGEONS OF LORD OBJECT ORIENTUS!')
console.log('================================================')
console.log('You walk down the stairs to the dungeons')
gameLoop();
