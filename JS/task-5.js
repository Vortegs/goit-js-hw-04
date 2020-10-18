const inventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
    this.items.push(itemName);
    return `Adding ${itemName} to inventory`;
  },
  remove(itemName) {
    this.items = this.items.filter(item => item !== itemName);
    return `Removing ${itemName} from inventory`;
  },
};

const invokeInventoryAction = function(itemName, action) {
  const act =  action(itemName);
  const msg =  `Invoking action on ${itemName}`;
  return {act, msg};
};

const invokeAdd = invokeInventoryAction('Medkit',inventory.add.bind(inventory));
const arrayAdd = [...inventory.items];
 
console.log(invokeAdd);

console.log(arrayAdd);


const invokeRemove = invokeInventoryAction(
  'Gas mask',
  inventory.remove.bind(inventory)  // Write code in this line
);

const arrayRemove = [...inventory.items];

 
console.log(invokeRemove);

console.log(arrayRemove);

