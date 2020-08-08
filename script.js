var friends = ['Buddy', 'Kitty', 'Teia', 'Zoe', 'Chloe'],
    locations = ['Living Room', 'Kitchen', 'Hallway', 'Weight Room', 'Master Bedroom', 'Guest Bedroom', 'Master Bathroom', 'Guest Bathroom', 'Garage', 'Foyer'],
    weapons = ['Beer Can', 'Controller', 'Flosser', 'Laser Pointer', 'Shoe', 'Clock', 'Mirror', 'Blender', 'Pillow', 'Fan Blade', 'Sock', 'Coffee Pot', 'Bug Spray', 'Pizza Cutter', 'Christmas Lights', 'Strap Wrench', 'Twisty Tie', 'Vacuum', 'Charger Cable', 'Bar Stool'];

function alerts(i) {
    return function() {
        alert(`Accusation ${i}: I accuse ${friends[i % friends.length]}, with the ${weapons[i % weapons.length]} in the ${locations[i % locations.length]}!`);
    }
}

for (var i = 1; i <= 100; i++) {
    var h3 = document.createElement('h3');
    h3.textContent = `Accusation ${i}`;
    document.body.appendChild(h3);
    h3.addEventListener('click', alerts(i));
}