

export class CounterService {
  inactiveCounter = 0;
  activeCounter = 0; 

  constructor() { }

  updateInactiveSwitchCount(){
    this.inactiveCounter++;
    console.log('Inactive Count' + this.inactiveCounter)
  }

  updateActiveSwitchCount(){
    this.activeCounter++;
    console.log('Active Count' + this.activeCounter)
  }
}
